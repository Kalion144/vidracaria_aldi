export interface ColorGroup {
  label: string;
  colors: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  materials: string[];
  colors: string[];
  colorGroups?: ColorGroup[];
  images: string[];
  thicknessOptions?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// â”€â”€ PadrÃµes reutilizÃ¡veis â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const alColors   = ["Branco", "Preto", "Natural Fosco", "Bronze"];
const viColors   = ["Verde", "Incolor", "Bronze", "FumÃª"];
const alViFlat   = [...alColors, ...viColors];
const alViGroups: ColorGroup[] = [
  { label: "Cores de AlumÃ­nio", colors: alColors },
  { label: "Cores de Vidro",    colors: viColors },
];

const mirrorMaterials = ["Espelho Guardian Evolution"];
const mirrorColors    = ["Prata", "FumÃª", "Bronze"];

// â”€â”€ Categorias â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const categories: Category[] = [
  { id: "blindex",     name: "Blindex",           icon: "PanelTop",  description: "SoluÃ§Ãµes em vidro temperado para ambientes modernos" },
  { id: "espelhos",    name: "Espelhos",           icon: "Sparkles",  description: "Espelhos decorativos e funcionais sob medida" },
  { id: "peliculas",   name: "PelÃ­culas",          icon: "Layers",    description: "PelÃ­culas de controle solar, privacidade e seguranÃ§a" },
  { id: "esquadrias",  name: "Esquadrias",         icon: "DoorOpen",  description: "Esquadrias em alumÃ­nio de alta performance" },
  { id: "pergolados",  name: "Pergolados",         icon: "Home",      description: "Coberturas em vidro e alumÃ­nio para Ã¡reas externas" },
  { id: "guarda-corpo",name: "Guarda Corpo",       icon: "Shield",    description: "Guarda-corpos em vidro e alumÃ­nio" },
  { id: "box",         name: "Box",                icon: "Square",    description: "Box para banheiro com acabamento premium" },
  { id: "sob-demanda", name: "Sob Demanda",        icon: "Settings",  description: "Projetos personalizados e soluÃ§Ãµes especiais" },
];

export const products: Product[] = [

  // â”€â”€ BLINDEX â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    id: "bl-1",
    name: "Janelas de Vidro",
    description: "Janelas em vidro temperado com perfis de alumÃ­nio de alta resistÃªncia. DisponÃ­veis nos sistemas de correr, basculante e maxim-ar, proporcionam luminosidade, isolamento acÃºstico e vedaÃ§Ã£o eficiente contra vento e chuva.",
    category: "blindex",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/janelas blindex/janela-blindex-aprimorada.png",
      "/assets/janelas blindex/janela-blindex-bronze-fiel-aprimorada.png",
      "/assets/janelas blindex/janela-blindex-preta-aprimorada.png",
      "/assets/janelas blindex/janela-blindex-verde-aprimorada.png",
      "/assets/janelas blindex/janela-blindex-fume-flores-aprimorada.png",
    ],
  },
  {
    id: "bl-2",
    name: "Portas Blindex",
    description: "Portas em vidro temperado com perfis de alumÃ­nio e sistema de trilho com rolamentos silenciosos. Fechaduras e puxadores em alumÃ­nio anodizado. Ideais para ambientes internos e externos.",
    category: "blindex",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/Portas blindex/porta-correr-rede-aprimorada.png",
      "/assets/Portas blindex/porta-vidro-fosco-aprimorada.png",
      "/assets/Portas blindex/porta-vidro-madeira-aprimorada.png",
      "/assets/Portas blindex/porta-vidro-pivotante-aprimorada.png",
    ],
  },
  {
    id: "bl-3",
    name: "Fachadas de Vidro",
    description: "Fachadas em vidro temperado ou laminado com sistema structural glazing. Oferecem design moderno, eficiÃªncia energÃ©tica e valorizaÃ§Ã£o do imÃ³vel para projetos residenciais e comerciais de alto padrÃ£o.",
    category: "blindex",
    materials: ["Vidro Temperado", "Vidro Laminado", "AlumÃ­nio"],
    colors: [...alViFlat, "Espelhado", "Espelhado Bronze"],
    colorGroups: [
      { label: "Cores de AlumÃ­nio", colors: alColors },
      { label: "Cores de Vidro",    colors: [...viColors, "Espelhado", "Espelhado Bronze"] },
    ],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bl-4",
    name: "DivisÃ³rias de Vidro",
    description: "DivisÃ³rias fixas e deslizantes em vidro temperado com perfis de alumÃ­nio para escritÃ³rios e ambientes corporativos. Permitem circulaÃ§Ã£o de luz e integraÃ§Ã£o visual mantendo o isolamento acÃºstico.",
    category: "blindex",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bl-5",
    name: "Fechamentos de Vidro",
    description: "Fechamento de varandas, Ã¡reas gourmet e terraÃ§os com painÃ©is de vidro temperado em perfis de alumÃ­nio. Protege contra vento e chuva sem comprometer a iluminaÃ§Ã£o natural e a vista panorÃ¢mica.",
    category: "blindex",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/fechamentos/fechamento-1.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // â”€â”€ ESPELHOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    id: "es-1",
    name: "Espelho Decorativo",
    description: "Espelhos decorativos sob medida em espelho Guardian Evolution com bordas polidas. Alta definiÃ§Ã£o de imagem e resistÃªncia Ã  umidade. Ideais para salas, halls de entrada, corredores e ambientes comerciais.",
    category: "espelhos",
    materials: mirrorMaterials,
    colors: mirrorColors,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "es-2",
    name: "Espelho com LED",
    description: "Espelho Guardian Evolution com iluminaÃ§Ã£o LED integrada ao suporte em alumÃ­nio. Ideal para banheiros, closets e salÃµes de beleza. LED pode ser instalado com sensor de toque ou dimmer de intensidade.",
    category: "espelhos",
    materials: [...mirrorMaterials, "Suporte para LED em AlumÃ­nio", "LED (opcional)"],
    colors: mirrorColors,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "es-3",
    name: "Espelho Bisotado",
    description: "Espelho Guardian Evolution com acabamento bisotado artesanal nas bordas. O bisotÃª cria um efeito tridimensional que valoriza o espelho como peÃ§a decorativa. DisponÃ­vel em diferentes espessuras de bisotÃª.",
    category: "espelhos",
    materials: mirrorMaterials,
    colors: mirrorColors,
    thicknessOptions: ["0,5mm", "1mm", "2mm", "3mm", "4mm"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "es-4",
    name: "Espelho Jateado",
    description: "Espelho Guardian Evolution com tratamento jateado em regiÃµes especÃ­ficas, criando Ã¡reas translÃºcidas que combinam reflexo e privacidade. Ideal para divisÃ³rias, portas e ambientes que pedem um toque diferenciado.",
    category: "espelhos",
    materials: mirrorMaterials,
    colors: mirrorColors,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // â”€â”€ PELÃCULAS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    id: "pe-1",
    name: "PelÃ­cula Controle Solar",
    description: "PelÃ­cula de alta performance que reduz atÃ© 79% do calor solar e bloqueia 99% dos raios UV sem comprometer a visibilidade. Prolonga a vida Ãºtil de mÃ³veis e pisos expostos ao sol e reduz o custo com climatizaÃ§Ã£o.",
    category: "peliculas",
    materials: ["PelÃ­cula", "Vinil"],
    colors: ["FumÃª", "Incolor", "Verde"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pe-2",
    name: "PelÃ­cula de Privacidade",
    description: "PelÃ­cula fosca ou jateada que garante privacidade total ou parcial sem comprometer a entrada de luz natural. DisponÃ­vel em diferentes nÃ­veis de opacidade. Ideal para banheiros, escritÃ³rios e divisÃ³rias.",
    category: "peliculas",
    materials: ["PelÃ­cula", "Vinil"],
    colors: ["Incolor", "FumÃª"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pe-3",
    name: "PelÃ­cula Espelhada",
    description: "Efeito espelhado unidirecional: de fora vÃª-se o reflexo, por dentro a visÃ£o permanece clara durante o dia. Proporciona privacidade, estÃ©tica diferenciada e reduÃ§Ã£o de calor para residÃªncias e fachadas comerciais.",
    category: "peliculas",
    materials: ["PelÃ­cula", "Vinil"],
    colors: ["Espelhado", "Espelhado Bronze", "Preto"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pe-4",
    name: "PelÃ­cula de SeguranÃ§a",
    description: "PelÃ­cula anti-estilhaÃ§amento que mantÃ©m os fragmentos de vidro unidos apÃ³s impacto. Aumenta a resistÃªncia a impactos e tentativas de invasÃ£o, reduzindo riscos de acidentes. InvisÃ­vel e aplicÃ¡vel em qualquer vidro.",
    category: "peliculas",
    materials: ["PelÃ­cula", "Vinil"],
    colors: ["Incolor"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // â”€â”€ ESQUADRIAS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    id: "eq-1",
    name: "Janela de Correr",
    description: "Janela de alumÃ­nio com 2 a 4 folhas deslizantes. Trilho com calha de drenagem, vedaÃ§Ã£o em borracha EPDM e rolamentos silenciosos. Alta estanqueidade Ã  Ã¡gua e ao ar. DisponÃ­vel com bandeira superior.",
    category: "esquadrias",
    materials: ["AlumÃ­nio", "Vidro Temperado"],
    colors: alColors,
    colorGroups: [{ label: "Cores de AlumÃ­nio", colors: alColors }],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "eq-2",
    name: "Janela Maxim-Ar",
    description: "Folhas articuladas que abrem para fora no eixo horizontal. Permite ventilaÃ§Ã£o eficiente mesmo em dias de chuva leve, sem entrada de Ã¡gua. Ideal para banheiros, lavanderias e Ã¡reas de serviÃ§o.",
    category: "esquadrias",
    materials: ["AlumÃ­nio", "Vidro Temperado"],
    colors: alColors,
    colorGroups: [{ label: "Cores de AlumÃ­nio", colors: alColors }],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "eq-3",
    name: "Janela Basculante",
    description: "Janela com abertura por basculamento da folha, excelente para ventilaÃ§Ã£o cruzada e resistÃªncia Ã  chuva. Ideal para banheiros, lavanderias e ambientes onde a privacidade Ã© prioridade.",
    category: "esquadrias",
    materials: ["AlumÃ­nio", "Vidro Temperado"],
    colors: alColors,
    colorGroups: [{ label: "Cores de AlumÃ­nio", colors: alColors }],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "eq-4",
    name: "Porta de Correr",
    description: "Porta de alumÃ­nio com folhas deslizantes e trilho robusto com rolamentos de alta durabilidade. Sistema de alinhamento automÃ¡tico e perfil de vedaÃ§Ã£o perimetral. DisponÃ­vel em versÃ£o com 2 ou 4 folhas.",
    category: "esquadrias",
    materials: ["AlumÃ­nio", "Vidro Temperado"],
    colors: alColors,
    colorGroups: [{ label: "Cores de AlumÃ­nio", colors: alColors }],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "eq-5",
    name: "Porta de Giro",
    description: "Porta de alumÃ­nio com abertura em pivÃ´ ou dobradiÃ§as. DisponÃ­vel em versÃ£o simples ou dupla folha. Perfil robusto com vedaÃ§Ã£o em EPDM, ideal para entradas sociais e ambientes de alto trÃ¡fego.",
    category: "esquadrias",
    materials: ["AlumÃ­nio", "Vidro Temperado"],
    colors: alColors,
    colorGroups: [{ label: "Cores de AlumÃ­nio", colors: alColors }],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // â”€â”€ PERGOLADOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    id: "pg-1",
    name: "Cobertura Plana em Vidro",
    description: "Estrutura de alumÃ­nio com painÃ©is de vidro laminado fixados horizontalmente. Permite entrada de luz natural com total proteÃ§Ã£o contra chuva. Ideal para varandas, Ã¡reas gourmet e jardins de inverno.",
    category: "pergolados",
    materials: ["AlumÃ­nio", "Vidro Laminado"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pg-2",
    name: "Cobertura Inclinada em Vidro",
    description: "Estrutura de alumÃ­nio com inclinaÃ§Ã£o de 10Â° a 30Â°, cobertura em vidro temperado e calha integrada para drenagem de Ã¡gua pluvial. Combina estÃ©tica moderna com funcionalidade em espaÃ§os externos.",
    category: "pergolados",
    materials: ["AlumÃ­nio", "Vidro Temperado"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pg-3",
    name: "Fechamento Lateral em Vidro",
    description: "PainÃ©is verticais de vidro temperado em perfis de alumÃ­nio para fechamento lateral do pergolado. ProteÃ§Ã£o eficiente contra vento e chuva com visibilidade total e design minimalista.",
    category: "pergolados",
    materials: ["AlumÃ­nio", "Vidro Temperado"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "pg-4",
    name: "Telhado de Vidro",
    description: "Cobertura total em vidro laminado de seguranÃ§a com estrutura em alumÃ­nio e perfis de fixaÃ§Ã£o ocultos. Visual clean e contemporÃ¢neo, ideal para jardins de inverno e Ã¡reas de lazer cobertas.",
    category: "pergolados",
    materials: ["AlumÃ­nio", "Vidro Laminado"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // â”€â”€ GUARDA CORPO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    id: "gc-1",
    name: "Guarda Corpo Frameless",
    description: "Sistema sem perfis aparentes com fixaÃ§Ã£o por pino ou sapata de alumÃ­nio embutida no piso. Visual completamente limpo e minimalista. Vidro laminado de seguranÃ§a com alta resistÃªncia a impactos.",
    category: "guarda-corpo",
    materials: ["Vidro Laminado", "AlumÃ­nio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "gc-2",
    name: "Guarda Corpo com Perfil em AlumÃ­nio",
    description: "Montantes e trilho superior em alumÃ­nio extrudado com painÃ©is de vidro temperado encaixados nos perfis. Resistente e durÃ¡vel, conforme norma NBR 14718. Ideal para sacadas, escadas e mezaninos.",
    category: "guarda-corpo",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "gc-3",
    name: "Guarda Corpo com CorrimÃ£o",
    description: "Guarda corpo com corrimÃ£o em tubo oval de alumÃ­nio anodizado fixado sobre montantes. DisponÃ­vel em vÃ¡rias alturas conforme a norma NBR 14718. Combina seguranÃ§a, design e facilidade de manutenÃ§Ã£o.",
    category: "guarda-corpo",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "gc-4",
    name: "Guarda Corpo para Piscinas",
    description: "Guarda corpo em vidro temperado com perfis de alumÃ­nio anodizado resistente Ã  umidade e produtos quÃ­micos. Vidro com tratamento antifungo. Ideal para bordas de piscina, decks e Ã¡reas molhadas.",
    category: "guarda-corpo",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // â”€â”€ BOX â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    id: "bx-1",
    name: "Box Fixo",
    description: "Painel Ãºnico de vidro temperado sem dobradiÃ§as, fixado com perfis de alumÃ­nio ou silicone estrutural. Ideal para chuveiros com espaÃ§o generoso. FÃ¡cil limpeza e manutenÃ§Ã£o zero.",
    category: "box",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: ["Incolor", "FumÃª", "Bronze"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-2",
    name: "Box de Abrir",
    description: "Porta de vidro temperado com dobradiÃ§as de alumÃ­nio e mola de retorno. Abertura de 90Â° para fora do box. DisponÃ­vel em versÃ£o de canto com 1 ou 2 portas.",
    category: "box",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: ["Incolor", "FumÃª", "Bronze"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-3",
    name: "Box Flex",
    description: "Sistema dobrÃ¡vel em sanfona que permite abrir o box para dentro ou fora. Ideal para banheiros com espaÃ§o limitado onde uma porta convencional nÃ£o cabe. Perfis em alumÃ­nio anodizado.",
    category: "box",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: ["Incolor", "FumÃª"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-4",
    name: "Box Light",
    description: "Linha leve com vidro 6mm e perfis slim em alumÃ­nio. Design clean e minimalista com visual contemporÃ¢neo. InstalaÃ§Ã£o rÃ¡pida e econÃ´mica, sem abrir mÃ£o da qualidade e da seguranÃ§a.",
    category: "box",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: ["Incolor", "FumÃª", "Bronze"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-5",
    name: "Box de Canto",
    description: "ConfiguraÃ§Ã£o em L para banheiros com box de canto. DisponÃ­vel com porta de abrir, painel fixo ou combinaÃ§Ã£o dos dois. Perfis de alumÃ­nio com vedaÃ§Ã£o em borracha PVC de alta durabilidade.",
    category: "box",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: ["Incolor", "FumÃª", "Bronze"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-7",
    name: "Box Elegance",
    description: "Linha premium com perfis ultra-slim em alumÃ­nio anodizado e vidro temperado de alta claridade. DobradiÃ§as e puxadores com acabamento em alumÃ­nio escovado. Para banheiros que exigem sofisticaÃ§Ã£o e design exclusivo.",
    category: "box",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: ["Incolor", "FumÃª", "Bronze", "Preto"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "bx-6",
    name: "Box AtÃ© o Teto",
    description: "Box do piso ao teto com vedaÃ§Ã£o total e visual contemporÃ¢neo. Elimina respingos, evita mofo nas paredes e facilita a limpeza. DisponÃ­vel com porta de abrir ou painel fixo.",
    category: "box",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: ["Incolor", "FumÃª"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },

  // â”€â”€ SOB DEMANDA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    id: "sd-1",
    name: "Projeto Residencial",
    description: "SoluÃ§Ãµes completas em vidro e alumÃ­nio para residÃªncias de alto padrÃ£o. Janelas, portas, fechamentos, box, espelhos e guarda corpos integrados em um Ãºnico projeto com acompanhamento tÃ©cnico do inÃ­cio ao fim.",
    category: "sob-demanda",
    materials: ["Vidro Temperado", "Vidro Laminado", "AlumÃ­nio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "sd-2",
    name: "Projeto Comercial",
    description: "Fachadas em vidro, divisÃ³rias, vitrines e fechamentos para lojas, restaurantes e espaÃ§os comerciais. Valorizamos a identidade do seu negÃ³cio com soluÃ§Ãµes que combinam seguranÃ§a, estÃ©tica e funcionalidade.",
    category: "sob-demanda",
    materials: ["Vidro Temperado", "Vidro Laminado", "AlumÃ­nio"],
    colors: [...alViFlat, "Espelhado", "Espelhado Bronze"],
    colorGroups: [
      { label: "Cores de AlumÃ­nio", colors: alColors },
      { label: "Cores de Vidro",    colors: [...viColors, "Espelhado", "Espelhado Bronze"] },
    ],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "sd-3",
    name: "Retrofit e Reforma",
    description: "SubstituiÃ§Ã£o e modernizaÃ§Ã£o de esquadrias e fechamentos existentes. Avaliamos as estruturas atuais, indicamos as melhores soluÃ§Ãµes e executamos a troca com o mÃ­nimo de impacto na rotina do imÃ³vel.",
    category: "sob-demanda",
    materials: ["Vidro Temperado", "AlumÃ­nio"],
    colors: alViFlat,
    colorGroups: alViGroups,
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
  {
    id: "sd-4",
    name: "Consultoria e Projeto Sob Medida",
    description: "Visita tÃ©cnica, levantamento de medidas, elaboraÃ§Ã£o de projeto personalizado e orÃ§amento detalhado sem compromisso. Desenvolvemos soluÃ§Ãµes exclusivas para necessidades Ãºnicas e projetos arquitetÃ´nicos especiais.",
    category: "sob-demanda",
    materials: ["Vidro Temperado", "Vidro Laminado", "AlumÃ­nio"],
    colors: [...alViFlat, "Espelhado", "Espelhado Bronze", "Prata"],
    images: [
      "/assets/noimage.png",
      "/assets/noimage.png",
      "/assets/noimage.png",
    ],
  },
];

export const allMaterials = [
  "Vidro Temperado",
  "Vidro Laminado",
  "AlumÃ­nio",
  "Espelho Guardian Evolution",
  "PelÃ­cula",
  "Vinil",
];

export const allColors = [
  "Branco",
  "Preto",
  "Natural Fosco",
  "Incolor",
  "Verde",
  "FumÃª",
  "Bronze",
  "Espelhado",
  "Espelhado Bronze",
  "Prata",
];

