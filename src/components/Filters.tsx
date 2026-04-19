import { Search, X } from "lucide-react";
import { allMaterials, allColors } from "@/data/catalog-data";

interface FiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedMaterials: string[];
  onMaterialToggle: (m: string) => void;
  selectedColors: string[];
  onColorToggle: (c: string) => void;
}

function getColorHex(name: string): string {
  const map: Record<string, string> = {
    Incolor: "#e0e0e0",
    Fumê: "#555555",
    Verde: "#2a7d4f",
    Bronze: "#8B6914",
    Espelhado: "#c0c0c0",
    Preto: "#1a1a1a",
    Champagne: "#c4a35a",
  };
  return map[name] || "#999";
}

const Filters = ({
  searchQuery, onSearchChange,
  selectedMaterials, onMaterialToggle,
  selectedColors, onColorToggle,
}: FiltersProps) => {
  const hasFilters = selectedMaterials.length > 0 || selectedColors.length > 0 || searchQuery;

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
        />
        {searchQuery && (
          <button onClick={() => onSearchChange("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X size={14} />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {/* Materials */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Material:</span>
          {allMaterials.map((m) => (
            <button
              key={m}
              onClick={() => onMaterialToggle(m)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all duration-300 ${
                selectedMaterials.includes(m)
                  ? "bg-[#259364] text-black"
                  : "text-black bg-[#E3F3EC] hover:text-[#259364] hover:border-[#E3F3EC]"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Colors */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Cor:</span>
          {allColors.map((c) => (
            <button
              key={c}
              onClick={() => onColorToggle(c)}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all duration-300 ${
                selectedColors.includes(c)
                  ? "bg-[#259364] text-black"
                  : "text-black bg-[#E3F3EC] hover:text-[#259364] hover:border-[#E3F3EC]"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full border border-white/20" style={{ backgroundColor: getColorHex(c) }} />
              {c}
            </button>
          ))}
        </div>

        {hasFilters && (
          <button
            onClick={() => {
              onSearchChange("");
              selectedMaterials.forEach(onMaterialToggle);
              selectedColors.forEach(onColorToggle);
            }}
            className="text-xs text-[#259364] hover:text-[#146843] underline transition-colors"
          >
            Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
};

export default Filters;
