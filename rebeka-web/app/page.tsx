import Image from "next/image";
import Link from "next/link";
import Counter from "./components/Counter";

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
              className={`${cormorant.className} text-5xl font-semibold leading-[0.9] tracking-tight text-[#F5F1EA] md:text-7xl`}
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
      {/* ================= PRESENTACIÓN ================= */}
<section className="bg-[#f5f1ea] px-6 py-24 md:px-12 lg:px-24">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 md:grid-cols-2">

    {/* IZQUIERDA */}
    <div>
      <h2
        className={`${cormorant.className} text-5xl leading-[0.9] text-[#1A1A1A] md:text-7xl`}
      >
        Bienvenidos a
        <br />
        Restaurante Rebeka
      </h2>
    </div>

    {/* DERECHA */}
    <div>
      <p className="text-lg leading-relaxed text-[#6B6B6B]">
        En Restaurante Rebeka ofrecemos una experiencia gastronómica
        mediterránea única, con desayunos, un menú diario elaborado con
        producto fresco y una propuesta culinaria pensada para disfrutar
        de los sabores auténticos de nuestra tierra.
      </p>

      {/* ESTADÍSTICAS */}
      <div className="mt-16 flex gap-16">

        <div>
          <h3
            className={`${cormorant.className} text-6xl text-[#5B0014] md:text-7xl`}
          >
            <Counter target={150} />+
          </h3>

          <p className="mt-2 text-[#6B6B6B]">
            Clientes satisfechos
          </p>
        </div>

        <div>
          <h3
            className={`${cormorant.className} text-6xl text-[#5B0014] md:text-7xl`}
          >
            <Counter target={15} />
          </h3>

          <p className="mt-2 text-[#6B6B6B]">
            Años de experiencia
          </p>
        </div>

      </div>
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

      {/*===================== NUESTROS SERVICIOS ====================== */}
      <section className="bg-[#f5f1ea] px-6 py-24 md:px-16 lg:px-24">

  <div className="mx-auto max-w-6xl text-center">

    <h2
      className={`${cormorant.className} text-5xl text-[#5B0014] md:text-7xl`}
    >
      Nuestros Servicios
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-[#6B6B6B]">
      Cocina mediterránea, desayunos y catering para cualquier ocasión.
    </p>

  </div>

  <div className="mx-auto mt-20 grid max-w-6xl gap-8 md:grid-cols-3">

    {/* CARD 1 */}
    <div className="bg-white">
      <Image
        src="/images/desayuno.jpg"
        alt=""
        width={600}
        height={400}
        className="h-[280px] w-full object-cover"
      />

      <div className="p-8">
        <h3 className={`${cormorant.className} text-3xl text-[#5B0014]`}>
          Desayunos
        </h3>

        <p className="mt-4 text-[#6B6B6B]">
          Empezar el día con producto fresco y calidad.
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-white">
      <Image
        src="/images/menu.jpg"
        alt=""
        width={600}
        height={400}
        className="h-[280px] w-full object-cover"
      />

      <div className="p-8">
        <h3 className={`${cormorant.className} text-3xl text-[#5B0014]`}>
          Menú Diario
        </h3>

        <p className="mt-4 text-[#6B6B6B]">
          Una propuesta mediterránea diferente cada día.
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-white">
      <Image
        src="/images/catering.jpg"
        alt=""
        width={600}
        height={400}
        className="h-[280px] w-full object-cover"
      />

      <div className="p-8">
        <h3 className={`${cormorant.className} text-3xl text-[#5B0014]`}>
          Catering
        </h3>

        <p className="mt-4 text-[#6B6B6B]">
          Eventos, celebraciones y reuniones especiales.
        </p>
      </div>
    </div>

  </div>

</section>
      {/* ==================== TESTIMONIOS =================== */}
      <section className="grid md:grid-cols-2">

  <Image
    src="/images/food2.jpg"
    alt=""
    width={1200}
    height={900}
    className="h-full min-h-[500px] object-cover"
  />

  <div className="flex items-center justify-center bg-[#5B0014] p-16 text-center">

    <div className="max-w-lg">

      <p className="mb-8 text-white text-xl">
        ★★★★★
      </p>

      <p
        className={`${cormorant.className} text-3xl leading-relaxed text-white`}
      >
        "La comida mediterránea es deliciosa y el servicio siempre es excepcional."
      </p>

      <p className="mt-8 uppercase tracking-[0.2em] text-white/70">
        María López
      </p>

    </div>

  </div>

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
      
      {/* ================= FOOTER ================= */}
<footer className="bg-[#F5F1EA] px-6 py-16 md:px-16 lg:px-24">

  <div className="mx-auto max-w-7xl border-t border-[#5B0014]/15 pt-16">

    <div className="grid grid-cols-1 gap-16 md:grid-cols-3">

      {/* COLUMNA 1 */}
      <div>

        <h3
          className={`${cormorant.className} text-4xl font-semibold text-[#5B0014]`}
        >
          Rebeka
        </h3>

        <p className="mt-5 max-w-xs text-base leading-relaxed text-[#6B6B6B]">
          Cocina mediterránea elaborada con producto fresco y una atención cercana.
        </p>

        <div className="mt-8 flex gap-6 text-3xl text-[#5B0014]">
          <a href="#">f</a>
          <a href="#">◎</a>
          <a href="#">♪</a>
          <a href="#">𝕏</a>
        </div>

      </div>

      {/* COLUMNA 2 */}
      <div>

        <h4
          className={`${cormorant.className} text-3xl font-semibold text-[#5B0014]`}
        >
          Contacto
        </h4>

        <div className="mt-5 space-y-2 text-base text-[#6B6B6B]">

          <p>+34 933 099 241</p>

          <p>newvida1929@gmail.com</p>

        </div>

      </div>

      {/* COLUMNA 3 */}
      <div>

        <h4
          className={`${cormorant.className} text-3xl font-semibold text-[#5B0014]`}
        >
          Catering y novedades
        </h4>

        <p className="mt-5 text-base text-[#6B6B6B]">
          Déjanos tu correo y te contactaremos.
        </p>

        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="mt-5 w-full rounded-full border border-[#5B0014]/20 bg-white px-5 py-3 text-[#1A1A1A] outline-none placeholder:text-gray-400"
        />

        <button className="mt-4 w-full rounded-full bg-[#5B0014] px-5 py-3 text-sm uppercase tracking-[0.15em] text-[#F5F1EA] transition hover:bg-[#450010]">
          Enviar
        </button>

      </div>

    </div>

    {/* LÍNEA INFERIOR */}
    <div className="mt-14 border-t border-[#5B0014]/15 pt-6">

      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

        <p className="text-sm text-[#6B6B6B]">
          © 2025 Rebeka Restaurante. Todos los derechos reservados.
        </p>

        <div className="flex gap-6 text-sm uppercase tracking-[0.15em] text-[#5B0014]">

          <Link href="/">Inicio</Link>

          <Link href="/menu">Menú</Link>

          <Link href="/servicios">Sobre nosotros</Link>

          <Link href="/contacto">Contacto</Link>

        </div>

      </div>

    </div>

  </div>

</footer>

      
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