import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Servicios() {
  return (
    <main className="bg-[#F5F1EA] text-[#1A1A1A]">
      {/* HERO SERVICIOS */}
      <section className="px-6 pt-32 pb-20 text-center md:px-16 lg:px-24">
        <p className="text-sm uppercase tracking-[0.3em] text-[#5B0014]">
          Rebeka Restaurante
        </p>

        <h1
          className={`${cormorant.className} mt-4 text-5xl font-semibold leading-none md:text-7xl`}
        >
          Servicios del Restaurante
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-neutral-700">
          Ofrecemos desayunos, menú diario y servicios de catering para todo tipo
          de eventos y celebraciones.
        </p>
      </section>

      {/* SERVICIOS PRINCIPALES */}
      <section className="px-6 pb-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white p-8 text-center shadow-sm">
            <h2 className={`${cormorant.className} text-3xl font-semibold`}>
              Desayunos
            </h2>
            <p className="mt-4 text-neutral-600">
              Disfruta de desayunos mediterráneos preparados con ingredientes
              frescos y de calidad.
            </p>
          </div>

          <div className="bg-white p-8 text-center shadow-sm">
            <h2 className={`${cormorant.className} text-3xl font-semibold`}>
              Menú diario
            </h2>
            <p className="mt-4 text-neutral-600">
              Una propuesta variada de platos mediterráneos para un almuerzo
              nutritivo y sabroso.
            </p>
          </div>

          <div className="bg-white p-8 text-center shadow-sm">
            <h2 className={`${cormorant.className} text-3xl font-semibold`}>
              Catering
            </h2>
            <p className="mt-4 text-neutral-600">
              Servicio de catering para eventos, celebraciones y encuentros
              especiales.
            </p>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-white px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#5B0014]">
              Galería
            </p>

            <h2
              className={`${cormorant.className} mt-4 text-5xl font-semibold`}
            >
              Cocina mediterránea diaria
            </h2>

            <p className="mt-6 text-neutral-700">
              Descubre nuestros platos mediterráneos, desayunos y propuestas de
              catering.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/food6.jpg"
              alt="Plato mediterráneo"
              width={500}
              height={500}
              className="h-64 w-full object-cover"
            />
            <Image
              src="/images/food8.jpg"
              alt="Comida mediterránea"
              width={500}
              height={500}
              className="h-64 w-full object-cover"
            />
            <Image
              src="/images/food3.jpg"
              alt="Ingredientes mediterráneos"
              width={500}
              height={500}
              className="col-span-2 h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#5B0014]">
            Opiniones
          </p>

          <h2
            className={`${cormorant.className} mt-4 text-5xl font-semibold`}
          >
            Opiniones de clientes
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white p-8 text-left">
              <p className="text-[#5B0014]">★★★★★</p>
              <p className="mt-4 text-neutral-700">
                El desayuno en Restaurante Rebeka es delicioso y siempre fresco.
                ¡Volveré pronto!
              </p>
              <p className="mt-6 font-semibold">María López</p>
            </div>

            <div className="bg-white p-8 text-left">
              <p className="text-[#5B0014]">★★★★★</p>
              <p className="mt-4 text-neutral-700">
                El menú diario es variado y siempre sorprendente. Una
                experiencia culinaria excepcional.
              </p>
              <p className="mt-6 font-semibold">Carlos Ruiz</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5B0014] px-6 py-24 text-center text-white md:px-16 lg:px-24">
        <h2
          className={`${cormorant.className} text-5xl font-semibold md:text-6xl`}
        >
          ¿Necesitas información sobre catering?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-white/80">
          Escríbenos y te ayudaremos a preparar una propuesta adaptada a tu
          evento.
        </p>

        <Link href="/contacto">
          <button className="mt-10 rounded-full border border-white px-8 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-[#5B0014]">
            Contactar
          </button>
        </Link>
      </section>
    </main>
  );
}