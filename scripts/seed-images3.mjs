import fs from "node:fs";

const products = JSON.parse(fs.readFileSync(
  "C:/Users/camil/AppData/Local/Temp/claude/c--Users-camil-OneDrive-Desktop-becky/9fbac66a-92a8-4901-a7d0-e4d28229889c/scratchpad/products.json",
  "utf-8"
));

const supabaseUrl = "https://oihhxxmggztgdezdrahm.supabase.co";
const supabaseAnonKey = "sb_publishable_t3_ci3rwKDcoIqRuhUw0mA_MKSiU9h_";

async function main() {
  console.log(`Seeding ${products.length} new products (images 3) to Supabase...`);
  const response = await fetch(`${supabaseUrl}/rest/v1/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": supabaseAnonKey,
      "Authorization": `Bearer ${supabaseAnonKey}`,
      "Prefer": "return=representation"
    },
    body: JSON.stringify(products)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error inserting products:", errorText);
    process.exit(1);
  } else {
    const data = await response.json();
    console.log(`Successfully seeded ${data.length} products.`);
  }
}

main();
