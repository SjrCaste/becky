"use client"

import { useState, useEffect } from "react"
import { Banner } from "@/lib/data"
import { getBanners, deleteBanner, updateBanner } from "@/lib/supabase-services"
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
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import Link from "next/link"

export default function AdminBannersPage() {
  const [banners, setBanners] = useState<Banner[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBanners()
  }, [])

  const fetchBanners = async () => {
    setLoading(true)
    const data = await getBanners()
    setBanners(data)
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este banner?")) {
      const success = await deleteBanner(id)
      if (success) {
        toast.success("Banner eliminado")
        fetchBanners()
      } else {
        toast.error("Error al eliminar el banner")
      }
    }
  }

  const toggleActive = async (banner: Banner) => {
    const success = await updateBanner(banner.id, { is_active: !banner.is_active })
    if (success) {
      toast.success(banner.is_active ? "Banner desactivado" : "Banner activado")
      fetchBanners()
    } else {
      toast.error("Error al cambiar estado")
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Banners Promocionales</h1>
          <p className="text-muted-foreground mt-1">
            Gestiona los banners que aparecen en la página principal.
          </p>
        </div>
        <Link href="/admin/banners/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Banner
          </Button>
        </Link>
      </div>

      <div className="border rounded-md bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Imagen</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Enlace</TableHead>
              <TableHead className="text-center">Orden</TableHead>
              <TableHead className="text-center">Activo</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                  Cargando banners...
                </TableCell>
              </TableRow>
            ) : banners.length > 0 ? (
              banners.map((banner) => (
                <TableRow key={banner.id}>
                  <TableCell>
                    <div className="relative h-16 w-full rounded-md overflow-hidden bg-muted">
                      {banner.image ? (
                        <Image 
                          src={banner.image} 
                          alt={banner.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {banner.title}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-[200px] truncate">
                    {banner.link_url || "Sin enlace"}
                  </TableCell>
                  <TableCell className="text-center">{banner.sort_order}</TableCell>
                  <TableCell className="text-center">
                    <Switch 
                      checked={banner.is_active} 
                      onCheckedChange={() => toggleActive(banner)}
                    />
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
                          <Link href={`/admin/banners/${banner.id}`}>
                            <Pencil className="h-4 w-4 mr-2" />
                            Editar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={() => handleDelete(banner.id!)}>
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
                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                  No se encontraron banners.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
