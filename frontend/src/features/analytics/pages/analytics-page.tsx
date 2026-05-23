import { BarChart3, CheckSquare, Mail, TrendingDown, MousePointerClick, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageContainer } from "@/components/layout/page-container";
import { AnalyticsShell } from "@/features/analytics/components/layouts/analytics-shell";
import { AnalyticsGrid } from "@/features/analytics/components/layouts/analytics-grid";
import { AnalyticsDashboardHeader } from "@/features/analytics/components/layouts/dashboard-header";
import { StatGrid } from "@/features/analytics/components/metrics/stat-grid";
import { AnalyticsCard } from "@/features/analytics/components/widgets/analytics-card";
import { AnalyticsTrendChart } from "@/features/analytics/components/charts/trend-chart";
import { AnalyticsBarChart } from "@/features/analytics/components/charts/bar-chart";
import { AnalyticsSkeleton } from "@/features/analytics/components/states/analytics-skeleton";
import { ErrorAnalyticsState } from "@/features/analytics/components/states/error-analytics-state";
import { useDashboardAnalytics } from "@/features/analytics/hooks/use-analytics";
import type { MetricCardData, CategoryPoint, TimeSeriesPoint } from "@/features/analytics/types";

export default function AnalyticsPage() {
  const { data, isLoading, isError, refetch } = useDashboardAnalytics();

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
        <ErrorAnalyticsState
          message="Could not load analytics overview. Please try again."
          onRetry={() => void refetch()}
        />
      </PageContainer>
    );
  }

  const kpiMetrics: MetricCardData[] = [
    {
      label: "Total Responses",
      value: data.metrics.total_responses,
      icon: BarChart3,
      description: "across all surveys",
    },
    {
      label: "Completion Rate",
      value: `${data.metrics.overall_response_rate.toFixed(1)}%`,
      icon: CheckSquare,
      description: "emails sent → responses",
    },
    {
      label: "Campaigns",
      value: data.metrics.total_campaigns,
      icon: Mail,
      description: "total email campaigns",
    },
    {
      label: "Surveys",
      value: data.metrics.total_surveys,
      icon: TrendingDown,
      description: "total surveys created",
    },
  ];

  const responseTrend: TimeSeriesPoint[] = data.charts.response_trend.map((pt) => ({
    date: pt.date,
    value: pt.value,
  }));

  const topSurveysData: CategoryPoint[] = data.charts.top_surveys.map((s) => ({
    name: s.title.length > 22 ? s.title.slice(0, 22) + "…" : s.title,
    value: s.response_count,
  }));

  return (
    <PageContainer>
      <AnalyticsShell>
        <AnalyticsDashboardHeader
          title="Analytics Overview"
          description="Survey performance, campaign engagement, and response metrics at a glance."
        />

        {/* KPI metrics */}
        <StatGrid metrics={kpiMetrics} />

        {/* Primary charts */}
        <AnalyticsGrid>
          <AnalyticsCard
            title="Response Trend"
            description="Total responses collected over the last 30 days"
          >
            <AnalyticsTrendChart
              data={responseTrend}
              label="Responses"
              height={260}
            />
          </AnalyticsCard>

          <AnalyticsCard
            title="Top Performing Surveys"
            description="Surveys ranked by total response count"
            footer="All-time response data"
          >
            <AnalyticsBarChart
              data={topSurveysData}
              label="Responses"
              height={260}
            />
          </AnalyticsCard>
        </AnalyticsGrid>

        {/* Top surveys with clickable links */}
        {data.charts.top_surveys.length > 0 && (
          <div className="rounded-xl border border-border-default bg-white p-5 shadow-sm dark:bg-card">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-text-primary">Survey Analytics</p>
              <p className="text-xs text-text-muted">Click a survey to view detailed analytics</p>
            </div>
            <ul className="divide-y divide-border-soft">
              {data.charts.top_surveys.map((s) => (
                <li key={s.survey_id}>
                  <Link
                    to={`/dashboard/analytics/surveys/${s.survey_id}`}
                    className="flex items-center justify-between py-2.5 text-sm hover:text-primary-500 transition-colors group"
                  >
                    <span className="truncate text-text-primary group-hover:text-primary-500">
                      {s.title}
                    </span>
                    <span className="flex items-center gap-1.5 shrink-0 ml-3 text-text-muted group-hover:text-primary-500">
                      <span className="font-medium">{s.response_count}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Insight spotlight row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border-default bg-white p-5 shadow-sm dark:bg-card">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                <MousePointerClick className="h-5 w-5 text-primary-500" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium text-text-secondary">Emails Sent</p>
                <p className="text-2xl font-extrabold text-text-primary">
                  {data.metrics.total_emails_sent.toLocaleString()}
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-text-muted">
              Across all distribution campaigns
            </p>
          </div>

          <div className="rounded-xl border border-border-default bg-primary-50 p-5 sm:col-span-2 dark:bg-primary-900/10">
            <p className="text-sm font-semibold text-primary-800 dark:text-primary-300">
              Quick Insights
            </p>
            <ul className="mt-3 space-y-2" role="list">
              {[
                `${data.metrics.total_surveys} surveys created across your account.`,
                `${data.metrics.total_responses} total responses collected.`,
                `${data.metrics.total_campaigns} email campaigns launched.`,
              ].map((insight) => (
                <li
                  key={insight}
                  className="flex items-start gap-2 text-xs text-primary-700 dark:text-primary-400"
                >
                  <span
                    className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400"
                    aria-hidden="true"
                  />
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnalyticsShell>
    </PageContainer>
  );
}
