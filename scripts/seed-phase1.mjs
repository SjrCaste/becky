const TIMELINE = [
  {
    year: '1981',
    title: 'El Origen del Atelier',
    description: 'Nace como un taller familiar dedicado a la importación y comercialización de tejidos finos de seda en Buenos Aires. Nuestra fundadora, Becky, comenzó vistiendo a novias de la comunidad con un sentido único de atención personalizada.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '1995',
    title: 'Establecimiento en Azcuénaga',
    description: 'Consolidamos nuestra ubicación histórica en Azcuénaga 410, convirtiéndonos en la sedería y boutique de referencia para bodas y ceremonias elegantes en la zona, distinguiéndonos por la calidad inigualable y la atención a medida.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2010',
    title: 'Generaciones de Alta Costura',
    description: 'Incorporamos la línea completa de vestidos listos para usar (pret-a-porter premium) y el atelier de novias propio, combinando técnicas artesanales con diseños inspirados en las pasarelas de alta costura de París y Milán.',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2026',
    title: '45 Años de Tradición y Futuro',
    description: 'Celebramos 45 años de historia vistiendo momentos inolvidables. Confección tradicional hecha a mano que abraza las siluetas modernas, manteniendo viva la promesa de exclusividad, lujo e identidad familiar.',
    image: 'https://images.unsplash.com/photo-1591551970139-29b552dd8539?auto=format&fit=crop&w=800&q=80'
  }
];

const TESTIMONIALS = [
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
    quote: 'Con 45 años de experiencia, sabían exactamente qué caída y color me favorecía. La seda salvaje y los detalles dorados que elegimos en el local de Azcuénaga hicieron que me sintiera espléndida.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=300&q=80',
    date: 'Marzo, 2026'
  }
];

const supabaseUrl = "https://oihhxxmggztgdezdrahm.supabase.co";
const supabaseAnonKey = "sb_publishable_t3_ci3rwKDcoIqRuhUw0mA_MKSiU9h_";

async function main() {
  console.log("Seeding " + TESTIMONIALS.length + " testimonials...");
  const tRes = await fetch(`${supabaseUrl}/rest/v1/testimonials`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": supabaseAnonKey,
      "Authorization": `Bearer ${supabaseAnonKey}`,
      "Prefer": "return=representation"
    },
    body: JSON.stringify(TESTIMONIALS)
  });

  if (!tRes.ok) {
    console.error("Error testimonials:", await tRes.text());
  } else {
    console.log("Testimonials seeded successfully.");
  }

  console.log("Seeding " + TIMELINE.length + " timeline events...");
  const tlRes = await fetch(`${supabaseUrl}/rest/v1/timeline_events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": supabaseAnonKey,
      "Authorization": `Bearer ${supabaseAnonKey}`,
      "Prefer": "return=representation"
    },
    body: JSON.stringify(TIMELINE)
  });

  if (!tlRes.ok) {
    console.error("Error timeline events:", await tlRes.text());
  } else {
    console.log("Timeline events seeded successfully.");
  }
}

main();
