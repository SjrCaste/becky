"use client"

import { useState, useEffect } from "react"
import { TimelineEvent } from "@/lib/data"
import { getTimelineEvents, deleteTimelineEvent } from "@/lib/supabase-services"
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

export default function AdminTimelinePage() {
  const [events, setEvents] = useState<TimelineEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    setLoading(true)
    const data = await getTimelineEvents()
    setEvents(data)
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este evento histórico?")) {
      const success = await deleteTimelineEvent(id)
      if (success) {
        toast.success("Evento eliminado")
        fetchEvents()
      } else {
        toast.error("Error al eliminar el evento")
      }
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sobre Nosotros (Historia)</h1>
          <p className="text-muted-foreground mt-1">
            Gestiona los hitos históricos (Timeline) de la marca.
          </p>
        </div>
        <Link href="/admin/about/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Hito
          </Button>
        </Link>
      </div>

      <div className="border rounded-md bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Imagen</TableHead>
              <TableHead className="w-[100px]">Año</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  Cargando historia...
                </TableCell>
              </TableRow>
            ) : events.length > 0 ? (
              events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>
                    <div className="relative h-12 w-12 rounded-md overflow-hidden bg-muted">
                      {event.image ? (
                        <Image 
                          src={event.image} 
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {event.year}
                  </TableCell>
                  <TableCell className="font-semibold">{event.title}</TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-[300px] truncate">
                    {event.description}
                  </TableCell>
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
                          <Link href={`/admin/about/${event.id}`}>
                            <Pencil className="h-4 w-4 mr-2" />
                            Editar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={() => handleDelete(event.id!)}>
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
                  No se encontraron eventos históricos.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
