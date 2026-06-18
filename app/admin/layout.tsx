import type { Metadata } from "next"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/admin/app-sidebar"
import { Topbar } from "@/components/admin/topbar"

export const metadata: Metadata = {
  title: "Admin Panel | Sedería Becky",
  description: "Panel de administración de Sedería Becky",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Topbar />
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-muted/20">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
