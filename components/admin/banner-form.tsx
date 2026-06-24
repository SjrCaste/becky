"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Banner } from "@/lib/data"
import { createBanner, updateBanner } from "@/lib/supabase-services"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"
import { ArrowLeft, Save } from "lucide-react"

interface BannerFormProps {
  initialData?: Banner
}

export function BannerForm({ initialData }: BannerFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<Partial<Banner>>(
    initialData || {
      title: "",
      image: "",
      link_url: "",
      sort_order: 0,
      is_active: true,
    }
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (initialData?.id) {
        await updateBanner(initialData.id, formData)
        toast.success("Banner actualizado correctamente")
      } else {
        await createBanner(formData)
        toast.success("Banner creado correctamente")
      }
      router.push("/admin/banners")
      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error("Hubo un error al guardar")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    if (type === "number") {
      setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push("/admin/banners")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          {initialData ? "Editar Banner" : "Nuevo Banner"}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-card border rounded-lg p-6">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Título interno (solo para referencia)</Label>
            <Input 
              id="title" name="title" 
              value={formData.title} onChange={handleChange} 
              required 
              placeholder="Ej: Promo Invierno"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">URL de la Imagen (Formato Horizontal recomendado)</Label>
            <Input 
              id="image" name="image" 
              value={formData.image} onChange={handleChange} 
              required
              placeholder="https://..."
            />
            {formData.image && (
              <div className="mt-2 w-full h-32 relative rounded-md overflow-hidden border">
                <img src={formData.image} alt="Preview" className="object-cover w-full h-full" />
              </div>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="link_url">Enlace / URL de destino (Opcional)</Label>
            <Input 
              id="link_url" name="link_url" 
              value={formData.link_url} onChange={handleChange} 
              placeholder="/catalogo o https://..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="sort_order">Orden de aparición</Label>
              <Input 
                id="sort_order" name="sort_order" type="number"
                value={formData.sort_order} onChange={handleChange} 
                min={0}
              />
            </div>
            <div className="flex flex-col gap-3 justify-center">
              <Label>Estado</Label>
              <div className="flex items-center gap-2">
                <Switch 
                  checked={formData.is_active} 
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                />
                <span className="text-sm">{formData.is_active ? "Activo" : "Oculto"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.push("/admin/banners")}>
            Cancelar
          </Button>
          <Button type="submit" disabled={loading} className="gap-2">
            <Save className="h-4 w-4" />
            {loading ? "Guardando..." : "Guardar Banner"}
          </Button>
        </div>
      </form>
    </div>
  )
}
