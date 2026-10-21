import type { Category } from "../../types/campus-event";

export interface EventFilterProps {
  searchText: string;
  category: Category | "";
  onSearchChange: (text: string) => void;
  onCategoryChange: (category: Category | "") => void;
  categories?: Category[];
}

const defaultCategories: Category[] = [
  "Seminer",
  "Atölye",
  "Söyleşi",
  "Yarışma",
];

export function EventFilter({
  searchText,
  category,
  onSearchChange,
  onCategoryChange,
  categories = defaultCategories,
}: EventFilterProps) {
  return (
    <form
      className="filtre-karti"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="filtre-alanlari">
        <div className="filtre-grup">
          <label htmlFor="search-input">Etkinlik ara</label>
          <input
            type="search"
            id="search-input"
            placeholder="Örn. atölye, kariyer"
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="filtre-grup">
          <label htmlFor="category-select">Kategori</label>
          <select
            id="category-select"
            value={category}
            onChange={(e) =>
              onCategoryChange(e.target.value as Category | "")
            }
          >
            <option value="">Tümü</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
}

export default EventFilter;
