"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Tags, Inbox, Star, ArrowRight, Activity } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const metrics = [
  {
    title: "Total Productos",
    value: "142",
    description: "+12 este mes",
    icon: ShoppingBag,
  },
  {
    title: "Total Categorías",
    value: "12",
    description: "Activas",
    icon: Tags,
  },
  {
    title: "Consultas Recibidas",
    value: "89",
    description: "24 sin responder",
    icon: Inbox,
  },
  {
    title: "Productos Destacados",
    value: "8",
    description: "En portada",
    icon: Star,
  },
]

const recentChanges = [
  { action: "Actualizó precio", item: "Vestido Novia 'Juliette'", time: "hace 2 horas" },
  { action: "Agregó producto", item: "Vestido Fiesta 'Lumina'", time: "hace 5 horas" },
  { action: "Respondió consulta", item: "María Gómez", time: "hace 1 día" },
  { action: "Modificó banner", item: "Promoción Otoño", time: "hace 2 días" },
]

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Bienvenido al panel de administración de Sedería Becky. Aquí puedes ver el resumen de tu web.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Accesos Rápidos</CardTitle>
            <CardDescription>
              Gestiona rápidamente las áreas principales de tu sitio.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/admin/products" passHref>
              <Button variant="outline" className="w-full justify-between h-auto py-4">
                <div className="flex flex-col items-start gap-1">
                  <span className="font-semibold">Gestionar Productos</span>
                  <span className="text-xs text-muted-foreground font-normal">Añadir o editar catálogo</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/admin/inquiries" passHref>
              <Button variant="outline" className="w-full justify-between h-auto py-4">
                <div className="flex flex-col items-start gap-1">
                  <span className="font-semibold">Ver Consultas</span>
                  <span className="text-xs text-muted-foreground font-normal">Responder a clientes</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/admin/home" passHref>
              <Button variant="outline" className="w-full justify-between h-auto py-4">
                <div className="flex flex-col items-start gap-1">
                  <span className="font-semibold">Editar Inicio</span>
                  <span className="text-xs text-muted-foreground font-normal">Cambiar banners y portada</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/admin/galleries" passHref>
              <Button variant="outline" className="w-full justify-between h-auto py-4">
                <div className="flex flex-col items-start gap-1">
                  <span className="font-semibold">Subir Fotos</span>
                  <span className="text-xs text-muted-foreground font-normal">Actualizar galerías</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Últimos Cambios</CardTitle>
            <CardDescription>
              Actividad reciente en el panel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentChanges.map((change, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {change.action}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {change.item}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {change.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
