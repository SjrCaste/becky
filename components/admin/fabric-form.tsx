"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Fabric } from "@/lib/data"
import { createFabric, updateFabric } from "@/lib/supabase-services"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { ArrowLeft, Save, Plus, X } from "lucide-react"

interface FabricFormProps {
  initialData?: Fabric
}

export function FabricForm({ initialData }: FabricFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<Partial<Fabric>>(
    initialData || {
      name: "",
      type: "",
      origin: "",
      image: "",
      description: "",
      details: [],
    }
  )
  const [newDetail, setNewDetail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (initialData?.id) {
        await updateFabric(initialData.id, formData)
        toast.success("Tela actualizada correctamente")
      } else {
        await createFabric(formData)
        toast.success("Tela agregada correctamente")
      }
      router.push("/admin/galleries")
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

  const addDetail = () => {
    if (newDetail.trim()) {
      setFormData(prev => ({
        ...prev,
        details: [...(prev.details || []), newDetail.trim()]
      }))
      setNewDetail("")
    }
  }

  const removeDetail = (index: number) => {
    setFormData(prev => ({
      ...prev,
      details: prev.details?.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push("/admin/galleries")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          {initialData ? "Editar Tela" : "Nueva Tela"}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-card border rounded-lg p-6">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nombre de la Tela</Label>
            <Input 
              id="name" name="name" 
              value={formData.name} onChange={handleChange} 
              required placeholder="Ej: Encaje de Chantilly Francés"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="type">Tipo (Material)</Label>
              <Input 
                id="type" name="type" 
                value={formData.type} onChange={handleChange} 
                required placeholder="Ej: Encaje, Satén..."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="origin">Origen</Label>
              <Input 
                id="origin" name="origin" 
                value={formData.origin} onChange={handleChange} 
                required placeholder="Ej: Francia, Italia..."
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea 
              id="description" name="description" 
              value={formData.description} onChange={handleChange} 
              required placeholder="Descripción detallada de la tela..."
              className="min-h-[100px]"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">URL de la Imagen (Para Zoom Macro)</Label>
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
            <Label>Detalles / Viñetas</Label>
            <div className="flex gap-2">
              <Input 
                value={newDetail} 
                onChange={(e) => setNewDetail(e.target.value)} 
                placeholder="Ej: Ancho de 1.40m..." 
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addDetail();
                  }
                }}
              />
              <Button type="button" onClick={addDetail} variant="secondary">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {formData.details?.map((det, idx) => (
                <div key={idx} className="flex items-center justify-between bg-muted px-3 py-2 rounded-md text-sm border">
                  <span>{det}</span>
                  <button type="button" onClick={() => removeDetail(idx)} className="text-muted-foreground hover:text-foreground">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.push("/admin/galleries")}>
            Cancelar
          </Button>
          <Button type="submit" disabled={loading} className="gap-2">
            <Save className="h-4 w-4" />
            {loading ? "Guardando..." : "Guardar Tela"}
          </Button>
        </div>
      </form>
    </div>
  )
}
