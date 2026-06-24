"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { TimelineEvent } from "@/lib/data"
import { createTimelineEvent, updateTimelineEvent } from "@/lib/supabase-services"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { ArrowLeft, Save } from "lucide-react"

interface TimelineFormProps {
  initialData?: TimelineEvent
}

export function TimelineForm({ initialData }: TimelineFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<Partial<TimelineEvent>>(
    initialData || {
      year: "",
      title: "",
      description: "",
      image: "",
    }
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (initialData?.id) {
        await updateTimelineEvent(initialData.id, formData)
        toast.success("Hito histórico actualizado correctamente")
      } else {
        await createTimelineEvent(formData)
        toast.success("Hito histórico creado correctamente")
      }
      router.push("/admin/about")
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

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push("/admin/about")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          {initialData ? "Editar Hito" : "Nuevo Hito"}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-card border rounded-lg p-6">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="year">Año</Label>
            <Input 
              id="year" name="year" 
              value={formData.year} onChange={handleChange} 
              required 
              placeholder="Ej: 1942"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="title">Título del evento</Label>
            <Input 
              id="title" name="title" 
              value={formData.title} onChange={handleChange} 
              required 
              placeholder="Ej: El Origen del Atelier"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">URL de la Imagen representativa</Label>
            <Input 
              id="image" name="image" 
              value={formData.image} onChange={handleChange} 
              placeholder="https://..."
            />
            {formData.image && (
              <div className="mt-2 w-32 h-20 relative rounded-md overflow-hidden border">
                <img src={formData.image} alt="Preview" className="object-cover w-full h-full" />
              </div>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea 
              id="description" name="description" 
              value={formData.description} onChange={handleChange} 
              required 
              className="min-h-[100px]"
              placeholder="Escribe la historia..."
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.push("/admin/about")}>
            Cancelar
          </Button>
          <Button type="submit" disabled={loading} className="gap-2">
            <Save className="h-4 w-4" />
            {loading ? "Guardando..." : "Guardar Hito"}
          </Button>
        </div>
      </form>
    </div>
  )
}
