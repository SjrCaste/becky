"use client"

import { useState, useEffect } from "react"
import { Product } from "@/lib/data"
import { getStoredProducts } from "@/lib/store"
import { Button } from "@/components/ui/button"
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
import { Badge } from "@/components/ui/badge"
import { Search, Plus, MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdminProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(getStoredProducts())
  }, [])

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'novias': return 'bg-rose-100 text-rose-800 border-rose-200'
      case '15-anos': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'fiesta': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'mitzvah': return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'padrinos-y-madrinas': return 'bg-emerald-100 text-emerald-800 border-emerald-200'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Productos</h1>
          <p className="text-muted-foreground mt-1">
            Gestiona el catálogo de vestidos y trajes.
          </p>
        </div>
        <Link href="/admin/products/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Producto
          </Button>
        </Link>
      </div>

      <div className="flex items-center w-full max-w-sm border rounded-md px-3 bg-background">
        <Search className="h-4 w-4 text-muted-foreground mr-2" />
        <Input 
          type="text" 
          placeholder="Buscar por nombre o categoría..." 
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
              <TableHead>Categoría</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead className="text-center">Destacado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="relative h-12 w-12 rounded-md overflow-hidden bg-muted">
                      <Image 
                        src={product.images[0]} 
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {product.name}
                    <div className="text-xs text-muted-foreground font-normal">
                      {product.subCategory}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getCategoryColor(product.category)}>
                      {product.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.priceEstimate}</TableCell>
                  <TableCell className="text-center">
                    {product.isFeatured ? (
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-none">
                        Sí
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground text-sm">-</span>
                    )}
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
                        <DropdownMenuItem className="cursor-pointer">
                          <Eye className="h-4 w-4 mr-2" />
                          Ver detalles
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" asChild>
                          <Link href={`/admin/products/${product.id}`}>
                            <Pencil className="h-4 w-4 mr-2" />
                            Editar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 cursor-pointer">
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
                  No se encontraron productos.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
