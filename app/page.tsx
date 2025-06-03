import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  CheckCircle,
  TreesIcon as Lungs,
  Moon,
  ShoppingCart,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Features Section */}
        <section
          id="features"
          className="py-20 bg-white max-w-screen-xl mx-auto"
        >
          <div className="">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <Badge className="bg-[#A1DEB0]/80 text-foreground hover:bg-[#A1DEB0] px-3 py-1">
                Características y Beneficios
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Por qué las Tiras Nasales AEVA son Diferentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Nuestro diseño innovador proporciona un flujo de aire superior y
                comodidad, ayudándote a respirar mejor ya sea que estés
                durmiendo, haciendo ejercicio o realizando tus actividades
                diarias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-sky-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Lungs className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Mejor Flujo de Aire
                  </h3>
                  <p className="text-muted-foreground">
                    Abre suavemente los conductos nasales para aumentar el flujo
                    de aire hasta un 30%, haciendo la respiración más fácil y
                    natural.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-sky-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Moon className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mejor Sueño</h3>
                  <p className="text-muted-foreground">
                    Reduce los ronquidos y mejora la calidad del sueño
                    manteniendo las vías respiratorias abiertas durante toda la
                    noche.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-sky-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Rendimiento Mejorado
                  </h3>
                  <p className="text-muted-foreground">
                    Optimiza la ingesta de oxígeno durante actividades físicas,
                    ayudándote a rendir mejor y recuperarte más rápido.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Alivio Sin Medicamentos
                  </h3>
                  <p className="text-muted-foreground">
                    Una solución natural para la congestión nasal sin los
                    efectos secundarios de medicamentos o aerosoles.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Diseño Cómodo</h3>
                  <p className="text-muted-foreground">
                    Fabricado con materiales hipoalergénicos y un ajuste
                    flexible que se adapta a cualquier forma de nariz para una
                    comodidad todo el día.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Apariencia Discreta
                  </h3>
                  <p className="text-muted-foreground">
                    Diseño casi invisible que no llama la atención, perfecto
                    para uso diurno en entornos profesionales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-[#A1DEB0]/20">
          <div className="mx-auto max-w-screen-xl">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <Badge className="bg-[#A1DEB0]/80 text-foreground hover:bg-[#A1DEB0] px-3 py-1">
                Simple y Efectivo
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Cómo Funciona AEVA
              </h2>
              <p className="text-lg text-muted-foreground">
                Nuestras tiras nasales utilizan un enfoque mecánico simple para
                mejorar la respiración sin medicamentos ni químicos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-white shadow-md p-6 w-24 h-24 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-sky-500">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Limpiar</h3>
                <p className="text-muted-foreground">
                  Lava suavemente tu nariz para eliminar residuos, grasa o
                  sudor. Asegúrate de que la piel esté completamente seca antes
                  de aplicar las tiras para una mejor fijación.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-white shadow-md p-6 w-24 h-24 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-sky-500">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Aplicar</h3>
                <p className="text-muted-foreground">
                  Usa el aplicador magnético para colocar las tiras en ambos
                  lados de la nariz, justo por encima de las fosas nasales.
                  Presiona suavemente con los dedos para asegurar una adhesión
                  firme y cómoda.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-white shadow-md p-6 w-24 h-24 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-sky-500">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Activa</h3>
                <p className="text-muted-foreground">
                  Coloca la tira magnética y deja que los imanes hagan su
                  trabajo: abrir tus vías respiratorias de forma natural, al
                  instante y sin esfuerzo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 from-[#A1DEB0]/50">
          <div className="mx-auto max-w-screen-xl">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <Badge className="bg-[#A1DEB0]/80 text-foreground hover:bg-[#A1DEB0] px-3 py-1">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Encuentra respuestas a preguntas comunes sobre las Tiras Nasales
                AEVA.
              </p>
            </div>

            <div className="max-w-[800px] mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#A1DEB0]/80 to-[#A1DEB0] text-foreground">
          <div className="mx-auto max-w-screen-xl">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Comienza a respirar mejor hoy
              </h2>
              <p className="text-xl mb-8">
                Únete a miles de clientes satisfechos que han mejorado su
                respiración y calidad de vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Comprar Ahora
                </Button>
                <Button size="lg" variant="outline" className="" asChild>
                  <a
                    href="https://wa.link/lp497h"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contactar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const faqs = [
  {
    question: "🧩 ¿Qué errores comunes comete la gente al elegir el tamaño?",
    answer:
      "Es fundamental usar el tamaño correcto para tu nariz. Si las pestañas (Tabs) no están bien colocadas o si la banda no es del tamaño adecuado, no experimentarás la mejora respiratoria garantizada que prometemos.",
  },
  {
    question: "🚫 La banda se apoya sobre el puente de mi nariz, ¿es normal?",
    answer:
      "La banda debe estar ligeramente sobre el puente de la nariz o apenas sin tocarlo. Asegúrate de que las pestañas estén bien posicionadas para que la banda no se deslice ni pierda efectividad.",
  },
  {
    question:
      "⚠️ Siento que la banda no se ajusta bien, ¿cómo sé si es el tamaño correcto?",
    answer:
      "El mejor tamaño es el que coincide con el ancho de tus orificios nasales. La parte interna de la banda debe tocar suavemente la parte más ancha del interior de tus fosas nasales. Sujeta la banda en la parte inferior de la nariz como se muestra en la imagen para verificar el ajuste correcto.",
  },
];
