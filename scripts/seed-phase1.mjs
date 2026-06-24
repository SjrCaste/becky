const TIMELINE = [
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
    quote: 'Con 84 años de experiencia, sabían exactamente qué caída y color me favorecía. La seda salvaje y los detalles dorados que elegimos en el local hicieron que me sintiera espléndida.',
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
