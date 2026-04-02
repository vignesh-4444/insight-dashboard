import type { DataItem } from "@/data/mockData";

const statusStyles: Record<string, string> = {
  completed: "bg-accent/15 text-accent",
  in_progress: "bg-primary/15 text-primary",
  pending: "bg-muted text-muted-foreground",
};

/** Renders the dataset as a clean table */
const DataTable = ({ data }: { data: DataItem[] }) => (
  <div className="bg-card rounded-lg border border-border overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            {["ID", "Name", "Category", "Status", "Value"].map((h) => (
              <th key={h} className="text-left px-4 py-3 font-medium text-muted-foreground">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
              <td className="px-4 py-3 text-muted-foreground">{item.id}</td>
              <td className="px-4 py-3 font-medium text-card-foreground">{item.name}</td>
              <td className="px-4 py-3 text-muted-foreground">{item.category}</td>
              <td className="px-4 py-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[item.status]}`}>
                  {item.status.replace("_", " ")}
                </span>
              </td>
              <td className="px-4 py-3 text-card-foreground">${item.value.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DataTable;
