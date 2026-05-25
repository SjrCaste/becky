import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const WA_NUMBER = "5491100000000"

const faqs = [
  {
    category: "Vestidos y colecciones",
    items: [
      {
        q: "¿Tienen stock de vestidos de 15 anos en local?",
        a: "Si. Contamos con una amplia coleccion de vestidos de quinceañera disponibles para ver y probar en el local. Te recomendamos venir con turno para que podamos dedicarte el tiempo que mereces.",
      },
      {
        q: "¿Puedo encargar un vestido en un color o talla especifica?",
        a: "Si. Trabajamos con pedidos especiales en colores, talles y telas. El tiempo de entrega depende del modelo y disponibilidad del proveedor; en general es de 3 a 6 semanas. Consulta por WhatsApp para mas detalles.",
      },
      {
        q: "¿Los vestidos incluyen accesorios como tiara o guantes?",
        a: "Los vestidos se venden por separado de los accesorios, pero contamos con una seleccion complementaria de tiaras, guantes, cinturones y bijouterie para que puedas completar tu look en un solo lugar.",
      },
      {
        q: "¿Venden telas por metro?",
        a: "Si. Ofrecemos sederia premium (organza, encaje, satén, chiffon, tul, terciopelo y mas) vendida por metro. Ideal para modistas, disenadoras y proyectos artesanales a medida.",
      },
    ],
  },
  {
    category: "Talles y prueba",
    items: [
      {
        q: "¿Que talles manejan?",
        a: "Trabajamos con un rango amplio de talles: del 36 al 56 en la mayoria de los modelos. Para talles especiales o fuera de ese rango, consulta por encargo personalizado.",
      },
      {
        q: "¿Puedo llevar al vestido a arreglar a una modista despues de la compra?",
        a: "Por supuesto. Si bien no contamos con servicio de costura propio, nuestro equipo puede asesorarte sobre los ajustes necesarios. Recomendamos realizar las pruebas con anticipacion para tener tiempo suficiente.",
      },
      {
        q: "¿Necesito turno para probarse vestidos?",
        a: "No es obligatorio, pero si lo recomendamos, especialmente los fines de semana. Podes agendar tu cita gratuita por WhatsApp en cualquier momento.",
      },
    ],
  },
  {
    category: "Compra y pagos",
    items: [
      {
        q: "¿Que medios de pago aceptan?",
        a: "Aceptamos efectivo, transferencia bancaria, tarjetas de debito y credito. Ofrecemos cuotas sin interes con tarjetas seleccionadas. Consulta las condiciones vigentes al momento de la compra.",
      },
      {
        q: "¿Hacen envios a todo el pais?",
        a: "Si, realizamos envios a todo el pais a traves de correo privado. El costo de envio corre por cuenta del comprador. Hacemos el despacho dentro de las 48 hs habiles de confirmado el pago.",
      },
      {
        q: "¿Puedo hacer cambios o devoluciones?",
        a: "Aceptamos cambios dentro de los 10 dias corridos desde la fecha de compra, siempre que la prenda este en perfectas condiciones, sin uso, con etiquetas y embalaje original. No realizamos devoluciones en dinero para pedidos especiales o personalizados.",
      },
      {
        q: "¿Tienen lista de precios online?",
        a: "Por el momento no publicamos precios online dado que los valores pueden variar segun disponibilidad, temporada y pedidos especiales. Para consultar precios podes escribirnos por WhatsApp o visitarnos en el local.",
      },
    ],
  },
  {
    category: "Atencion y visita al local",
    items: [
      {
        q: "¿Cual es la direccion exacta del local?",
        a: "Nos encontramos en Paso 481, Ciudad Autonoma de Buenos Aires. Podes buscarnos en Google Maps como 'E & T Modas'.",
      },
      {
        q: "¿Cual es el horario de atencion?",
        a: "Atendemos de lunes a viernes de 10:00 a 19:00 hs y los sabados de 10:00 a 14:00 hs. Los domingos y feriados permanecemos cerrados.",
      },
      {
        q: "¿Puedo ir a ver el local sin turno?",
        a: "Si, podes venir en cualquier momento dentro del horario de atencion. Para una experiencia mas dedicada, recomendamos agendar turno por WhatsApp, especialmente si venis a elegir vestido.",
      },
    ],
  },
]

export function FaqAccordion() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        {faqs.map((section) => (
          <div key={section.category} className="mb-12 last:mb-0">
            <h2 className="font-serif text-2xl text-foreground mb-6 pb-4 border-b border-border">
              {section.category}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {section.items.map((item, i) => (
                <AccordionItem key={i} value={`${section.category}-${i}`}>
                  <AccordionTrigger className="text-left font-sans font-medium text-foreground text-sm leading-relaxed py-5 hover:no-underline hover:text-foreground/70">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}

        {/* Still have questions */}
        <div className="mt-16 p-8 bg-card border border-border text-center">
          <p className="font-serif text-xl text-foreground mb-2">
            ¿No encontraste tu pregunta?
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Escribinos por WhatsApp y te respondemos a la brevedad.
          </p>
          <Link
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20tengo%20una%20consulta`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-foreground text-card text-xs tracking-widest uppercase hover:bg-foreground/85 transition-colors duration-300"
          >
            Consultar por WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
