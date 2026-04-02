interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
}

/** Dropdown filter for category selection */
const CategoryFilter = ({ categories, selected, onChange }: CategoryFilterProps) => (
  <select
    value={selected}
    onChange={(e) => onChange(e.target.value)}
    className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
  >
    <option value="">All Categories</option>
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </select>
);

export default CategoryFilter;
