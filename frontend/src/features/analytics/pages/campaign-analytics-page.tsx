import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Send, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
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
import { getRequest } from "@/lib/api/utils";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import { CHART_COLORS } from "@/features/analytics/constants";
import type { ApiResponse } from "@/lib/api/types";
import type { MetricCardData, TimeSeriesPoint, FunnelStep } from "@/features/analytics/types";

// ─── Minimal campaign list type ───────────────────────────────────────────────

type CampaignSummary = {
  id: string;
  title: string;
  status: string;
};

function useCampaignList() {
  return useQuery<CampaignSummary[]>({
    queryKey: ["campaigns"],
    queryFn: async () => {
      const res = await getRequest<ApiResponse<CampaignSummary[]>>(API_ENDPOINTS.campaigns.list);
      return res.data;
    },
  });
}

// ─── Campaign picker (shown when no campaignId is selected) ───────────────────

function CampaignPicker() {
  const navigate = useNavigate();
  const { data: campaigns = [], isLoading } = useCampaignList();

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
          title="Campaign Analytics"
          description="Select a campaign to view its detailed analytics."
        />

        {isLoading ? (
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-14 animate-pulse rounded-xl bg-bg-muted" />
            ))}
          </div>
        ) : campaigns.length === 0 ? (
          <div className="rounded-xl border border-border-default bg-white p-8 text-center shadow-sm dark:bg-card">
            <p className="text-sm font-medium text-text-primary">No campaigns yet</p>
            <p className="mt-1 text-sm text-text-muted">Create a campaign to start tracking analytics.</p>
            <Button className="mt-4" size="sm" onClick={() => navigate("/dashboard/campaigns/new")}>
              Create Campaign
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            {campaigns.map((campaign) => (
              <button
                key={campaign.id}
                type="button"
                onClick={() => navigate(`/dashboard/analytics/campaigns/${campaign.id}`)}
                className="flex w-full items-center justify-between rounded-xl border border-border-default bg-white px-5 py-4 text-left shadow-sm transition-all hover:border-primary-300 hover:bg-primary-50 hover:shadow-md dark:bg-card"
              >
                <div>
                  <p className="text-sm font-semibold text-text-primary">{campaign.title}</p>
                  <p className="mt-0.5 text-xs text-text-muted capitalize">{campaign.status}</p>
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

// ─── Main campaign analytics view ─────────────────────────────────────────────

export default function CampaignAnalyticsPage() {
  const { campaignId } = useParams<{ campaignId: string }>();

  if (!campaignId) return <CampaignPicker />;

  return <CampaignAnalyticsContent campaignId={campaignId} />;
}

function CampaignAnalyticsContent({ campaignId }: { campaignId: string }) {
  const { data, isLoading, isError, refetch } = useCampaignAnalytics(campaignId);

  const backNav = (
    <div>
      <Button variant="ghost" size="sm" asChild className="-ml-2 gap-1.5 text-text-secondary">
        <Link to="/dashboard/analytics/campaigns">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All Campaigns
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
            message="Could not load campaign analytics. The campaign may not exist or you may not have access."
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
          description={`Campaign ID: ${campaignId}`}
        />

        <StatGrid metrics={kpiMetrics} />

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

        <AnalyticsGrid>
          <AnalyticsCard
            title="Delivery Trend"
            description="Daily successful deliveries over the last 30 days"
          >
            <AnalyticsTrendChart data={deliveryTrend} label="Delivered" height={250} />
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
