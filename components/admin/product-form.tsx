"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import { ArrowLeft, ImagePlus, X, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import React, { useState, useRef } from "react"
import Image from "next/image"
import { createProduct, updateProduct } from "@/lib/supabase-services"

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  category: z.string().min(1, { message: "Selecciona una categoría." }),
  subCategory: z.string().min(1, { message: "Selecciona una subcategoría." }),
  description: z.string().min(10, { message: "La descripción corta es obligatoria." }),
  longDescription: z.string().optional(),
  price: z.string().optional(),
  promoPrice: z.string().optional(),
  status: z.string().default("disponible"),
  sizes: z.string().optional(), // In a real app this would be an array, but we keep it simple as comma separated string for the mock
  colors: z.string().optional(),
  material: z.string().optional(),
  season: z.string().optional(),
  isFeatured: z.boolean().default(false),
  videoUrl: z.string().url({ message: "Debe ser una URL válida." }).optional().or(z.literal("")),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  slug: z.string().optional(),
})

type ProductFormValues = z.infer<typeof formSchema>

interface ProductFormProps {
  initialData?: any // We will type this properly when connected to Supabase
}

export function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter()
  const [images, setImages] = useState<string[]>(initialData?.images || [])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      category: "",
      subCategory: "",
      description: "",
      longDescription: "",
      price: "",
      promoPrice: "",
      status: "disponible",
      sizes: "",
      colors: "",
      material: "",
      season: "",
      isFeatured: false,
      videoUrl: "",
      metaTitle: "",
      metaDescription: "",
      slug: "",
    },
  })

  async function onSubmit(data: ProductFormValues) {
    const productData = {
      name: data.name,
      category: data.category as any,
      subCategory: data.subCategory,
      description: data.description,
      priceEstimate: data.price,
      images: images,
      isFeatured: data.isFeatured,
      sizes: data.sizes ? data.sizes.split(",").map(s => s.trim()) : [],
      colors: data.colors ? data.colors.split(",").map(c => c.trim()) : [],
    }

    if (initialData?.id) {
      await updateProduct(initialData.id, productData)
    } else {
      await createProduct(productData)
    }
    
    toast.success("Producto guardado", {
      description: "El producto se ha guardado correctamente.",
    })
    
    router.push("/admin/products")
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file))
      setImages([...images, ...newImages])
      toast.success(`${files.length} imagen(es) agregada(s)`)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveImage = (indexToRemove: number) => {
    setImages(images.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/products">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">
            {initialData ? "Editar Producto" : "Nuevo Producto"}
          </h1>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="media">Multimedia</TabsTrigger>
              <TabsTrigger value="details">Detalles</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              {/* PESTAÑA GENERAL */}
              <TabsContent value="general" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Información Básica</CardTitle>
                        <CardDescription>Los detalles principales del producto.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre del Producto</FormLabel>
                              <FormControl>
                                <Input placeholder="Ej. Vestido Aurora Couture" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Descripción Corta</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Una breve descripción para los listados." 
                                  className="resize-none" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="longDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Descripción Larga (Opcional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Descripción detallada para la página del producto." 
                                  className="min-h-[120px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Clasificación</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="status"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estado</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecciona un estado" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="disponible">Disponible</SelectItem>
                                  <SelectItem value="reservado">Reservado</SelectItem>
                                  <SelectItem value="vendido">Vendido / Sin Stock</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Categoría Principal</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecciona..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="novias">Novias</SelectItem>
                                  <SelectItem value="15-anos">15 Años</SelectItem>
                                  <SelectItem value="fiesta">Vestidos de Fiesta</SelectItem>
                                  <SelectItem value="mitzvah">Bar/Bat Mitzvá</SelectItem>
                                  <SelectItem value="padrinos-y-madrinas">Padrinos y Madrinas</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subCategory"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subcategoría</FormLabel>
                              <FormControl>
                                <Input placeholder="Ej. Alta Costura" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Visibilidad</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="isFeatured"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  Destacar Producto
                                </FormLabel>
                                <FormDescription>
                                  Mostrará el producto en la portada principal.
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* PESTAÑA MULTIMEDIA */}
              <TabsContent value="media" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Galería de Imágenes</CardTitle>
                    <CardDescription>Añade y ordena las imágenes del producto. La primera será la principal.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {images.map((img, index) => (
                        <div key={index} className="relative group aspect-square rounded-md border overflow-hidden bg-muted">
                          <Image src={img} alt="Product preview" fill className="object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveImage(index)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          {index === 0 && (
                            <Badge className="absolute top-2 left-2 pointer-events-none">Principal</Badge>
                          )}
                        </div>
                      ))}
                      <div 
                        onClick={triggerFileInput}
                        className="aspect-square rounded-md border border-dashed flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <ImagePlus className="h-8 w-8 mb-2" />
                        <span className="text-xs font-medium">Subir Imagen</span>
                        <input 
                          type="file" 
                          ref={fileInputRef} 
                          className="hidden" 
                          multiple 
                          accept="image/*" 
                          onChange={handleImageUpload} 
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Video del Producto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="videoUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL del Video (YouTube, Vimeo, etc.)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://..." {...field} />
                          </FormControl>
                          <FormDescription>Dejar en blanco si no tiene video.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* PESTAÑA DETALLES */}
              <TabsContent value="details" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Precios</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Precio / Presupuesto estimado</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. $150.000 o 'Consultar'" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="promoPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Precio Promocional (Opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. $120.000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Atributos del Producto</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="sizes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Talles (separados por coma)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. XS, S, M, A medida" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="colors"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Colores (separados por coma)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. Blanco, Marfil, Champagne" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="material"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Material Principal</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. Satén Italiano, Encaje Guipur" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="season"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Temporada / Colección</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. Otoño/Invierno 2026" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* PESTAÑA SEO */}
              <TabsContent value="seo" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Optimización para Buscadores (SEO)</CardTitle>
                    <CardDescription>Configura cómo aparecerá este producto en Google.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="metaTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Título</FormLabel>
                          <FormControl>
                            <Input placeholder="Título para Google (Máx 60 caracteres recomendados)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="metaDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Descripción</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Descripción para Google (Máx 160 caracteres recomendados)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="slug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL Amigable (Slug)</FormLabel>
                          <FormControl>
                            <Input placeholder="ej-vestido-aurora-couture" {...field} />
                          </FormControl>
                          <FormDescription>Se generará automáticamente a partir del nombre si se deja en blanco.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>

          <div className="flex justify-end gap-4 pt-4 border-t">
            <Link href="/admin/products">
              <Button variant="outline" type="button">Cancelar</Button>
            </Link>
            <Button type="submit">Guardar Producto</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
