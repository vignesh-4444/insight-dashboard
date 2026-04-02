/**
 * Mock dataset simulating what Flask /data endpoint would return.
 * In production, this would come from fetch("/data").
 */
export interface DataItem {
  id: number;
  name: string;
  category: string;
  status: "completed" | "pending" | "in_progress";
  value: number;
}

export const mockData: DataItem[] = [
  { id: 1, name: "Website Redesign", category: "Design", status: "completed", value: 12000 },
  { id: 2, name: "API Integration", category: "Engineering", status: "in_progress", value: 8500 },
  { id: 3, name: "User Research", category: "Design", status: "completed", value: 4200 },
  { id: 4, name: "Database Migration", category: "Engineering", status: "pending", value: 15000 },
  { id: 5, name: "Marketing Campaign", category: "Marketing", status: "completed", value: 6800 },
  { id: 6, name: "Security Audit", category: "Engineering", status: "completed", value: 9200 },
  { id: 7, name: "Brand Guidelines", category: "Design", status: "in_progress", value: 3500 },
  { id: 8, name: "SEO Optimization", category: "Marketing", status: "pending", value: 2800 },
  { id: 9, name: "Mobile App MVP", category: "Engineering", status: "in_progress", value: 22000 },
  { id: 10, name: "Social Media Ads", category: "Marketing", status: "completed", value: 5400 },
];

/**
 * Compute summary stats — mirrors Flask /stats endpoint logic.
 * Pure function: easy to test and explain in interviews.
 */
export function computeStats(data: DataItem[]) {
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const completedCount = data.filter((item) => item.status === "completed").length;
  const percentCompleted = data.length > 0 ? Math.round((completedCount / data.length) * 100) : 0;

  return { totalValue, completedCount, totalItems: data.length, percentCompleted };
}

/** Get unique categories from dataset */
export function getCategories(data: DataItem[]): string[] {
  return [...new Set(data.map((item) => item.category))];
}
