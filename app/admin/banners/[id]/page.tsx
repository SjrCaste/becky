import { notFound } from "next/navigation"
import { BannerForm } from "@/components/admin/banner-form"
import { getBanners } from "@/lib/supabase-services"

export default async function EditBannerPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  
  const allBanners = await getBanners()
  const banner = allBanners.find(b => b.id === resolvedParams.id)

  if (!banner) {
    notFound()
  }

  return (
    <div className="mx-auto w-full">
      <BannerForm initialData={banner} />
    </div>
  )
}
