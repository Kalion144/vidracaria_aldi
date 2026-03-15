"use client"
import { useState } from "react";
import {
  Layers,
  Sparkles,
  Shield,
  LayoutGrid,
  Home,
  Fence,
  Bath,
  Settings,
  X,
} from "lucide-react";

const services = [
  { icon: Layers, title: "Blindex", desc: "Vidros temperados resistentes e elegantes", detail: "Os vidros Blindex são sinônimo de segurança e durabilidade. Fabricados com vidro temperado de alta resistência, são ideais para fachadas, portas, divisórias e vitrines. Oferecemos diversas espessuras e acabamentos para atender às necessidades do seu projeto." },
  { icon: Sparkles, title: "Espelhos", desc: "Espelhos sob medida para qualquer ambiente", detail: "Trabalhamos com espelhos decorativos, bisotados, lapidados e sob medida. Perfeitos para banheiros, salas, academias e estabelecimentos comerciais. Instalação profissional com garantia de qualidade." },
  { icon: Shield, title: "Películas", desc: "Proteção térmica e privacidade", detail: "Películas de controle solar, segurança e privacidade. Reduzem o calor, protegem contra raios UV e proporcionam privacidade sem comprometer a luminosidade natural dos ambientes." },
  { icon: LayoutGrid, title: "Esquadrias", desc: "Estruturas modernas em vidro e alumínio", detail: "Esquadrias em alumínio e vidro para janelas, portas de correr, basculantes e maxim-ar. Combinamos funcionalidade e design para criar soluções que valorizam seu imóvel." },
  { icon: Home, title: "Pergolados", desc: "Coberturas sofisticadas em vidro", detail: "Pergolados em vidro laminado ou temperado que permitem entrada de luz natural com proteção contra intempéries. Ideais para áreas externas, varandas e jardins." },
  { icon: Fence, title: "Guarda Corpo", desc: "Segurança com transparência", detail: "Guarda-corpos em vidro temperado e laminado para escadas, sacadas e mezaninos. Design clean que garante segurança sem obstruir a visão do ambiente." },
  { icon: Bath, title: "Box", desc: "Boxes personalizados para banheiro", detail: "Boxes em vidro temperado com diversas opções de acabamento: incolor, fumê, bronze e serigrafado. Instalação precisa com perfis em alumínio de alta qualidade." },
  { icon: Settings, title: "Soluções sob demanda", desc: "Projetos exclusivos para sua necessidade", detail: "Desenvolvemos projetos personalizados para atender demandas específicas. Nossa equipe técnica está preparada para criar soluções inovadoras em vidro para qualquer tipo de projeto." },
];

const ServicesSection = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções completas em vidros temperados, espelhos e esquadrias para residências e empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => setOpenService(i)}
              className="group bg-card rounded-xl p-6 text-left border border-border focus:outline-none focus:ring-2 focus:ring-primary/50
              transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_hsl(152_60%_36%_/_0.15),0_8px_16px_hsl(0_0%_0%_/_0.08)]"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5561996517827"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-primary-hover"
          >
            Ver mais serviços
          </a>
        </div>
      </div>

      {/* Service Modal */}
      {openService !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
          onClick={() => setOpenService(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-lg w-full p-8 relative animate-fade-up shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenService(null)}
              className="absolute top-4 right-4 p-1 rounded-lg hover:bg-muted transition-colors"
            >
              <X size={20} className="text-muted-foreground" />
            </button>
            <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-5">
              {(() => {
                const Icon = services[openService].icon;
                return <Icon className="w-8 h-8 text-primary" />;
              })()}
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              {services[openService].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {services[openService].detail}
            </p>
            <a
              href="https://wa.me/5561996517827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold glow-primary-hover text-sm"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
