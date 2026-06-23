import { notFound } from "next/navigation"
import { getProducts, getProductById } from "@/lib/supabase-services"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ProductDetailClient from "./product-detail-client"

interface PageProps {
  params: Promise<{ id: string }>
}

// Next.js static path generation (optional but highly recommended for fast loading)
export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  
  const product = await getProductById(resolvedParams.id)

  if (!product) {
    notFound()
  }

  const allProducts = await getProducts()

  // Filter recommendations (other products in same category or adjacent)
  const recommendations = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3)

  // If not enough recommendations, pad with featured items
  if (recommendations.length < 3) {
    const featured = allProducts.filter(
      (p) => p.id !== product.id && !recommendations.includes(p)
    ).slice(0, 3 - recommendations.length)
    recommendations.push(...featured)
  }

  return (
    <main>
      <Header />
      <ProductDetailClient product={product} recommendations={recommendations} />
      <Footer />
    </main>
  )
}
