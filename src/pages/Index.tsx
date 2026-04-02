import { useState, useMemo } from "react";
import { mockData, computeStats, getCategories } from "@/data/mockData";
import StatsCards from "@/components/StatsCards";
import DataTable from "@/components/DataTable";
import CategoryFilter from "@/components/CategoryFilter";
import { BarChart3 } from "lucide-react";

/**
 * Main Dashboard Page
 * Data flow: mockData → filter → compute stats → render
 * In production, replace mockData with fetch("/data") call.
 */
const Index = () => {
  const [categoryFilter, setCategoryFilter] = useState("");

  // Filter data based on selected category
  const filteredData = useMemo(
    () => (categoryFilter ? mockData.filter((item) => item.category === categoryFilter) : mockData),
    [categoryFilter]
  );

  // Compute stats from filtered dataset
  const stats = useMemo(() => computeStats(filteredData), [filteredData]);
  const categories = useMemo(() => getCategories(mockData), []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Content */}
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
