"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Testimonial } from "@/lib/data"
import { createTestimonial, updateTestimonial } from "@/lib/supabase-services"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { ArrowLeft, Save } from "lucide-react"

interface TestimonialFormProps {
  initialData?: Testimonial
}

export function TestimonialForm({ initialData }: TestimonialFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<Partial<Testimonial>>(
    initialData || {
      name: "",
      role: "",
      quote: "",
      image: "",
      date: "",
    }
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (initialData?.id) {
        await updateTestimonial(initialData.id, formData)
        toast.success("Testimonio actualizado correctamente")
      } else {
        await createTestimonial(formData)
        toast.success("Testimonio creado correctamente")
      }
      router.push("/admin/testimonials")
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
        <Button variant="outline" size="icon" onClick={() => router.push("/admin/testimonials")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          {initialData ? "Editar Testimonio" : "Nuevo Testimonio"}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-card border rounded-lg p-6">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nombre del cliente</Label>
            <Input 
              id="name" name="name" 
              value={formData.name} onChange={handleChange} 
              required 
              placeholder="Ej: Carolina Goldstein"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="role">Rol / Evento</Label>
            <Input 
              id="role" name="role" 
              value={formData.role} onChange={handleChange} 
              required 
              placeholder="Ej: Novia Sedería Becky"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="date">Fecha</Label>
            <Input 
              id="date" name="date" 
              value={formData.date} onChange={handleChange} 
              placeholder="Ej: Diciembre, 2025"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">URL de la Imagen</Label>
            <Input 
              id="image" name="image" 
              value={formData.image} onChange={handleChange} 
              placeholder="https://..."
            />
            {formData.image && (
              <div className="mt-2 w-20 h-20 relative rounded-full overflow-hidden border">
                <img src={formData.image} alt="Preview" className="object-cover w-full h-full" />
              </div>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="quote">Cita / Testimonio</Label>
            <Textarea 
              id="quote" name="quote" 
              value={formData.quote} onChange={handleChange} 
              required 
              className="min-h-[100px]"
              placeholder="Escribe el testimonio aquí..."
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.push("/admin/testimonials")}>
            Cancelar
          </Button>
          <Button type="submit" disabled={loading} className="gap-2">
            <Save className="h-4 w-4" />
            {loading ? "Guardando..." : "Guardar Testimonio"}
          </Button>
        </div>
      </form>
    </div>
  )
}
