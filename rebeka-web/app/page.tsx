import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* HERO */}
      <main className="relative h-screen w-full overflow-hidden bg-black">

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 z-20 flex w-full items-center justify-between px-16 py-8 text-white md:px-24">
          <div className="text-xl font-semibold tracking-[0.2em]">
            REBEKA
          </div>

          <div className="flex gap-8 text-sm uppercase tracking-wider">
            <a href="#">Inicio</a>
            <a href="#">Menú</a>
            <a href="#">Sobre nosotros</a>
            <a href="#">Contacto</a>
          </div>
        </nav>

        {/* VÍDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/vino2.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* CONTENIDO HERO */}
        <div className="relative z-10 flex h-full items-center justify-between px-16 md:px-24">
          
          {/* IZQUIERDA */}
          <div className="max-w-xl">
            <h1 className="text-white text-6xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              REBEKA
              <br />
              RESTAURANT
            </h1>

            <div className="mt-6 h-[2px] w-24 bg-white/80"></div>
          </div>

          {/* DERECHA */}
          <div className="max-w-sm text-right">
            <div className="mb-6 ml-auto h-[2px] w-24 bg-white/70"></div>

            <p className="text-base text-white/85 md:text-lg">
              Experiencia gastronómica mediterránea
            </p>

            <button className="mt-6 border border-white px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white hover:text-black">
              Ver menú
            </button>
          </div>
        </div>
      </main>

      {/* SOBRE NOSOTROS */}
      <section className="bg-[#f5f1ea] px-16 py-24 text-black md:px-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">

          {/* TEXTO */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Sobre nosotros
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Cocina mediterránea con una mirada contemporánea
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-700">
              En Restaurante Rebeka ofrecemos una experiencia culinaria mediterránea única, con deliciosos desayunos, un menú diario variado y servicios de catering para cualquier ocasión. ¡Descubre nuestros sabores!
            </p>
          </div>

          {/* IMAGEN */}
          <div>
            <Image
            src="/images/hero.jpg"
            alt="Interior del restaurante"
            width={800}
            height={500}
            className="h-[500px] w-full object-cover"
          />
          </div>

        </div>
      </section>
    </>
  );
}