"use client"

import { useState, useEffect } from "react"
import { HomeSetting } from "@/lib/data"
import { getHomeSettings, updateHomeSettings } from "@/lib/supabase-services"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Save } from "lucide-react"

export default function AdminHomePage() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<Partial<HomeSetting>>({
    title: "",
    subtitle: "",
    background_image: "",
  })

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    setLoading(true)
    const data = await getHomeSettings()
    if (data) {
      setFormData(data)
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const updated = await updateHomeSettings(formData)
      if (updated) {
        toast.success("Configuración de Inicio guardada correctamente")
      } else {
        toast.error("Error al guardar la configuración")
      }
    } catch (error) {
      console.error(error)
      toast.error("Hubo un error inesperado")
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (loading) {
    return <div className="p-8 text-center text-muted-foreground">Cargando configuración...</div>
  }

  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gestión del Inicio</h1>
        <p className="text-muted-foreground mt-1">
          Personaliza los textos y la imagen de fondo de la portada principal (Hero).
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-card border rounded-lg p-6">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Título Principal</Label>
            <Input 
              id="title" name="title" 
              value={formData.title} onChange={handleChange} 
              required 
              placeholder="Ej: Sedería Becky"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="subtitle">Subtítulo / Descripción Corta</Label>
            <Textarea 
              id="subtitle" name="subtitle" 
              value={formData.subtitle} onChange={handleChange} 
              required 
              className="min-h-[80px]"
              placeholder="Alta costura, vestidos de novia..."
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="background_image">URL de la Imagen de Fondo</Label>
            <Input 
              id="background_image" name="background_image" 
              value={formData.background_image} onChange={handleChange} 
              required
              placeholder="https://..."
            />
            {formData.background_image && (
              <div className="mt-4 w-full aspect-video relative rounded-md overflow-hidden border">
                <img src={formData.background_image} alt="Preview" className="object-cover w-full h-full" />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="submit" disabled={saving} className="gap-2">
            <Save className="h-4 w-4" />
            {saving ? "Guardando..." : "Guardar Cambios"}
          </Button>
        </div>
      </form>
    </div>
  )
}
