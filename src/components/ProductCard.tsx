import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/catalog-data";

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
}

const ProductCard = ({ product, index, onSelect }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      layout
      className="card-premium group cursor-pointer"
      onClick={() => onSelect(product)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Color dots */}
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          {product.colors.slice(0, 4).map((color) => (
            <span
              key={color}
              className="w-3 h-3 rounded-full border border-white/30"
              style={{ backgroundColor: getColorHex(color) }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Materials */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.materials.map((m) => (
            <span key={m} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
              {m}
            </span>
          ))}
        </div>

        <div className="flex items-center text-sm text-primary font-medium gap-1 group-hover:gap-2 transition-all duration-300">
          Ver detalhes
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

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

export default ProductCard;
