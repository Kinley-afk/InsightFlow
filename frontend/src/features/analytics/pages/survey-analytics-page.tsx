import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckSquare, Clock, TrendingDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/page-container";
import { AnalyticsShell } from "@/features/analytics/components/layouts/analytics-shell";
import { AnalyticsGrid } from "@/features/analytics/components/layouts/analytics-grid";
import { AnalyticsDashboardHeader } from "@/features/analytics/components/layouts/dashboard-header";
import { StatGrid } from "@/features/analytics/components/metrics/stat-grid";
import { AnalyticsCard } from "@/features/analytics/components/widgets/analytics-card";
import { AnalyticsTrendChart } from "@/features/analytics/components/charts/trend-chart";
import { AnalyticsBarChart } from "@/features/analytics/components/charts/bar-chart";
import { AnalyticsFunnelChart } from "@/features/analytics/components/charts/funnel-chart";
import { AnalyticsSkeleton } from "@/features/analytics/components/states/analytics-skeleton";
import { ErrorAnalyticsState } from "@/features/analytics/components/states/error-analytics-state";
import { useSurveyAnalytics } from "@/features/analytics/hooks/use-analytics";
import { useSurveys } from "@/features/surveys/hooks/use-surveys";
import type { MetricCardData, TimeSeriesPoint, FunnelStep, CategoryPoint } from "@/features/analytics/types";

// ─── Survey picker (shown when no valid surveyId is selected) ─────────────────

function SurveyPicker() {
  const navigate = useNavigate();
  const { data: surveys = [], isLoading } = useSurveys();

  return (
    <PageContainer>
      <AnalyticsShell>
        <div>
          <Button variant="ghost" size="sm" asChild className="-ml-2 gap-1.5 text-text-secondary">
            <Link to="/analytics">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Overview
            </Link>
          </Button>
        </div>

        <AnalyticsDashboardHeader
          title="Survey Analytics"
          description="Select a survey to view its detailed analytics."
        />

        {isLoading ? (
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-14 animate-pulse rounded-xl bg-bg-muted" />
            ))}
          </div>
        ) : surveys.length === 0 ? (
          <div className="rounded-xl border border-border-default bg-white p-8 text-center shadow-sm dark:bg-card">
            <p className="text-sm font-medium text-text-primary">No surveys yet</p>
            <p className="mt-1 text-sm text-text-muted">Create a survey to start collecting analytics.</p>
            <Button className="mt-4" size="sm" onClick={() => navigate("/surveys/create")}>
              Create Survey
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            {surveys.map((survey) => (
              <button
                key={survey.id}
                type="button"
                onClick={() => navigate(`/dashboard/analytics/surveys/${survey.id}`)}
                className="flex w-full items-center justify-between rounded-xl border border-border-default bg-white px-5 py-4 text-left shadow-sm transition-all hover:border-primary-300 hover:bg-primary-50 hover:shadow-md dark:bg-card"
              >
                <div>
                  <p className="text-sm font-semibold text-text-primary">{survey.title}</p>
                  <p className="mt-0.5 text-xs text-text-muted capitalize">
                    {survey.status}
                    {survey.response_count != null && ` · ${survey.response_count} responses`}
                  </p>
                </div>
                <span className="text-xs font-medium text-primary-500">View →</span>
              </button>
            ))}
          </div>
        )}
      </AnalyticsShell>
    </PageContainer>
  );
}

// ─── Main survey analytics view ───────────────────────────────────────────────

export default function SurveyAnalyticsPage() {
  const { surveyId } = useParams<{ surveyId: string }>();

  // If no surveyId in URL, show the picker
  if (!surveyId) return <SurveyPicker />;

  return <SurveyAnalyticsContent surveyId={surveyId} />;
}

function SurveyAnalyticsContent({ surveyId }: { surveyId: string }) {
  const { data, isLoading, isError, refetch } = useSurveyAnalytics(surveyId);

  const backNav = (
    <div>
      <Button variant="ghost" size="sm" asChild className="-ml-2 gap-1.5 text-text-secondary">
        <Link to="/dashboard/analytics/surveys">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All Surveys
        </Link>
      </Button>
    </div>
  );

  if (isLoading) {
    return (
      <PageContainer>
        <AnalyticsSkeleton />
      </PageContainer>
    );
  }

  if (isError || !data) {
    return (
      <PageContainer>
        <AnalyticsShell>
          {backNav}
          <ErrorAnalyticsState
            message="Could not load survey analytics. The survey may not exist or you may not have access."
            onRetry={() => void refetch()}
          />
        </AnalyticsShell>
      </PageContainer>
    );
  }

  const kpiMetrics: MetricCardData[] = [
    {
      label: "Total Responses",
      value: data.metrics.total_responses,
      icon: Users,
      description: "submitted responses",
    },
    {
      label: "Completion Rate",
      value: `${data.metrics.completion_rate.toFixed(1)}%`,
      icon: CheckSquare,
      description: "of emails sent",
    },
    {
      label: "Questions",
      value: data.metrics.question_count,
      icon: Clock,
      description: "in this survey",
    },
    {
      label: "Drop-Off Rate",
      value: `${data.metrics.drop_off_rate.toFixed(1)}%`,
      icon: TrendingDown,
      description: "did not respond",
    },
  ];

  const responseTrend: TimeSeriesPoint[] = data.charts.response_trend.map((pt) => ({
    date: pt.date,
    value: pt.value,
  }));

  const completionFunnel: FunnelStep[] = data.funnel.map((step) => ({
    label: step.label,
    value: step.value,
    percentage: step.percentage,
  }));

  const questionEngagement: CategoryPoint[] = data.charts.question_engagement.map((q) => ({
    name: q.question_text.length > 20 ? q.question_text.slice(0, 20) + "…" : q.question_text,
    value: q.engagement_rate,
    fill: undefined,
  }));

  return (
    <PageContainer>
      <AnalyticsShell>
        {backNav}

        <AnalyticsDashboardHeader
          title="Survey Analytics"
          description={`Survey ID: ${surveyId}`}
        />

        <StatGrid metrics={kpiMetrics} />

        <AnalyticsGrid>
          <AnalyticsCard
            title="Response Trend"
            description="Daily response volume over the last 30 days"
          >
            <AnalyticsTrendChart data={responseTrend} label="Responses" height={250} />
          </AnalyticsCard>

          <AnalyticsCard
            title="Completion Funnel"
            description="Drop-off analysis from email send to submission"
          >
            <AnalyticsFunnelChart data={completionFunnel} />
          </AnalyticsCard>
        </AnalyticsGrid>

        {questionEngagement.length > 0 && (
          <AnalyticsCard
            title="Question Engagement"
            description="Percentage of respondents who answered each question"
            footer="Lower values indicate drop-off at that question"
          >
            <AnalyticsBarChart
              data={questionEngagement}
              label="% Answered"
              yFormatter={(v) => `${v}%`}
              useItemColors
              height={240}
            />
          </AnalyticsCard>
        )}
      </AnalyticsShell>
    </PageContainer>
  );
}
