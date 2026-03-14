import { MapPin } from "lucide-react";

const LocationMap = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Nossa <span className="text-gradient">Localização</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <p>Guará II QE 40 Loja 1 — Guará, Brasília - DF | CEP: 70297-400</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
          <iframe
            title="Localização Aldi Vidros"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d-47.98!3d-15.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ5JzQ4LjAiUyA0N8KwNTgnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
