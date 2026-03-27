import Hero from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Eye,
  Leaf,
  Moon,
  ShoppingCart,
  Sparkles,
  TreesIcon as Lungs,
  Wind,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex-1">
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Beneficios
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              ¿Por qué elegir{" "}
              <span className="gradient-text">AEVA</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Diseño innovador que proporciona flujo de aire superior y
              comodidad durante todo el día.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl border border-border/50 bg-white hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-24 md:py-32 gradient-primary-soft px-4 md:px-6"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Wind className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                3 pasos simples
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Cómo funciona{" "}
              <span className="gradient-text">AEVA</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Un enfoque mecánico simple para mejorar tu respiración sin
              medicamentos ni químicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-emerald-300 to-transparent" />
                )}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="h-24 w-24 rounded-2xl bg-white shadow-lg shadow-emerald-500/10 border border-emerald-500/10 flex items-center justify-center">
                    <span className="text-3xl font-bold gradient-text">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[300px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="text-sm font-medium text-emerald-700">
                Preguntas frecuentes
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              ¿Tienes dudas?
            </h2>
            <p className="text-muted-foreground text-lg">
              Encuentra respuestas a las preguntas más comunes sobre AEVA.
            </p>
          </div>

          <div className="max-w-[700px] mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-border/50 bg-white hover:border-emerald-500/20 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left">
                  <h3 className="font-semibold pr-4">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl gradient-primary p-12 md:p-20 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative max-w-[600px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Comienza a respirar mejor hoy
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Únete a miles de clientes satisfechos que transformaron su
                calidad de vida con AEVA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-white/90 shadow-xl font-semibold"
                  asChild
                >
                  <Link href="#hero">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Comprar Ahora
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                  asChild
                >
                  <a
                    href="https://wa.link/lp497h"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar por WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: Lungs,
    title: "Mejor Flujo de Aire",
    description:
      "Abre suavemente los conductos nasales para aumentar el flujo de aire hasta un 30%, haciendo la respiración más fácil y natural.",
  },
  {
    icon: Moon,
    title: "Mejor Sueño",
    description:
      "Reduce los ronquidos y mejora la calidad del sueño manteniendo las vías respiratorias abiertas durante toda la noche.",
  },
  {
    icon: Activity,
    title: "Rendimiento Mejorado",
    description:
      "Optimiza la ingesta de oxígeno durante actividades físicas, ayudándote a rendir mejor y recuperarte más rápido.",
  },
  {
    icon: Leaf,
    title: "Alivio Sin Medicamentos",
    description:
      "Una solución natural para la congestión nasal sin los efectos secundarios de medicamentos o aerosoles.",
  },
  {
    icon: CheckCircle,
    title: "Diseño Cómodo",
    description:
      "Fabricado con materiales hipoalergénicos y un ajuste flexible que se adapta a cualquier forma de nariz.",
  },
  {
    icon: Eye,
    title: "Apariencia Discreta",
    description:
      "Diseño casi invisible que no llama la atención, perfecto para uso diurno en entornos profesionales.",
  },
];

const steps = [
  {
    title: "Limpia",
    description:
      "Lava suavemente tu nariz para eliminar residuos y grasa. Asegúrate de que la piel esté completamente seca antes de aplicar.",
  },
  {
    title: "Aplica",
    description:
      "Usa el aplicador magnético para colocar las tiras en ambos lados de la nariz. Presiona suavemente para una adhesión firme.",
  },
  {
    title: "Respira",
    description:
      "Los imanes abren tus vías respiratorias de forma natural, al instante y sin esfuerzo. Disfruta una mejor respiración.",
  },
];

const faqs = [
  {
    question: "¿Cómo elijo el tamaño correcto?",
    answer:
      "Es fundamental usar el tamaño correcto para tu nariz. Si las pestañas (Tabs) no están bien colocadas o si la banda no es del tamaño adecuado, no experimentarás la mejora respiratoria garantizada que prometemos. Mide el ancho de tus fosas nasales para elegir entre nuestros tamaños disponibles.",
  },
  {
    question: "¿La banda se apoya sobre el puente de mi nariz?",
    answer:
      "La banda debe estar ligeramente sobre el puente de la nariz o apenas sin tocarlo. Asegúrate de que las pestañas estén bien posicionadas para que la banda no se deslice ni pierda efectividad.",
  },
  {
    question: "¿Cómo sé si es el tamaño correcto?",
    answer:
      "El mejor tamaño es el que coincide con el ancho de tus orificios nasales. La parte interna de la banda debe tocar suavemente la parte más ancha del interior de tus fosas nasales.",
  },
  {
    question: "¿Cuánto dura cada pack?",
    answer:
      "Cada pack de AEVA incluye suministro para 30 días de uso continuo. Las tiras mantienen su efectividad durante todo el período cuando se almacenan correctamente.",
  },
  {
    question: "¿Puedo usarlas durante el ejercicio?",
    answer:
      "Sí, las tiras AEVA están diseñadas para mantenerse firmes durante actividades físicas. Muchos atletas las usan para optimizar su ingesta de oxígeno durante el entrenamiento.",
  },
];
