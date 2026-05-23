import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Send, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/page-container";
import { AnalyticsShell } from "@/features/analytics/components/layouts/analytics-shell";
import { AnalyticsGrid } from "@/features/analytics/components/layouts/analytics-grid";
import { AnalyticsDashboardHeader } from "@/features/analytics/components/layouts/dashboard-header";
import { StatGrid } from "@/features/analytics/components/metrics/stat-grid";
import { AnalyticsCard } from "@/features/analytics/components/widgets/analytics-card";
import { AnalyticsTrendChart } from "@/features/analytics/components/charts/trend-chart";
import { AnalyticsFunnelChart } from "@/features/analytics/components/charts/funnel-chart";
import { PercentageCard } from "@/features/analytics/components/metrics/percentage-card";
import { AnalyticsSkeleton } from "@/features/analytics/components/states/analytics-skeleton";
import { ErrorAnalyticsState } from "@/features/analytics/components/states/error-analytics-state";
import { useCampaignAnalytics } from "@/features/analytics/hooks/use-analytics";
import { CHART_COLORS } from "@/features/analytics/constants";
import type { MetricCardData, TimeSeriesPoint, FunnelStep } from "@/features/analytics/types";

export default function CampaignAnalyticsPage() {
  const { campaignId } = useParams<{ campaignId: string }>();
  const { data, isLoading, isError, refetch } = useCampaignAnalytics(campaignId);

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
            message="Could not load campaign analytics. Please try again."
            onRetry={() => void refetch()}
          />
        </AnalyticsShell>
      </PageContainer>
    );
  }

  const kpiMetrics: MetricCardData[] = [
    {
      label: "Emails Sent",
      value: data.metrics.emails_sent,
      icon: Send,
      description: "total recipients",
    },
    {
      label: "Delivery Rate",
      value: `${data.metrics.delivery_rate.toFixed(1)}%`,
      icon: Mail,
      description: "successfully delivered",
    },
    {
      label: "Response Rate",
      value: `${data.metrics.response_rate.toFixed(1)}%`,
      icon: TrendingUp,
      description: "sent → completed",
    },
    {
      label: "Total Responses",
      value: data.metrics.total_responses,
      icon: TrendingUp,
      description: "survey submissions",
    },
  ];

  const deliveryTrend: TimeSeriesPoint[] = data.charts.delivery_trend.map((pt) => ({
    date: pt.date,
    value: pt.value,
  }));

  const funnel: FunnelStep[] = data.funnel.map((step) => ({
    label: step.label,
    value: step.value,
    percentage: step.percentage,
  }));

  return (
    <PageContainer>
      <AnalyticsShell>
        {backNav}

        <AnalyticsDashboardHeader
          title="Campaign Analytics"
          description={`Campaign ID: ${campaignId ?? "—"}`}
        />

        {/* KPIs */}
        <StatGrid metrics={kpiMetrics} />

        {/* Rate summary cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <PercentageCard
            label="Delivery Rate"
            percentage={data.metrics.delivery_rate}
            description="Recipients who received the survey email"
            color={CHART_COLORS.primary}
          />
          <PercentageCard
            label="Response Rate"
            percentage={data.metrics.response_rate}
            description="Recipients who completed the survey"
            color={CHART_COLORS.secondary}
          />
          <PercentageCard
            label="Failed"
            percentage={
              data.metrics.emails_sent > 0
                ? (data.metrics.emails_failed / data.metrics.emails_sent) * 100
                : 0
            }
            description="Delivery failures"
            color={CHART_COLORS.danger}
          />
        </div>

        {/* Delivery trend + funnel */}
        <AnalyticsGrid>
          <AnalyticsCard
            title="Delivery Trend"
            description="Daily successful deliveries over the last 30 days"
          >
            <AnalyticsTrendChart
              data={deliveryTrend}
              label="Delivered"
              height={250}
            />
          </AnalyticsCard>

          <AnalyticsCard
            title="Campaign Funnel"
            description="From email send to survey response"
          >
            <AnalyticsFunnelChart data={funnel} />
          </AnalyticsCard>
        </AnalyticsGrid>
      </AnalyticsShell>
    </PageContainer>
  );
}
