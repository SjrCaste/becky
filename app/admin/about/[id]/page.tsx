import { notFound } from "next/navigation"
import { TimelineForm } from "@/components/admin/timeline-form"
import { getTimelineEvents } from "@/lib/supabase-services"

export default async function EditTimelineEventPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  
  const allEvents = await getTimelineEvents()
  const event = allEvents.find(e => e.id === resolvedParams.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="mx-auto w-full">
      <TimelineForm initialData={event} />
    </div>
  )
}
