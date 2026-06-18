"use client"

import { ProductForm } from "@/components/admin/product-form"
import { getStoredProducts } from "@/lib/store"
import { notFound } from "next/navigation"
import { useEffect, useState } from "react"
import React from "react"

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const [initialData, setInitialData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      const resolvedParams = await params
      const products = getStoredProducts()
      const product = products.find(p => p.id === resolvedParams.id)
      
      if (!product) {
        notFound()
        return
      }

      setInitialData({
        id: product.id,
        name: product.name,
        category: product.category,
        subCategory: product.subCategory,
        description: product.description,
        longDescription: "", 
        price: product.priceEstimate,
        promoPrice: "",
        status: "disponible",
        sizes: product.sizes.join(", "),
        colors: product.colors.join(", "),
        material: product.features[0] || "",
        season: "",
        isFeatured: product.isFeatured || false,
        images: product.images,
        videoUrl: "",
        metaTitle: "",
        metaDescription: "",
        slug: product.id,
      })
      setLoading(false)
    }
    fetchProduct()
  }, [params])

  if (loading) return <div className="p-8 text-center text-muted-foreground">Cargando producto...</div>

  return (
    <div className="mx-auto w-full">
      <ProductForm initialData={initialData} />
    </div>
  )
}
