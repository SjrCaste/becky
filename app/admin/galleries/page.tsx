"use client"

import { useState, useEffect } from "react"
import { Fabric } from "@/lib/data"
import { getFabrics, deleteFabric } from "@/lib/supabase-services"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
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
import { Plus, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdminGalleriesPage() {
  const [fabrics, setFabrics] = useState<Fabric[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFabrics()
  }, [])

  const fetchFabrics = async () => {
    setLoading(true)
    const data = await getFabrics()
    setFabrics(data)
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar esta tela de la galería?")) {
      const success = await deleteFabric(id)
      if (success) {
        toast.success("Tela eliminada")
        fetchFabrics()
      } else {
        toast.error("Error al eliminar la tela")
      }
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Galerías de Telas</h1>
          <p className="text-muted-foreground mt-1">
            Gestiona la colección de telas premium importadas que se muestra en el inicio.
          </p>
        </div>
        <Link href="/admin/galleries/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nueva Tela
          </Button>
        </Link>
      </div>

      <div className="border rounded-md bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Imagen</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Origen</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  Cargando telas...
                </TableCell>
              </TableRow>
            ) : fabrics.length > 0 ? (
              fabrics.map((fabric) => (
                <TableRow key={fabric.id}>
                  <TableCell>
                    <div className="relative h-12 w-12 rounded-md overflow-hidden bg-muted">
                      <Image 
                        src={fabric.image} 
                        alt={fabric.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{fabric.name}</TableCell>
                  <TableCell className="text-muted-foreground">{fabric.type}</TableCell>
                  <TableCell className="text-muted-foreground">{fabric.origin}</TableCell>
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
                          <Link href={`/admin/galleries/${fabric.id}`}>
                            <Pencil className="h-4 w-4 mr-2" />
                            Editar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={() => handleDelete(fabric.id!)}>
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
                  No se encontraron telas en la galería.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
