import { BarChart3, FileText, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useDashboardAnalytics } from "@/features/analytics/hooks/use-analytics";

type StatCardProps = {
  label: string;
  value: string | number;
  icon: React.ElementType;
  to?: string;
};

function StatCard({ label, value, icon: Icon, to }: StatCardProps) {
  const content = (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-text-secondary">{label}</CardTitle>
        <Icon className="h-4 w-4 text-text-muted" aria-hidden="true" />
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-text-primary">{value}</p>
      </CardContent>
    </Card>
  );

  if (to) {
    return (
      <Link to={to} className="block">
        {content}
      </Link>
    );
  }
  return content;
}

function StatCardSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <Skeleton className="h-4 w-24" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-16" />
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  const { data, isLoading } = useDashboardAnalytics();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-sm text-text-secondary">Welcome to InsightFlow</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : (
          <>
            <StatCard
              label="Surveys"
              value={data?.metrics.total_surveys ?? 0}
              icon={FileText}
              to="/surveys"
            />
            <StatCard
              label="Responses"
              value={data?.metrics.total_responses ?? 0}
              icon={Users}
              to="/analytics"
            />
            <StatCard
              label="Campaigns"
              value={data?.metrics.total_campaigns ?? 0}
              icon={Mail}
              to="/dashboard/campaigns"
            />
            <StatCard
              label="Response Rate"
              value={`${(data?.metrics.overall_response_rate ?? 0).toFixed(1)}%`}
              icon={BarChart3}
              to="/analytics"
            />
          </>
        )}
      </div>
    </div>
  );
}
