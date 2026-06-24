import { notFound } from "next/navigation"
import { CategoryForm } from "@/components/admin/category-form"
import { getCategories } from "@/lib/supabase-services"

export default async function EditCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  
  const allCategories = await getCategories()
  const category = allCategories.find(c => c.slug === resolvedParams.slug)

  if (!category) {
    notFound()
  }

  return (
    <div className="mx-auto w-full">
      <CategoryForm initialData={category} />
    </div>
  )
}
