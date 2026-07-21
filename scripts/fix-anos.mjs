const supabaseUrl = "https://oihhxxmggztgdezdrahm.supabase.co";
const supabaseAnonKey = "sb_publishable_t3_ci3rwKDcoIqRuhUw0mA_MKSiU9h_";

const headers = {
  "Content-Type": "application/json",
  "apikey": supabaseAnonKey,
  "Authorization": `Bearer ${supabaseAnonKey}`,
  "Prefer": "return=representation"
};

const fixes = [
  ["15-real-look-blanco-fiesta", "15 Años - Look Blanco de Fiesta"],
  ["15-real-dorado-trono", "15 Años - Vestido Dorado de Trono"],
  ["15-real-esmeralda-trono", "15 Años - Vestido Esmeralda de Trono"],
  ["15-real-coral-auto-vintage", "15 Años - Vestido Coral junto al Auto Vintage"],
  ["15-real-plata-glitter", "15 Años - Vestido Plata Glitter"],
  ["15-real-bosque-ciudad", "15 Años - Coleccion Bosque y Ciudad"],
  ["15-real-blanco-plata-volados", "15 Años - Vestido Blanco y Plata con Volados"],
  ["15-real-momentos-festejo", "15 Años - Momentos de Festejo"],
];

async function main() {
  for (const [id, name] of fixes) {
    const res = await fetch(`${supabaseUrl}/rest/v1/products?id=eq.${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ name })
    });
    if (!res.ok) {
      console.error("Failed to update", id, await res.text());
    } else {
      console.log("Updated", id, "->", name);
    }
  }
}

main();
