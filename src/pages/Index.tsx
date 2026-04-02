import { useState, useMemo, useEffect } from "react";
import StatsCards from "@/components/StatsCards";
import DataTable from "@/components/DataTable";
import CategoryFilter from "@/components/CategoryFilter";
import { BarChart3 } from "lucide-react";

const Index = () => {

  const [categoryFilter, setCategoryFilter] = useState("");

  const [data, setData] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({
    totalValue: 0,
    completedCount: 0,
    totalItems: 0,
    percentCompleted: 0,
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/data")
      .then(res => res.json())
      .then(setData);

    fetch("http://127.0.0.1:5000/stats")
      .then(res => res.json())
      .then((data) => {
        setStats({
          totalValue: data.total_value,
          completedCount: data.completed_count,
          totalItems: data.total_items,
          percentCompleted: data.percent_completed,
       });
    });
  }, []);

  const filteredData = useMemo(
    () => (categoryFilter ? data.filter((item) => item.category === categoryFilter) : data),
    [data, categoryFilter]
  );

  const categories = useMemo(
    () => [...new Set(data.map((item) => item.category))],
    [data]
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Analytics Dashboard</h1>
              <p className="text-xs text-muted-foreground">Smart Data Overview</p>
            </div>
          </div>
          <CategoryFilter categories={categories} selected={categoryFilter} onChange={setCategoryFilter} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <StatsCards {...stats} />
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-3">
            Project Data {categoryFilter && `— ${categoryFilter}`}
          </h2>
          <DataTable data={filteredData} />
        </div>
      </main>
    </div>
  );
};

export default Index;