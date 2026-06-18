"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ShoppingBag,
  Tags,
  Image as ImageIcon,
  MessageSquare,
  HelpCircle,
  Info,
  Phone,
  Inbox,
  Images,
  Settings,
  Users
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Gestión del Inicio", url: "/admin/home", icon: Images },
  { title: "Productos", url: "/admin/products", icon: ShoppingBag },
  { title: "Categorías", url: "/admin/categories", icon: Tags },
  { title: "Galerías", url: "/admin/galleries", icon: ImageIcon },
  { title: "Testimonios", url: "/admin/testimonials", icon: MessageSquare },
  { title: "FAQ", url: "/admin/faq", icon: HelpCircle },
  { title: "Sobre Nosotros", url: "/admin/about", icon: Info },
  { title: "Contacto", url: "/admin/contact", icon: Phone },
  { title: "Consultas", url: "/admin/inquiries", icon: Inbox },
  { title: "Banners", url: "/admin/banners", icon: Images },
  { title: "Ajustes Globales", url: "/admin/settings", icon: Settings },
  { title: "Usuarios", url: "/admin/users", icon: Users },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="flex items-center justify-center py-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
            B
          </div>
          <span className="font-semibold text-lg tracking-tight">Admin Panel</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.url || (item.url !== "/admin" && pathname?.startsWith(item.url))}
                tooltip={item.title}
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground text-center">
          Sedería Becky © 2026
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
