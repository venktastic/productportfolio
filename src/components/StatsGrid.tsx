interface Stat {
  value: string;
  label: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-xl p-6 text-center shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-medium)] transition-shadow"
        >
          <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
