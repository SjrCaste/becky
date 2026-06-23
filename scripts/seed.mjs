const PRODUCTS = [
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

const supabaseUrl = "https://oihhxxmggztgdezdrahm.supabase.co";
const supabaseAnonKey = "sb_publishable_t3_ci3rwKDcoIqRuhUw0mA_MKSiU9h_";

async function main() {
  const payload = PRODUCTS.map(p => ({
    ...p,
    isFeatured: p.isFeatured || false
  }));

  console.log("Seeding " + payload.length + " products to Supabase...");
  const response = await fetch(`${supabaseUrl}/rest/v1/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": supabaseAnonKey,
      "Authorization": `Bearer ${supabaseAnonKey}`,
      "Prefer": "return=representation"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error inserting products:", errorText);
  } else {
    console.log("Successfully seeded products.");
  }
}

main();
