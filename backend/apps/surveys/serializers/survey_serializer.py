from rest_framework import serializers
from apps.surveys.models.survey import Survey, SURVEY_STATUS_CHOICES
from apps.surveys.serializers.question_serializer import QuestionSerializer


VALID_STATUSES = {s[0] for s in SURVEY_STATUS_CHOICES}


class SurveySerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    response_count = serializers.SerializerMethodField()
    completion_rate = serializers.SerializerMethodField()

    class Meta:
        model = Survey
        fields = [
            "id",
            "owner",
            "title",
            "description",
            "status",
            "slug",
            "is_public",
            "created_at",
            "updated_at",
            "questions",
            "response_count",
            "completion_rate",
        ]
        read_only_fields = ["id", "owner", "slug", "created_at", "updated_at"]

    def get_response_count(self, obj):
        """Total number of submitted responses for this survey."""
        return obj.responses.count()

    def get_completion_rate(self, obj):
        """
        Completion rate as a percentage.
        Defined as: responses / emails_sent * 100 if campaigns exist,
        otherwise None (no distribution baseline).
        """
        from apps.email_campaigns.models import DeliveryLog
        from apps.email_campaigns.constants import DELIVERY_STATUS_SENT

        emails_sent = DeliveryLog.objects.filter(
            campaign__survey=obj,
            status=DELIVERY_STATUS_SENT,
        ).count()

        if not emails_sent:
            return None

        response_count = obj.responses.count()
        return round((response_count / emails_sent) * 100, 1)

    def validate_title(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("Title cannot be empty.")
        if len(value.strip()) > 255:
            raise serializers.ValidationError("Title cannot exceed 255 characters.")
        return value.strip()

    def validate_status(self, value):
        if value not in VALID_STATUSES:
            raise serializers.ValidationError(
                f"Invalid status. Must be one of: {', '.join(VALID_STATUSES)}"
            )
        return value
