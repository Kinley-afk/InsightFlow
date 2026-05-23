import { getRequest } from "@/lib/api/utils";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { ApiResponse } from "@/lib/api/types";

// ─── Backend response shapes ──────────────────────────────────────────────────

export type BackendTimeSeries = { date: string; value: number };
export type BackendFunnelStep = { label: string; value: number; percentage: number };

export type DashboardAnalyticsData = {
  metrics: {
    total_surveys: number;
    total_responses: number;
    total_campaigns: number;
    total_emails_sent: number;
    overall_response_rate: number;
  };
  charts: {
    response_trend: BackendTimeSeries[];
    top_surveys: { survey_id: number; title: string; response_count: number }[];
  };
  trends: { response_trend: BackendTimeSeries[] };
  segments: { top_surveys: { survey_id: number; title: string; response_count: number }[] };
};

export type SurveyAnalyticsData = {
  metrics: {
    total_responses: number;
    completion_rate: number;
    drop_off_rate: number;
    question_count: number;
  };
  charts: {
    response_trend: BackendTimeSeries[];
    question_engagement: {
      question_id: number;
      question_text: string;
      answer_count: number;
      engagement_rate: number;
      order: number;
    }[];
  };
  trends: { response_trend: BackendTimeSeries[] };
  funnel: BackendFunnelStep[];
};

export type CampaignAnalyticsData = {
  metrics: {
    emails_sent: number;
    emails_failed: number;
    delivery_rate: number;
    response_rate: number;
    total_responses: number;
  };
  charts: { delivery_trend: BackendTimeSeries[] };
  trends: { delivery_trend: BackendTimeSeries[] };
  funnel: BackendFunnelStep[];
};

export type EngagementAnalyticsData = {
  metrics: {
    total_sent: number;
    total_responses: number;
    total_campaigns: number;
    overall_response_rate: number;
  };
  charts: {
    funnel: BackendFunnelStep[];
    drop_off: {
      survey_id: number;
      title: string;
      emails_sent: number;
      responses: number;
      response_rate: number;
      drop_off_rate: number;
    }[];
    timeline: BackendTimeSeries[];
    segments: { label: string; value: number; fill: string | null }[];
  };
  trends: { timeline: BackendTimeSeries[] };
  funnel: BackendFunnelStep[];
};

// ─── Fetch functions ──────────────────────────────────────────────────────────

export async function fetchDashboardAnalytics(): Promise<DashboardAnalyticsData> {
  const res = await getRequest<ApiResponse<DashboardAnalyticsData>>(
    API_ENDPOINTS.analytics.dashboard
  );
  return res.data;
}

export async function fetchSurveyAnalytics(surveyId: number | string): Promise<SurveyAnalyticsData> {
  const res = await getRequest<ApiResponse<SurveyAnalyticsData>>(
    API_ENDPOINTS.analytics.survey(surveyId)
  );
  return res.data;
}

export async function fetchCampaignAnalytics(campaignId: number | string): Promise<CampaignAnalyticsData> {
  const res = await getRequest<ApiResponse<CampaignAnalyticsData>>(
    API_ENDPOINTS.analytics.campaign(campaignId)
  );
  return res.data;
}

export async function fetchEngagementAnalytics(): Promise<EngagementAnalyticsData> {
  const res = await getRequest<ApiResponse<EngagementAnalyticsData>>(
    API_ENDPOINTS.analytics.engagement
  );
  return res.data;
}
