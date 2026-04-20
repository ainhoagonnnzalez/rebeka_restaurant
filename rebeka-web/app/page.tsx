import Image from "next/image";
import Link from "next/link";

/* TIPOGRAFÍA  */
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      {/* ================= HERO (VIDEO) ================= */}
      <main className="relative h-screen w-full overflow-hidden bg-black">


        {/* VIDEO DE FONDO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/vino2.mp4" type="video/mp4" />
        </video>

        {/* CAPA OSCURA PARA MEJORAR LEGIBILIDAD */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* CONTENIDO HERO */}
        <div className="relative z-10 flex h-full items-center justify-between px-8 md:px-16 lg:px-24">
          
          {/* IZQUIERDA (TÍTULO) */}
          <div className="max-w-xl">
            <h1
              className={`${cormorant.className} text-5xl font-semibold leading-[0.9] tracking-tight text-white md:text-7xl`}
            >
              REBEKA
              <br />
              RESTAURANTE
            </h1>

            {/* LÍNEA DECORATIVA */}
            <div className="mt-6 h-[1px] w-24 bg-white/80"></div>
          </div>

          {/* DERECHA (DESCRIPCIÓN) */}
          <div className="hidden max-w-sm text-right md:block">
            <div className="mb-6 ml-auto h-[1px] w-24 bg-white/70"></div>

            <p className="text-base text-white/85 md:text-lg">
              Experiencia gastronómica mediterránea
            </p>
            <Link href="/menu">
              <button className="mt-6 border border-white px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black">
              Ver menú
              
            </button>
            </Link>
            
          </div>
        </div>
      </main>

      {/* ================= TÍTULO GRANDE EDITORIAL ================= */}
      <section className="bg-[#f5f1ea] px-6 py-24 text-center md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">

          {/* BLOQUE CON LÍNEAS ARRIBA Y ABAJO */}
          <div className="border-t border-b border-black py-8">

            <h2
              className={`${cormorant.className} text-4xl font-semibold uppercase leading-none tracking-tight text-[#1a1a1a] md:text-6xl lg:text-[90px]`}
            >
              Sabores mediterráneos
            </h2>

          </div>
        </div>
      </section>

      {/* ================= IMAGEN GRANDE ================= */}
      <section className="bg-[#f5f1ea]">
        <Image
          src="/images/hero.jpg"
          alt="Plato mediterráneo"
          width={1600}
          height={900}
          className="h-[420px] w-full object-cover md:h-[620px]"
        />
      </section>

      {/* ================= CINTA DECORATIVA ================= */}
      <section className="overflow-hidden border-y border-black bg-[#f5f1ea] py-4">
        <div className="whitespace-nowrap text-center text-sm uppercase tracking-[0.2em] text-black">
          REBEKA RESTAURANTE ✶ REBEKA RESTAURANTE ✶ REBEKA RESTAURANTE ✶ REBEKA RESTAURANTE ✶
        </div>
      </section>

      {/* ================= TEXTO CENTRAL ================= */}
      <section className="bg-[#f5f1ea] px-6 py-24 text-center md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">

          <h2
            className={`${cormorant.className} text-4xl font-semibold uppercase leading-[0.95] text-[#7a1c1c] md:text-6xl lg:text-7xl`}
          >
            Tu nuevo restaurante mediterráneo favorito
          </h2>

        </div>
      </section>

      {/* ================= CINTA DECORATIVA ================= */}
      <section className="overflow-hidden border-y border-black bg-[#f5f1ea] py-4">
        <div className="whitespace-nowrap text-center text-sm uppercase tracking-[0.2em] text-black">
          COCINA MEDITERRÁNEA ✶ PRODUCTO FRESCO ✶ SABOR AUTÉNTICO ✶
        </div>
      </section>

      {/* ================= BLOQUE DOS COLUMNAS ================= */}
      <section className="grid grid-cols-1 bg-[#f5f1ea] md:grid-cols-2">

        {/* IMAGEN */}
        <div>
          <Image
            src="/images/food1.jpg"
            alt="Interior del restaurante"
            width={900}
            height={900}
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="flex items-center justify-center bg-[#5b0014] px-8 py-20 text-center md:px-16">
          <div className="max-w-md">

            <h3
              className={`${cormorant.className} text-4xl font-semibold uppercase leading-tight text-[#d12b2b] md:text-6xl`}
            >
              ¿Buscas nuestro menú?
            </h3>
            <Link href="/menu">
              <button className="mt-10 rounded-full border border-[#d12b2b] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#d12b2b] transition hover:bg-[#d12b2b] hover:text-white">
              Ver menú
              </button>
            </Link>
            

          </div>
        </div>

      </section>

      
    </>
  );
}
/*

/* ================= GUÍA RÁPIDA TAILWIND ================= */

/* -------- MÁRGENES (margin = espacio exterior) -------- 
mt-2  → margin-top (arriba)
mb-4  → margin-bottom (abajo)
ml-2  → margin-left (izquierda)
mr-2  → margin-right (derecha)
mx-4  → izquierda + derecha
my-4  → arriba + abajo

/* -------- PADDING (espacio interno) -------- 
p-4   → padding total
px-6  → izquierda + derecha
py-4  → arriba + abajo

/* DIFERENCIA IMPORTANTE 
ml → mueve el bloque entero
pl → mueve el contenido dentro

/* -------- TAMAÑOS DE TEXTO -------- 
text-sm   → pequeño
text-base → normal
text-lg   → grande
text-xl   → más grande
text-2xl  → grande
text-4xl  → gigante
text-6xl  → MUY grande

/* RESPONSIVE (según pantalla) 
md:text-4xl → se aplica en pantallas medianas+
lg:text-6xl → en pantallas grandes

/* -------- WIDTH (ancho) -------- 
w-full → ocupa todo
w-1/2  → mitad
w-64   → tamaño fijo
max-w-lg → ancho máximo limitado
max-w-4xl → más ancho

/* -------- HEIGHT (alto) -------- 
h-screen → altura pantalla completa
h-auto   → altura automática
h-[500px] → altura fija
min-h-[400px] → altura mínima

/* -------- FLEX (posicionar elementos) -------- 
flex → activa flexbox
items-center → centrar vertical
justify-center → centrar horizontal
justify-between → separa extremos

/* -------- GRID -------- 
grid → activar grid
grid-cols-1 → 1 columna
md:grid-cols-2 → 2 columnas en desktop

/* -------- COLORES -------- 
bg-black → fondo negro
bg-white → fondo blanco
bg-[#f5f1ea] → color personalizado
text-white → texto blanco
text-neutral-500 → gris

/* -------- BORDES Y LÍNEAS -------- 
border → borde básico
border-b → solo abajo
border-t → solo arriba
border-y → arriba y abajo

border-dotted → puntos
border-dashed → rayas
border-solid → línea normal

/* GROSOR 
border-b → fino
border-b-2 → normal
border-b-4 → grueso

/* -------- LÍNEAS PERSONALIZADAS --------
h-[1px] → muy fina
h-[2px] → normal
h-[4px] → gruesa

w-24 → corta
w-40 → media
w-64 → larga
w-full → completa

mx-auto → centrar línea

/* -------- TEXTO -------- 
text-center → centrado
uppercase → mayúsculas
tracking-[0.2em] → separación letras
leading-tight → menos espacio entre líneas

/* -------- BOTONES -------- 
px-6 py-3 → tamaño botón
border → borde
rounded-full → redondo
hover:bg-white → efecto hover
transition → animación suave

/* -------- POSICIONAMIENTO 
relative → referencia
absolute → posición libre
z-10 → capa encima

/* -------- IMÁGENES / VIDEO 
object-cover → rellena sin deformar
w-full h-full → ocupa todo



-------- CONSEJOS PRO 
- usar max-w para que el texto no sea infinito
- usar py-XX en vez de h-screen en secciones
- usar mx-auto para centrar bloques
- combinar text-3xl md:text-6xl para responsive


#5B0014 -- vino 
#F5F1EA -- beige
#C92A2A -- rojo
#1A1A1A -- negro
#FAFAFA -- blanco
#6B6B6B -- gris

*/