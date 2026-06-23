"use client"

import { useState } from "react"
import { PRODUCTS } from "@/lib/data"
import { createProduct } from "@/lib/supabase-services"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SeedPage() {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleSeed = async () => {
    setLoading(true)
    setProgress(0)
    let count = 0

    for (const product of PRODUCTS) {
      const productData = {
        id: product.id,
        name: product.name,
        category: product.category,
        subCategory: product.subCategory,
        description: product.description,
        priceEstimate: product.priceEstimate,
        colors: product.colors,
        sizes: product.sizes,
        styles: product.styles,
        images: product.images,
        features: product.features,
        tags: product.tags,
        isFeatured: product.isFeatured || false,
      }

      await createProduct(productData)
      count++
      setProgress(Math.round((count / PRODUCTS.length) * 100))
    }

    toast.success("Migración completada", {
      description: `Se migraron ${count} productos a Supabase.`,
    })
    setLoading(false)
  }

  return (
    <div className="flex flex-col gap-6 max-w-xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Migrar Datos Iniciales</CardTitle>
          <CardDescription>
            Sube los productos de prueba locales a tu nueva base de datos de Supabase. 
            Asegúrate de haber creado la tabla "products" antes de hacer clic aquí.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button onClick={handleSeed} disabled={loading}>
            {loading ? `Migrando... ${progress}%` : "Iniciar Migración de Productos"}
          </Button>
          {progress === 100 && (
            <p className="text-green-600 text-sm font-medium text-center">¡Migración exitosa! Ya puedes ir a la sección de Productos.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
