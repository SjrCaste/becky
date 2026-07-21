const supabaseUrl = "https://oihhxxmggztgdezdrahm.supabase.co";
const supabaseAnonKey = "sb_publishable_t3_ci3rwKDcoIqRuhUw0mA_MKSiU9h_";

const headers = {
  "Content-Type": "application/json",
  "apikey": supabaseAnonKey,
  "Authorization": `Bearer ${supabaseAnonKey}`,
  "Prefer": "return=representation"
};

const updates = [
  {
    id: "novia-real-momentos-ceremonia",
    images: [
      "/images/images-3/novia-real-momentos-ceremonia-1.jpg",
      "/images/images-3/novia-real-momentos-ceremonia-2.jpg",
      "/images/images-3/novia-real-momentos-ceremonia-3.jpg",
      "/images/images-3/novia-real-momentos-ceremonia-4.jpg"
    ]
  },
  {
    id: "novia-real-saten-manga-larga",
    images: [
      "/images/images-3/novia-real-saten-manga-larga-1.jpg",
      "/images/images-3/novia-real-saten-manga-larga-2.jpg",
      "/images/images-3/novia-real-saten-manga-larga-3.jpg"
    ]
  },
  {
    id: "15-real-momentos-festejo",
    images: Array.from({ length: 17 }, (_, i) => `/images/images-3/15-real-momentos-festejo-${i + 1}.jpg`)
  },
  {
    id: "fiesta-real-rosa-duos",
    images: [
      "/images/images-3/fiesta-real-rosa-duos-1.jpg",
      "/images/images-3/fiesta-real-rosa-duos-2.jpg",
      "/images/images-3/fiesta-real-rosa-duos-3.jpg",
      "/images/images-3/fiesta-real-rosa-duos-4.jpg",
      "/images/images-3/fiesta-real-rosa-duos-5.jpg",
      "/images/images-3/fiesta-real-rosa-duos-6.jpg"
    ]
  }
];

async function main() {
  for (const u of updates) {
    const res = await fetch(`${supabaseUrl}/rest/v1/products?id=eq.${u.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ images: u.images })
    });
    if (!res.ok) {
      console.error("Failed to update", u.id, await res.text());
    } else {
      console.log("Updated", u.id, "->", u.images.length, "images");
    }
  }

  const delRes = await fetch(`${supabaseUrl}/rest/v1/products?id=eq.padrino-real-nena-champagne`, {
    method: "DELETE",
    headers
  });
  if (!delRes.ok) {
    console.error("Failed to delete padrino-real-nena-champagne", await delRes.text());
  } else {
    console.log("Deleted padrino-real-nena-champagne");
  }
}

main();
