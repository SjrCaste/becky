export interface Product {
  id: string;
  name: string;
  category: 'novias' | '15-anos' | 'fiesta' | 'mitzvah' | 'padrinos-y-madrinas';
  subCategory: string;
  description: string;
  priceEstimate: string;
  colors: string[];
  sizes: string[];
  styles: string[];
  images: string[];
  features: string[];
  tags: string[];
  isFeatured?: boolean;
}

export interface Fabric {
  id: string;
  name: string;
  description: string;
  type: string;
  origin: string;
  image: string;
  details: string[];
}

export interface Category {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  subcategories: string[];
  description: string;
}

export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  date: string;
}

export interface HomeSetting {
  id: number;
  title: string;
  subtitle: string;
  background_image: string;
}

export interface Banner {
  id: string;
  title: string;
  image: string;
  link_url?: string;
  is_active: boolean;
  sort_order: number;
}

export const PRODUCTS: Product[] = [
  // NOVIAS
  {
    id: 'novia-aurora',
    name: 'Vestido Aurora Couture',
    category: 'novias',
    subCategory: 'Alta Costura',
    description: 'Diseño exclusivo en encaje de Chantilly francés con una caída imperial de tul de seda y micro-pedrería bordada a mano por nuestros artesanos. Espalda baja y escote corazón para un look atemporal.',
    priceEstimate: 'Consultar Presupuesto',
    colors: ['Blanco Roto', 'Crema', 'Marfil'],
    sizes: ['S', 'M', 'L', 'A medida'],
    styles: ['Clásico', 'Alta Costura', 'Princesa'],
    images: [
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591551970139-29b552dd8539?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Encaje de Chantilly Francés', 'Bordado a mano de cristales', 'Corte corsetería artesanal', 'Cola desmontable de 2 metros'],
    tags: ['Novia', 'Couture', 'Encaje', 'Boda'],
    isFeatured: true
  },
  {
    id: 'novia-helena',
    name: 'Diseño Helena Minimalist',
    category: 'novias',
    subCategory: 'Minimalista',
    description: 'Sofisticado vestido confeccionado en satén de seda pesado importado de Italia. Corte sirena que esculpe la silueta, escote barco refinado y un sutil drapeado lateral que refleja modernidad pura.',
    priceEstimate: 'Consultar Presupuesto',
    colors: ['Blanco Roto', 'Blanco Óptico'],
    sizes: ['XS', 'S', 'M', 'L', 'A medida'],
    styles: ['Minimalista', 'Moderno', 'Sirena'],
    images: [
      'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Satén de seda italiano', 'Corte sirena estructurado', 'Drapeado hecho a mano', 'Escote barco minimalista'],
    tags: ['Novia', 'Satén', 'Minimalista', 'Sirena']
  },

  // 15 AÑOS
  {
    id: '15-sophie',
    name: 'Vestido Sophie Celestial',
    category: '15-anos',
    subCategory: 'Princesa',
    description: 'Imponente vestido de 15 años con corset bordado en cristales de Swarovski y una falda mágica y voluminosa de múltiples capas de tul glitter. Un brillo estelar para una noche inolvidable.',
    priceEstimate: 'Consultar Presupuesto',
    colors: ['Champagne', 'Rosa Pastel', 'Azul Cielo'],
    sizes: ['S', 'M', 'A medida'],
    styles: ['Princesa', 'Brillante', 'Exclusivo'],
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Corset estructurado de alta costura', 'Bordado con cristales genuinos', 'Falda de tul glitter francés', 'Ajuste regulable en espalda'],
    tags: ['15 Años', 'Princesa', 'Glitter', 'Bordado'],
    isFeatured: true
  },
  {
    id: '15-isabella',
    name: 'Vestido Isabella Rose',
    category: '15-anos',
    subCategory: 'Moderno',
    description: 'Una reinterpretación moderna del clásico de 15 años. Cuenta con apliques de flores tridimensionales confeccionadas artesanalmente en organza y un tul sedoso que fluye con gracia y dinamismo.',
    priceEstimate: 'Consultar Presupuesto',
    colors: ['Rosa Rosa', 'Crema', 'Lavanda'],
    sizes: ['XS', 'S', 'M', 'A medida'],
    styles: ['Moderno', 'Exclusivo'],
    images: [
      'https://images.unsplash.com/photo-1518049368264-ee3cbd155f30?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Flores 3D hechas a mano', 'Organza importada', 'Detalle de perlas en el bustier', 'Falda ligera y cómoda'],
    tags: ['15 Años', 'Moderno', 'Flores 3D', 'Tul']
  },

  // FIESTA
  {
    id: 'fiesta-gloria',
    name: 'Diseño Gloria Gala',
    category: 'fiesta',
    subCategory: 'Gala / Largo',
    description: 'Vestido de noche de alta gama confeccionado en crepe de seda doble. Presenta un sofisticado escote asimétrico y una abertura lateral infinita decorada con un fino galón de pedrería fina.',
    priceEstimate: 'Consultar Presupuesto',
    colors: ['Negro Elegante', 'Rojo Rubí', 'Azul Marino'],
    sizes: ['S', 'M', 'L', 'XL', 'A medida'],
    styles: ['Gala', 'Largo', 'Elegante'],
    images: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Crepe de seda doble', 'Corte asimétrico de autor', 'Aplique de pedrería artesanal', 'Caída fluida con forro de seda'],
    tags: ['Fiesta', 'Gala', 'Largo', 'Crepe'],
    isFeatured: true
  },

  // BAT / BAR MITZVAH
  {
    id: 'bat-noa',
    name: 'Vestido Bat Mitzvá Noa',
    category: 'mitzvah',
    subCategory: 'Bat Mitzvá',
    description: 'Diseño juvenil y distinguido pensado para la ceremonia de Bat Mitzvá. Confeccionado en encaje guipur delicado con una falda en línea A de satén y tul sedoso. Un look fresco pero profundamente protocolar.',
    priceEstimate: 'Consultar Presupuesto',
    colors: ['Blanco Roto', 'Beige Claro', 'Champagne Suave'],
    sizes: ['XS', 'S', 'M', 'A medida'],
    styles: ['Ceremonial', 'Elegante', 'Juvenil'],
    images: [
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Encaje guipur importado', 'Falda de línea A fluida', 'Detalles en dorado sutil', 'Diseño ceremonial protocolar'],
    tags: ['Bat Mitzvá', 'Ceremonia', 'Juvenil', 'Guipur']
  },
  {
    id: 'bar-david',
    name: 'Traje Ceremonial David',
    category: 'mitzvah',
    subCategory: 'Bar Mitzvá',
    description: 'Traje de gala de sastería artesanal italiana de tres piezas para jóvenes en su Bar Mitzvá. Corte entallado (slim fit) de excelente caída, solapa de raso sutil y tejido de lana fría super 120.',
    priceEstimate: 'Consultar Presupuesto',
    colors: ['Azul Noche', 'Gris Grafito', 'Negro'],
    sizes: ['XS', 'S', 'M', 'A medida'],
    styles: ['Ceremonial', 'Traje', 'Clásico Modernizado'],
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Lana fría italiana super 120', 'Corte sastre a medida', 'Detalles en raso de seda', 'Chaleco combinando incluido'],
    tags: ['Bar Mitzvá', 'Sastrería', 'Elegante', 'Traje']
  },

  // PADRINOS Y MADRINAS
  {
    id: 'madrina-beatriz',
    name: 'Conjunto Beatriz Madrina Royale',
    category: 'padrinos-y-madrinas',
    subCategory: 'Madrinas',
    description: 'Exclusivo diseño para madrina compuesto por un vestido estructurado de corte clásico en seda salvaje con sobre-saco en encaje Richelieu bordado en hilos de seda e hilos de oro sutiles.',
    priceEstimate: 'Consultar Presupuesto',
    colors: ['Champagne Dorado', 'Azul Acero', 'Plata Cálido'],
    sizes: ['M', 'L', 'XL', 'XXL', 'A medida'],
    styles: ['Sofisticado', 'Lujo', 'Cortejo'],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Seda salvaje de alta densidad', 'Sobre-saco de encaje Richelieu', 'Bordados artesanales dorados', 'Mangas 3/4 refinadas'],
    tags: ['Madrina', 'Seda Salvaje', 'Richelieu', 'Ceremonia']
  }
];

export const FABRICS: Fabric[] = [
  {
    id: 'encaje-chantilly',
    name: 'Encaje de Chantilly Francés',
    description: 'El tejido más romántico y delicado de la alta costura. De origen francés, destaca por sus finos motivos florales delineados por un hilo plano de seda. Su transparencia y ligereza lo hacen el favorito para velos y corpiños de novias.',
    type: 'Encaje',
    origin: 'Francia',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&q=80',
    details: ['100% Seda de hilado fino', 'Transparencia de lujo', 'Ancho de 1.40m', 'Detalles florales tradicionales']
  },
  {
    id: 'saten-italiano',
    name: 'Satén Duchesse Italiano',
    description: 'Un satén de seda pesado con un brillo sutil, refinado y elegante. Con gran cuerpo y excelente estructura, es la opción ideal para vestidos de novias y faldas princesa estructuradas que requieren volumen con una caída majestuosa.',
    type: 'Satén',
    origin: 'Italia',
    image: 'https://images.unsplash.com/photo-1584290860588-4f8150a6b107?auto=format&fit=crop&w=800&q=80',
    details: ['Seda natural con acabado lustre', 'Alto gramaje y consistencia', 'Caída arquitectónica ideal para corsetería', 'Ancho de 1.50m']
  },
  {
    id: 'organza-seda',
    name: 'Organza de Seda Natural',
    description: 'Tejido translúcido, ligero pero con una rigidez natural que aporta un volumen etéreo. Su textura sedosa y tacto delicado la convierten en el material idóneo para detalles tridimensionales, volados y mangas de ensueño.',
    type: 'Organza',
    origin: 'Suiza',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    details: ['Organza premium traslúcida', 'Tacto crujiente sofisticado', 'Ideal para drapeados y volumen etéreo', 'Ancho de 1.45m']
  },
  {
    id: 'telas-pedreria',
    name: 'Tul Bordado en Pedrería de Cristal',
    description: 'Un lienzo de tul transparente italiano bordado meticulosamente a mano con cristales de roca, perlas cultivadas y canutillos de vidrio importados. Diseñado para brillar bajo las luces ceremoniales con elegancia editorial.',
    type: 'Pedrería / Tul',
    origin: 'India / Italia',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    details: ['Bordado artesanal a mano', 'Cristales de roca facetados y perlas', 'Peso pesado con caída espectacular', 'Ancho de 1.30m']
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1942',
    title: 'Fundación del Atelier',
    description: 'José Abad funda nuestra sedería de vestidos en Buenos Aires, orientada desde sus inicios a bodas y fiestas. El comienzo de una historia familiar que es, hasta hoy, la vida de los Abad.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '1963',
    title: 'Eduardo Abad se incorpora a la familia',
    description: 'Eduardo Abad, familiar de nuestro fundador, se suma al negocio familiar, dando continuidad a la tradición de la sedería de bodas y fiestas.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '1983',
    title: 'Eduardo Abad al frente del local',
    description: 'Eduardo Abad asume la atención del local, donde continúa hasta el día de hoy: ya son 43 años atendiendo a cada cliente con dedicación familiar.',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2026',
    title: '84 Años de Tradición y Futuro',
    description: 'Celebramos 84 años de historia vistiendo bodas y fiestas. Confección tradicional hecha a mano que abraza las siluetas modernas, manteniendo viva la promesa de exclusividad, lujo e identidad familiar.',
    image: 'https://images.unsplash.com/photo-1591551970139-29b552dd8539?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Carolina Goldstein',
    role: 'Novia Sedería Becky',
    quote: 'Gracias Becky por hacerme sentir única en el día más importante de mi vida. La dedicación, paciencia y finura con la que confeccionaron mi vestido de novia superó todo lo que soñé.',
    image: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=300&q=80',
    date: 'Diciembre, 2025'
  },
  {
    id: 't-2',
    name: 'Martina Szwarc',
    role: 'Bat Mitzvá',
    quote: 'El vestido de mi Bat Mitzvá fue elogiado por todos. Es elegante, juvenil y comodísimo para bailar toda la noche. La atención personalizada de las modistas fue maravillosa.',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=300&q=80',
    date: 'Octubre, 2025'
  },
  {
    id: 't-3',
    name: 'Elena Rodríguez',
    role: 'Madrina de Boda',
    quote: 'Con 84 años de experiencia, sabían exactamente qué caída y color me favorecía. La seda salvaje y los detalles dorados que elegimos en el local hicieron que me sintiera espléndida.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=300&q=80',
    date: 'Marzo, 2026'
  }
];
