import { DollarSign, CheckCircle, BarChart3, TrendingUp } from "lucide-react";

interface StatsProps {
  totalValue: number;
  completedCount: number;
  totalItems: number;
  percentCompleted: number;
}

/** Displays computed summary stats in a card grid */
const StatsCards = ({ totalValue, completedCount, totalItems, percentCompleted }: StatsProps) => {
  const cards = [
    {
      label: "Total Value",
      value: `$${totalValue.toLocaleString()}`,
      icon: DollarSign,
      accent: "text-primary",
      bg: "bg-primary/10",
    },
    {
      label: "Completed",
      value: completedCount,
      icon: CheckCircle,
      accent: "text-accent",
      bg: "bg-accent/10",
    },
    {
      label: "Total Items",
      value: totalItems,
      icon: BarChart3,
      accent: "text-muted-foreground",
      bg: "bg-muted",
    },
    {
      label: "Completion Rate",
      value: `${percentCompleted}%`,
      icon: TrendingUp,
      accent: "text-primary",
      bg: "bg-primary/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.label} className="bg-card rounded-lg border border-border p-5 flex items-center gap-4">
          <div className={`${card.bg} p-3 rounded-lg`}>
            <card.icon className={`w-5 h-5 ${card.accent}`} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{card.label}</p>
            <p className="text-2xl font-semibold text-card-foreground">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
