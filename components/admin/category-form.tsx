"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Category } from "@/lib/data"
import { createCategory, updateCategory } from "@/lib/supabase-services"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { ArrowLeft, Save, Plus, X } from "lucide-react"

interface CategoryFormProps {
  initialData?: Category
}

export function CategoryForm({ initialData }: CategoryFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<Partial<Category>>(
    initialData || {
      slug: "",
      title: "",
      tagline: "",
      image: "",
      description: "",
      subcategories: [],
    }
  )
  const [newSub, setNewSub] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (initialData?.slug) {
        await updateCategory(initialData.slug, formData)
        toast.success("Categoría actualizada correctamente")
      } else {
        await createCategory(formData)
        toast.success("Categoría creada correctamente")
      }
      router.push("/admin/categories")
      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error("Hubo un error al guardar")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const addSubcategory = () => {
    if (newSub.trim()) {
      setFormData(prev => ({
        ...prev,
        subcategories: [...(prev.subcategories || []), newSub.trim()]
      }))
      setNewSub("")
    }
  }

  const removeSubcategory = (index: number) => {
    setFormData(prev => ({
      ...prev,
      subcategories: prev.subcategories?.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push("/admin/categories")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          {initialData ? "Editar Categoría" : "Nueva Categoría"}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-card border rounded-lg p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Título</Label>
              <Input 
                id="title" name="title" 
                value={formData.title} onChange={handleChange} 
                required placeholder="Ej: Novias"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="slug">Slug (Identificador en URL)</Label>
              <Input 
                id="slug" name="slug" 
                value={formData.slug} onChange={handleChange} 
                required disabled={!!initialData}
                placeholder="Ej: novias"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="tagline">Tagline / Subtítulo Corto</Label>
            <Input 
              id="tagline" name="tagline" 
              value={formData.tagline} onChange={handleChange} 
              required placeholder="Ej: Bridal Couture"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Descripción Corta</Label>
            <Textarea 
              id="description" name="description" 
              value={formData.description} onChange={handleChange} 
              required placeholder="Descripción para mostrar al hacer hover..."
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">URL de la Imagen</Label>
            <Input 
              id="image" name="image" 
              value={formData.image} onChange={handleChange} 
              required placeholder="https://..."
            />
            {formData.image && (
              <div className="mt-2 w-full h-48 relative rounded-md overflow-hidden border">
                <img src={formData.image} alt="Preview" className="object-cover w-full h-full" />
              </div>
            )}
          </div>

          <div className="grid gap-2">
            <Label>Subcategorías (Etiquetas pequeñas)</Label>
            <div className="flex gap-2">
              <Input 
                value={newSub} 
                onChange={(e) => setNewSub(e.target.value)} 
                placeholder="Añadir subcategoría..." 
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addSubcategory();
                  }
                }}
              />
              <Button type="button" onClick={addSubcategory} variant="secondary">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.subcategories?.map((sub, idx) => (
                <div key={idx} className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full text-sm">
                  {sub}
                  <button type="button" onClick={() => removeSubcategory(idx)} className="text-muted-foreground hover:text-foreground">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.push("/admin/categories")}>
            Cancelar
          </Button>
          <Button type="submit" disabled={loading} className="gap-2">
            <Save className="h-4 w-4" />
            {loading ? "Guardando..." : "Guardar Categoría"}
          </Button>
        </div>
      </form>
    </div>
  )
}
