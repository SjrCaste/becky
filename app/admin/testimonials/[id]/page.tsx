import { notFound } from "next/navigation"
import { TestimonialForm } from "@/components/admin/testimonial-form"
import { getTestimonials } from "@/lib/supabase-services"

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  
  // Temporalmente usamos fetch all y find. 
  // Podrías crear getTestimonialById en supabase-services.ts si prefieres.
  const allTestimonials = await getTestimonials()
  const testimonial = allTestimonials.find(t => t.id === resolvedParams.id)

  if (!testimonial) {
    notFound()
  }

  return (
    <div className="mx-auto w-full">
      <TestimonialForm initialData={testimonial} />
    </div>
  )
}
