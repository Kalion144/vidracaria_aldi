import { motion } from "framer-motion";
import { categories } from "@/data/catalog-data";
import {
  PanelTop, Sparkles, Layers, DoorOpen,
  Home, Shield, Square, Settings,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  PanelTop, Sparkles, Layers, DoorOpen,
  Home, Shield, Square, Settings,
};

interface CategoryMenuProps {
  activeCategory: string | null;
  onSelect: (id: string | null) => void;
}

const CategoryMenu = ({ activeCategory, onSelect }: CategoryMenuProps) => {
  return (
    <div className="container mx-auto px-4 flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth">
      <button
        onClick={() => onSelect(null)}
        className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
          activeCategory === null
            ? "bg-[#259364] text-black"
            : "text-black bg-[#E3F3EC]  hover:text-[#259364] hover:border-[#E3F3EC]"
        }`}
      >
        Todos
      </button>
      {categories.map((cat, i) => {
        const Icon = iconMap[cat.icon] || Square;
        const isActive = activeCategory === cat.id;
        return (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => onSelect(cat.id)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              isActive
                ? "bg-[#259364] text-black"
                : "text-black bg-[#E3F3EC] hover:text-[#259364] hover:border-[#E3F3EC]"
            }`}
          >
            <Icon size={16} />
            {cat.name}
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
