import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const WA_NUMBER = "5491166317921"

const faqs = [
  {
    category: "Alta Costura y Vestidos",
    items: [
      {
        q: "¿Tienen stock de vestidos listos para probarse?",
        a: "Sí. Contamos con una selección exclusiva de vestidos de novia, 15 años, fiesta y Bat Mitzvá en stock en nuestro showroom de Azcuénaga 410. Te recomendamos agendar una cita previa para brindarte una atención boutique e íntima.",
      },
      {
        q: "¿Realizan confecciones completamente a medida?",
        a: "Por supuesto. Contamos con un taller propio de alta costura donde diseñamos y confeccionamos a medida utilizando los hilados finos que elijas de nuestra sedería importada. El proceso requiere de 2 a 3 pruebas para garantizar un calce impecable.",
      },
      {
        q: "¿Con cuánta anticipación debo encargar mi vestido de novia o 15 años?",
        a: "Para vestidos a medida o pedidos especiales, recomendamos iniciar el proceso de diseño con al menos 3 a 5 meses de anticipación. Esto nos permite importar los tejidos necesarios y realizar los ajustes con absoluta dedicación.",
      },
      {
        q: "¿Manejan línea ceremonial judía?",
        a: "Sí. Somos especialistas en ceremonias de la comunidad. Diseñamos vestidos elegantes y juveniles para Bat Mitzvá y sastería italiana fina para Bar Mitzvá, así como vestidos sofisticados para madrinas y cortejos ceremoniales.",
      },
    ],
  },
  {
    category: "Sedería y Telas",
    items: [
      {
        q: "¿Venden telas finas por metro?",
        a: "Sí. Sedería Becky nació en 1942 como sedería familiar. Ofrecemos encajes de Chantilly francés, satén duchesse italiano, organza de seda suiza, tules bordados en pedrería y canutillos. Son ideales para modistas y ateliers de alta costura.",
      },
      {
        q: "¿Asesoran en la cantidad de tela necesaria para un diseño?",
        a: "Sí. Nuestras asesoras expertas te ayudarán a calcular el metraje exacto según los figurines o bocetos que traigas, sugiriéndote la textura y caída idónea para tu silueta.",
      },
    ],
  },
  {
    category: "Citas y Visitas al Showroom",
    items: [
      {
        q: "¿Cuál es la dirección exacta y cómo llego?",
        a: "Estamos ubicados en Azcuénaga 410, en el emblemático barrio de Once, Ciudad Autónoma de Buenos Aires. Podes buscarnos en Google Maps como 'Sedería Becky'.",
      },
      {
        q: "¿Necesito un turno para probarme vestidos?",
        a: "Para probarte vestidos de Novia, 15 Años o Bat Mitzvá, el turno es fundamental para asegurarte el uso de nuestros salones de prueba privados y la guía exclusiva de una diseñadora. Podés agendar tu cita boutique desde el formulario web o por WhatsApp.",
      },
    ],
  },
  {
    category: "Medios de Pago y Envíos",
    items: [
      {
        q: "¿Qué medios de pago aceptan?",
        a: "Aceptamos efectivo, transferencia bancaria, tarjetas de débito y crédito. Ofrecemos planes de cuotas en tarjetas seleccionadas. Los presupuestos de alta costura a medida se pueden saldar en etapas de prueba.",
      },
      {
        q: "¿Hacen envíos de telas o vestidos al interior?",
        a: "Sí, despachamos telas y accesorios a todo el país a través de correos privados de confianza. Para vestidos de alta costura terminados, recomendamos retirarlos de forma presencial tras la última prueba de entalle.",
      },
    ],
  },
]

export function FaqAccordion() {
  return (
    <section className="py-24 md:py-32 bg-background relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        {faqs.map((section) => (
          <div key={section.category} className="mb-14 last:mb-0">
            <h2 className="font-serif text-2xl text-foreground mb-6 pb-4 border-b border-border">
              {section.category}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {section.items.map((item, i) => (
                <AccordionItem key={i} value={`${section.category}-${i}`}>
                  <AccordionTrigger className="text-left font-sans font-medium text-foreground text-sm leading-relaxed py-5 hover:no-underline hover:text-accent">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 font-light">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}

        {/* Still have questions */}
        <div className="mt-20 p-8 bg-card border border-border/80 text-center shadow-sm">
          <p className="font-serif text-xl text-foreground mb-2">
            ¿Tenés alguna consulta específica?
          </p>
          <p className="text-sm text-muted-foreground mb-6 font-light">
            Escribinos por WhatsApp y una de nuestras modistas o asesoras de alta costura te responderá a la brevedad.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20tengo%20una%20consulta`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-accent text-foreground text-xs tracking-widest font-semibold uppercase hover:bg-accent/90 transition-all duration-300 shadow-md"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
