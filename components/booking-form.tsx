"use client"

import { useState } from "react"
import { Calendar as CalendarIcon, Clock, Sparkles, CheckCircle2, MessageCircle } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [eventType, setEventType] = useState("")
  const [formData, setFormData] = useState({ name: "", whatsapp: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!date || !eventType || !formData.name || !formData.whatsapp) {
      alert("Por favor completa los campos principales (Nombre, Tipo de Evento, Fecha y WhatsApp)")
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      
      // Build WhatsApp message for confirmation fallback
      const formattedDate = format(date, "dd 'de' MMMM 'de' yyyy", { locale: es })
      const messageText = `Hola Sedería Becky! Quisiera agendar una cita personalizada.\n\n` +
                          `*Nombre:* ${formData.name}\n` +
                          `*Evento:* ${eventType}\n` +
                          `*Fecha propuesta:* ${formattedDate}\n` +
                          `*Contacto:* ${formData.whatsapp}\n` +
                          `*Comentario:* ${formData.message || "Sin comentarios adicionales"}`
      
      const waUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(messageText)}`
      
      // Auto redirect to WhatsApp after 3 seconds
      setTimeout(() => {
        window.open(waUrl, "_blank")
      }, 2000)
    }, 1500)
  }

  return (
    <section id="reserva" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left panel: Boutique info */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-foreground text-primary-foreground p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-xl">
            {/* Visual background reflections */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-semibold block mb-4">
                Experiencia Exclusiva
              </span>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide mb-8">
                Reservá tu Cita Personalizada
              </h2>
              
              <p className="text-primary-foreground/75 text-sm font-light leading-relaxed mb-10">
                Te invitamos a nuestro showroom privado en Azcuénaga 410, CABA. Disfrutá de una asesoría de diseño e hilado con una copa de bienvenida o café de especialidad. Reservamos 1 hora y media entera para vos y tus acompañantes.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-semibold text-accent">Asesoría de Autor</h4>
                    <p className="text-xs text-primary-foreground/60 mt-1">Nuestros diseñadores te guiarán en silueta, talle y tipos de telas.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-semibold text-accent">Showroom Privado</h4>
                    <p className="text-xs text-primary-foreground/60 mt-1">Sala exclusiva de pruebas para total comodidad de la novia o quinceañera.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 mt-12 relative z-10 text-[11px] tracking-wider text-accent uppercase font-light">
              📍 Azcuénaga 410 — Once, Buenos Aires.
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="lg:col-span-7 bg-card border border-border/80 p-8 md:p-12 shadow-md relative flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">¡Turno Solicitado!</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
                  Hemos pre-registrado tu cita boutique. Te estamos redirigiendo automáticamente a WhatsApp para coordinar el horario definitivo y confirmar la disponibilidad de nuestra agenda.
                </p>
                <a
                  href={`https://wa.me/5491100000000`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-foreground text-xs tracking-widest uppercase font-semibold hover:bg-accent/90 transition-all duration-300"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                  Abrir WhatsApp Ahora
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1">Detalles de la Cita</h3>
                  <p className="text-xs text-muted-foreground mb-6">Por favor completa el formulario para agendar.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-widest uppercase font-semibold text-foreground/70">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Sofía Goldstein"
                      className="border border-border p-3 text-sm focus:outline-none focus:border-accent bg-background"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-widest uppercase font-semibold text-foreground/70">Número de WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. +54 9 11 1234 5678"
                      className="border border-border p-3 text-sm focus:outline-none focus:border-accent bg-background"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Event Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-widest uppercase font-semibold text-foreground/70">Tipo de Evento *</label>
                    <select
                      required
                      className="border border-border p-3 text-sm focus:outline-none focus:border-accent bg-background cursor-pointer"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Novia">Novia / Casamiento</option>
                      <option value="15 años">15 Años</option>
                      <option value="Fiesta">Fiesta / Gala</option>
                      <option value="Bat Mitzvá">Bat Mitzvá</option>
                      <option value="Madrina">Madrina / Padrino</option>
                      <option value="Cortejo">Cortejo / Familia</option>
                      <option value="Telas Custom">Confección Custom / Telas</option>
                    </select>
                  </div>

                  {/* Date Picker using Popover & Radix calendar */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-widest uppercase font-semibold text-foreground/70">Fecha Propuesta *</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "border border-border p-3 text-sm text-left flex items-center justify-between bg-background cursor-pointer hover:border-accent transition-colors",
                            !date && "text-muted-foreground"
                          )}
                        >
                          {date ? format(date, "PPP", { locale: es }) : "Seleccionar fecha"}
                          <CalendarIcon className="w-4 h-4 text-accent" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-50 bg-card border border-border shadow-2xl" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          locale={es}
                          disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past and Sundays
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-widest uppercase font-semibold text-foreground/70">Mensaje o Detalles Adicionales</label>
                  <textarea
                    rows={4}
                    placeholder="Contanos tus ideas, el estilo del vestido que te gusta o el tipo de tela que buscás..."
                    className="border border-border p-3 text-sm focus:outline-none focus:border-accent bg-background resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accent text-foreground hover:bg-accent/90 disabled:bg-muted text-xs tracking-[0.25em] font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-accent/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                      <span>Procesando Reserva...</span>
                    </>
                  ) : (
                    <span>Confirmar Cita Boutique</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
