import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ExternalLink } from "lucide-react";
import type { Product } from "@/data/catalog-data";
import { getWhatsAppLink } from "@/data/catalog-data";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>

            {/* Image */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h2>
              <p className="text-muted-foreground mb-6">{product.description}</p>

              {/* Materials */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Materiais</h4>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((m) => (
                    <span key={m} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <h4 className="text-sm font-medium text-foreground mb-2">Cores disponíveis</h4>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <div key={color} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm">
                      <span
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: getColorHex(color) }}
                      />
                      <span className="text-secondary-foreground">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={getWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta w-full text-center text-base py-4"
              >
                <MessageCircle size={18} />
                Solicitar Orçamento
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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

export default ProductModal;
