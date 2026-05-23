from django.urls import path

from apps.public_surveys.views.public_survey_views import (
    PublicSurveyDetailView,
    PublicSurveySubmitView,
)

urlpatterns = [
    # GET  /api/v1/public/surveys/<pk>/        — load a published survey (pk or slug)
    path(
        "public/surveys/<str:pk>/",
        PublicSurveyDetailView.as_view(),
        name="public-survey-detail",
    ),
    # POST /api/v1/public/surveys/<pk>/submit/ — submit a response (pk or slug)
    path(
        "public/surveys/<str:pk>/submit/",
        PublicSurveySubmitView.as_view(),
        name="public-survey-submit",
    ),
]
