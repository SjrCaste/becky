"use client"

import { useState, useEffect } from "react"
import { Testimonial } from "@/lib/data"
import { getTestimonials, deleteTestimonial } from "@/lib/supabase-services"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Plus, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdminTestimonialsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    setLoading(true)
    const data = await getTestimonials()
    setTestimonials(data)
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este testimonio?")) {
      const success = await deleteTestimonial(id)
      if (success) {
        toast.success("Testimonio eliminado")
        fetchTestimonials()
      } else {
        toast.error("Error al eliminar el testimonio")
      }
    }
  }

  const filteredTestimonials = testimonials.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.role.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Testimonios</h1>
          <p className="text-muted-foreground mt-1">
            Gestiona los testimonios de los clientes.
          </p>
        </div>
        <Link href="/admin/testimonials/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Testimonio
          </Button>
        </Link>
      </div>

      <div className="flex items-center w-full max-w-sm border rounded-md px-3 bg-background">
        <Search className="h-4 w-4 text-muted-foreground mr-2" />
        <Input 
          type="text" 
          placeholder="Buscar por nombre o rol..." 
          className="border-0 shadow-none focus-visible:ring-0 px-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="border rounded-md bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Imagen</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Rol / Evento</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  Cargando testimonios...
                </TableCell>
              </TableRow>
            ) : filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell>
                    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                      {testimonial.image ? (
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {testimonial.name}
                  </TableCell>
                  <TableCell>{testimonial.role}</TableCell>
                  <TableCell>{testimonial.date}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menú</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem className="cursor-pointer" asChild>
                          <Link href={`/admin/testimonials/${testimonial.id}`}>
                            <Pencil className="h-4 w-4 mr-2" />
                            Editar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={() => handleDelete(testimonial.id!)}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No se encontraron testimonios.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
