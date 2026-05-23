import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/page-container";
import { AnalyticsShell } from "@/features/analytics/components/layouts/analytics-shell";
import { AnalyticsGrid } from "@/features/analytics/components/layouts/analytics-grid";
import { AnalyticsDashboardHeader } from "@/features/analytics/components/layouts/dashboard-header";
import { AnalyticsCard } from "@/features/analytics/components/widgets/analytics-card";
import { AnalyticsFunnelChart } from "@/features/analytics/components/charts/funnel-chart";
import { AnalyticsBarChart } from "@/features/analytics/components/charts/bar-chart";
import { AnalyticsPieChart } from "@/features/analytics/components/charts/pie-chart";
import { AnalyticsTrendChart } from "@/features/analytics/components/charts/trend-chart";
import { AnalyticsSkeleton } from "@/features/analytics/components/states/analytics-skeleton";
import { ErrorAnalyticsState } from "@/features/analytics/components/states/error-analytics-state";
import { useEngagementAnalytics } from "@/features/analytics/hooks/use-analytics";
import { PIE_COLORS } from "@/features/analytics/constants";
import type { FunnelStep, CategoryPoint, TimeSeriesPoint } from "@/features/analytics/types";

export default function EngagementAnalyticsPage() {
  const { data, isLoading, isError, refetch } = useEngagementAnalytics();

  const backNav = (
    <div>
      <Button variant="ghost" size="sm" asChild className="-ml-2 gap-1.5 text-text-secondary">
        <Link to="/analytics">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Overview
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
            message="Could not load engagement analytics. Please try again."
            onRetry={() => void refetch()}
          />
        </AnalyticsShell>
      </PageContainer>
    );
  }

  const engagementFunnel: FunnelStep[] = data.funnel.map((step) => ({
    label: step.label,
    value: step.value,
    percentage: step.percentage,
  }));

  const dropOffPoints: CategoryPoint[] = data.charts.drop_off.map((d, i) => ({
    name: d.title.length > 20 ? d.title.slice(0, 20) + "…" : d.title,
    value: d.drop_off_rate,
    fill: PIE_COLORS[i % PIE_COLORS.length],
  }));

  const interactionTimeline: TimeSeriesPoint[] = data.charts.timeline.map((pt) => ({
    date: pt.date,
    value: pt.value,
  }));

  const segmentBreakdown: CategoryPoint[] = data.charts.segments.map((s, i) => ({
    name: s.label.length > 20 ? s.label.slice(0, 20) + "…" : s.label,
    value: s.value,
    fill: s.fill ?? PIE_COLORS[i % PIE_COLORS.length],
  }));

  return (
    <PageContainer>
      <AnalyticsShell>
        {backNav}

        <AnalyticsDashboardHeader
          title="Engagement Analytics"
          description="Respondent lifecycle tracking, drop-off analysis, and interaction patterns."
        />

        {/* Engagement funnel + drop-off */}
        <AnalyticsGrid>
          <AnalyticsCard
            title="Engagement Funnel"
            description="Respondent journey from email send to survey completion"
          >
            <AnalyticsFunnelChart data={engagementFunnel} />
          </AnalyticsCard>

          {dropOffPoints.length > 0 ? (
            <AnalyticsCard
              title="Drop-Off by Survey"
              description="Surveys with the highest respondent drop-off"
            >
              <AnalyticsBarChart
                data={dropOffPoints}
                label="Drop-off %"
                yFormatter={(v) => `${v}%`}
                useItemColors
                height={250}
              />
            </AnalyticsCard>
          ) : (
            <AnalyticsCard
              title="Drop-Off by Survey"
              description="No campaign data available yet"
            >
              <div className="flex h-[250px] items-center justify-center text-sm text-text-muted">
                Send campaigns to see drop-off analysis
              </div>
            </AnalyticsCard>
          )}
        </AnalyticsGrid>

        {/* Interaction timeline + segment breakdown */}
        <AnalyticsGrid>
          <AnalyticsCard
            title="Interaction Timeline"
            description="Daily survey responses over the last 30 days"
          >
            <AnalyticsTrendChart
              data={interactionTimeline}
              label="Interactions"
              height={230}
            />
          </AnalyticsCard>

          {segmentBreakdown.length > 0 ? (
            <AnalyticsCard
              title="Campaign Segment Breakdown"
              description="Emails sent per campaign"
            >
              <AnalyticsPieChart
                data={segmentBreakdown}
                height={250}
                innerRadius={60}
                outerRadius={95}
              />
            </AnalyticsCard>
          ) : (
            <AnalyticsCard
              title="Campaign Segment Breakdown"
              description="No campaign segments yet"
            >
              <div className="flex h-[250px] items-center justify-center text-sm text-text-muted">
                Create campaigns to see segment breakdown
              </div>
            </AnalyticsCard>
          )}
        </AnalyticsGrid>
      </AnalyticsShell>
    </PageContainer>
  );
}
