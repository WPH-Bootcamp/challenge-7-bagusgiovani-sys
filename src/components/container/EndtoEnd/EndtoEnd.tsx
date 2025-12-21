import type { MetCard } from "../../constant/AllData";

type MetricCardProps = {
  item: MetCard;
};

export default function MetricCard({ item }: MetricCardProps) {
  return (
    <div className="metric-card">
      <span className="metric-value">{item.value}</span>
      <span className="metric-label mt-2">{item.label}</span>
    </div>
  );
}