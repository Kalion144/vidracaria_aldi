export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  materials: string[];
  colors: string[];
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  { id: "blindex", name: "Blindex", icon: "PanelTop", description: "Soluções em vidro temperado para ambientes modernos" },
  { id: "espelhos", name: "Espelhos", icon: "Sparkles", description: "Espelhos decorativos e funcionais sob medida" },
  { id: "peliculas", name: "Películas", icon: "Layers", description: "Películas de controle solar e privacidade" },
  { id: "esquadrias", name: "Esquadrias", icon: "DoorOpen", description: "Esquadrias em alumínio de alta performance" },
  { id: "pergolados", name: "Pergolados", icon: "Home", description: "Pergolados e coberturas em vidro e metal" },
  { id: "guarda-corpo", name: "Guarda Corpo", icon: "Shield", description: "Guarda-corpos em vidro, inox e alumínio" },
  { id: "box", name: "Box", icon: "Square", description: "Box para banheiro com acabamento premium" },
  { id: "sob-demanda", name: "Sob Demanda", icon: "Settings", description: "Projetos personalizados e soluções especiais" },
];

export const products: Product[] = [
  // Blindex
  { id: "bl-1", name: "Janelas Blindex", description: "Janelas em vidro temperado com perfil slim de alumínio, proporcionando luminosidade e segurança.", category: "blindex", materials: ["Vidro temperado", "Alumínio"], colors: ["Incolor", "Fumê", "Verde"], image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" },
  { id: "bl-2", name: "Portas Blindex", description: "Portas em vidro temperado com sistema de trilho embutido e fechadura digital.", category: "blindex", materials: ["Vidro temperado", "Inox"], colors: ["Incolor", "Fumê", "Bronze"], image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop" },
  { id: "bl-3", name: "Fachadas em Vidro", description: "Fachadas em pele de vidro com sistema structural glazing para projetos comerciais.", category: "blindex", materials: ["Vidro temperado", "Vidro laminado", "Alumínio"], colors: ["Incolor", "Verde", "Espelhado"], image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" },
  { id: "bl-4", name: "Divisórias de Vidro", description: "Divisórias fixas e móveis em vidro temperado para escritórios e ambientes corporativos.", category: "blindex", materials: ["Vidro temperado", "Alumínio"], colors: ["Incolor", "Fumê"], image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop" },
  { id: "bl-5", name: "Fechamentos em Vidro", description: "Fechamentos de varandas e áreas gourmet com sistema de recolhimento total.", category: "blindex", materials: ["Vidro temperado", "Alumínio"], colors: ["Incolor", "Verde", "Bronze"], image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" },

  // Espelhos
  { id: "es-1", name: "Espelho Orgânico", description: "Espelhos com formas orgânicas e acabamento bisotado, tendência em decoração.", category: "espelhos", materials: ["Vidro laminado"], colors: ["Incolor", "Bronze"], image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=400&fit=crop" },
  { id: "es-2", name: "Espelho com LED", description: "Espelhos com iluminação LED integrada, ideais para banheiros e closets.", category: "espelhos", materials: ["Vidro laminado"], colors: ["Incolor"], image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop" },
  { id: "es-3", name: "Espelho Decorativo", description: "Painéis espelhados decorativos para salas, halls e ambientes comerciais.", category: "espelhos", materials: ["Vidro laminado"], colors: ["Incolor", "Fumê", "Bronze", "Espelhado"], image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&h=400&fit=crop" },
  { id: "es-4", name: "Espelho Bisotado", description: "Espelhos com acabamento bisotado artesanal, elegância atemporal.", category: "espelhos", materials: ["Vidro laminado"], colors: ["Incolor"], image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop" },
  { id: "es-5", name: "Espelho Lapidado", description: "Espelhos com bordas lapidadas sob medida para qualquer ambiente.", category: "espelhos", materials: ["Vidro laminado"], colors: ["Incolor", "Fumê"], image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop" },

  // Películas
  { id: "pe-1", name: "Película Controle Solar", description: "Película de alta performance que reduz até 80% do calor sem comprometer a visibilidade.", category: "peliculas", materials: ["Vidro temperado"], colors: ["Fumê", "Espelhado"], image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop" },
  { id: "pe-2", name: "Película de Privacidade", description: "Película fosca ou jateada que garante privacidade mantendo luminosidade natural.", category: "peliculas", materials: ["Vidro temperado"], colors: ["Incolor", "Fumê"], image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop" },
  { id: "pe-3", name: "Película Espelhada", description: "Efeito espelhado exterior com visibilidade interna, ideal para fachadas comerciais.", category: "peliculas", materials: ["Vidro temperado"], colors: ["Espelhado", "Preto", "Champagne"], image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop" },
  { id: "pe-4", name: "Película de Segurança", description: "Película anti-estilhaçamento que mantém o vidro unido em caso de quebra.", category: "peliculas", materials: ["Vidro temperado", "Vidro laminado"], colors: ["Incolor"], image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop" },

  // Esquadrias
  { id: "eq-1", name: "Portas de Correr", description: "Portas de correr em alumínio com trilho embutido e perfil slim.", category: "esquadrias", materials: ["Alumínio", "Vidro temperado"], colors: ["Preto", "Champagne", "Bronze"], image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" },
  { id: "eq-2", name: "Janelas Integradas", description: "Sistema integrado de janelas com abertura total para varandas gourmet.", category: "esquadrias", materials: ["Alumínio", "Vidro temperado"], colors: ["Preto", "Champagne"], image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop" },
  { id: "eq-3", name: "Alumínio Premium", description: "Esquadrias em alumínio premium com ruptura de ponte térmica e acabamento anodizado.", category: "esquadrias", materials: ["Alumínio"], colors: ["Preto", "Champagne", "Bronze"], image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop" },
  { id: "eq-4", name: "Esquadrias Automatizadas", description: "Sistemas automatizados com controle remoto e integração com automação residencial.", category: "esquadrias", materials: ["Alumínio", "Vidro temperado"], colors: ["Preto", "Champagne"], image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop" },

  // Pergolados
  { id: "pg-1", name: "Pergolado Fixo", description: "Estrutura fixa em alumínio ou aço com cobertura de vidro laminado.", category: "pergolados", materials: ["Alumínio", "Vidro laminado"], colors: ["Preto", "Incolor"], image: "https://images.unsplash.com/photo-1600566753376-12c8ab7c5a38?w=600&h=400&fit=crop" },
  { id: "pg-2", name: "Pergolado Retrátil", description: "Cobertura retrátil motorizada com proteção solar e chuva.", category: "pergolados", materials: ["Alumínio", "Vidro laminado"], colors: ["Preto", "Champagne"], image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop" },
  { id: "pg-3", name: "Estrutura Metálica", description: "Pergolados com estrutura metálica robusta para grandes vãos.", category: "pergolados", materials: ["Inox", "Vidro laminado"], colors: ["Preto", "Incolor"], image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop" },
  { id: "pg-4", name: "Cobertura de Vidro", description: "Coberturas em vidro laminado com estrutura minimalista e calhas integradas.", category: "pergolados", materials: ["Vidro laminado", "Alumínio"], colors: ["Incolor", "Verde"], image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" },

  // Guarda Corpo
  { id: "gc-1", name: "Vidro Laminado", description: "Guarda-corpo em vidro laminado temperado com fixação por bottons inox.", category: "guarda-corpo", materials: ["Vidro laminado", "Inox"], colors: ["Incolor", "Fumê", "Verde"], image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&h=400&fit=crop" },
  { id: "gc-2", name: "Sistema Inox", description: "Guarda-corpo com montantes e corrimão em aço inox escovado ou polido.", category: "guarda-corpo", materials: ["Inox", "Vidro temperado"], colors: ["Incolor"], image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop" },
  { id: "gc-3", name: "Sistema Alumínio", description: "Guarda-corpo em alumínio com pintura eletrostática, leveza e durabilidade.", category: "guarda-corpo", materials: ["Alumínio", "Vidro temperado"], colors: ["Preto", "Champagne"], image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" },
  { id: "gc-4", name: "Sistema Torre/Pino", description: "Fixação por sistema de torre ou pino embutido no piso para visual clean.", category: "guarda-corpo", materials: ["Inox", "Vidro laminado"], colors: ["Incolor", "Fumê"], image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop" },

  // Box
  { id: "bx-1", name: "Box de Canto", description: "Box de canto em vidro temperado com dobradiças e puxador cromado.", category: "box", materials: ["Vidro temperado", "Inox"], colors: ["Incolor", "Fumê"], image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop" },
  { id: "bx-2", name: "Box Frontal", description: "Box frontal com abertura total e perfil em alumínio premium.", category: "box", materials: ["Vidro temperado", "Alumínio"], colors: ["Incolor", "Fumê", "Bronze"], image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop" },
  { id: "bx-3", name: "Box Elegance", description: "Linha premium com perfis ultra-slim e acabamentos exclusivos.", category: "box", materials: ["Vidro temperado", "Inox"], colors: ["Incolor", "Fumê", "Preto"], image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" },
  { id: "bx-4", name: "Box Até o Teto", description: "Box do piso ao teto com visual contemporâneo e fácil limpeza.", category: "box", materials: ["Vidro temperado", "Alumínio"], colors: ["Incolor", "Fumê"], image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop" },
  { id: "bx-5", name: "Box Porta de Correr", description: "Sistema de correr com roldanas silenciosas e trilho embutido.", category: "box", materials: ["Vidro temperado", "Alumínio"], colors: ["Incolor", "Fumê", "Bronze"], image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop" },
  { id: "bx-6", name: "Box Pivotante", description: "Porta pivotante com abertura 180° e sistema de amortecimento.", category: "box", materials: ["Vidro temperado", "Inox"], colors: ["Incolor", "Fumê"], image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop" },

  // Sob Demanda
  { id: "sd-1", name: "Projeto Residencial", description: "Soluções completas em vidro e alumínio para residências de alto padrão.", category: "sob-demanda", materials: ["Vidro temperado", "Vidro laminado", "Alumínio", "Inox"], colors: ["Incolor", "Fumê", "Verde", "Bronze"], image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" },
  { id: "sd-2", name: "Projeto Comercial", description: "Fachadas, divisórias e vitrines para lojas, escritórios e restaurantes.", category: "sob-demanda", materials: ["Vidro temperado", "Alumínio"], colors: ["Incolor", "Fumê", "Espelhado", "Preto"], image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" },
  { id: "sd-3", name: "Projeto Corporativo", description: "Ambientes corporativos com divisórias acústicas e salas de reunião em vidro.", category: "sob-demanda", materials: ["Vidro temperado", "Vidro laminado", "Alumínio"], colors: ["Incolor", "Fumê"], image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" },
  { id: "sd-4", name: "Projetos Personalizados", description: "Desenvolvimento sob medida para necessidades únicas e projetos arquitetônicos especiais.", category: "sob-demanda", materials: ["Vidro temperado", "Vidro laminado", "Alumínio", "Inox"], colors: ["Incolor", "Fumê", "Verde", "Bronze", "Espelhado", "Preto", "Champagne"], image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop" },
];

export const allMaterials = ["Vidro temperado", "Vidro laminado", "Alumínio", "Inox"];
export const allColors = ["Incolor", "Fumê", "Verde", "Bronze", "Espelhado", "Preto", "Champagne"];

export const WHATSAPP_NUMBER = "5500000000000";

export function getWhatsAppLink(productName?: string) {
  const message = productName
    ? `Olá, gostaria de solicitar orçamento para ${productName}.`
    : "Olá, gostaria de solicitar um orçamento.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
