import { useQuery } from "@tanstack/react-query";
import {
  fetchDashboardAnalytics,
  fetchSurveyAnalytics,
  fetchCampaignAnalytics,
  fetchEngagementAnalytics,
  type DashboardAnalyticsData,
  type SurveyAnalyticsData,
  type CampaignAnalyticsData,
  type EngagementAnalyticsData,
} from "../services/analytics-api";

const STALE_TIME = 1000 * 60 * 5; // 5 minutes

export function useDashboardAnalytics() {
  return useQuery<DashboardAnalyticsData, Error>({
    queryKey: ["analytics", "dashboard"],
    queryFn: fetchDashboardAnalytics,
    staleTime: STALE_TIME,
  });
}

export function useSurveyAnalytics(surveyId: string | undefined) {
  return useQuery<SurveyAnalyticsData, Error>({
    queryKey: ["analytics", "survey", surveyId],
    queryFn: () => fetchSurveyAnalytics(surveyId!),
    enabled: !!surveyId,
    staleTime: STALE_TIME,
  });
}

export function useCampaignAnalytics(campaignId: string | undefined) {
  return useQuery<CampaignAnalyticsData, Error>({
    queryKey: ["analytics", "campaign", campaignId],
    queryFn: () => fetchCampaignAnalytics(campaignId!),
    enabled: !!campaignId,
    staleTime: STALE_TIME,
  });
}

export function useEngagementAnalytics() {
  return useQuery<EngagementAnalyticsData, Error>({
    queryKey: ["analytics", "engagement"],
    queryFn: fetchEngagementAnalytics,
    staleTime: STALE_TIME,
  });
}
