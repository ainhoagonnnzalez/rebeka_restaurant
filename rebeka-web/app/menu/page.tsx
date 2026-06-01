import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Menu() {
  return (
    <section className="min-h-screen bg-[#F5F1EA] px-6 pt-36 pb-24 text-[#1A1A1A] md:px-16 lg:px-24">
      
      <div className="mx-auto max-w-6xl">

        {/* TÍTULO */}
        <div className="border-t border-b border-[#5B0014] py-10 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#5B0014]">
            Rebeka Restaurant
          </p>

          <h1
            className={`${cormorant.className} text-5xl font-semibold uppercase leading-none text-[#5B0014] md:text-7xl`}
          >
            Menú diario
          </h1>

          <p className="mt-6 text-lg tracking-[0.2em] text-[#5B0014]">
            18€
          </p>
        </div>

        {/* MENÚ */}
        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">

          {/* PRIMEROS */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <span className="h-[1px] flex-1 bg-[#5B0014]"></span>
              <h2
                className={`${cormorant.className} text-4xl font-semibold uppercase text-[#5B0014]`}
              >
                Primeros
              </h2>
              <span className="h-[1px] flex-1 bg-[#5B0014]"></span>
            </div>

            <ul className="space-y-8 text-center text-[17px] leading-relaxed text-[#333]">
              <li>Ensalada oriental con noodles, pollo asado, manzana, zanahoria, cebolla china, maíz, brotes de soja y mayonesa de soja, cacahuete y aceite de sésamo</li>
              <li>Ensalada de lentejas con queso semi, hortalizas, aceitunas y vinagreta de limón y soja</li>
              <li>Gazpacho de fresas con picatostes, feta y aceite de cilantro</li>
              <li>Menestra de verduras con eneldo fresco y huevo poché</li>
            </ul>
          </div>

          {/* SEGUNDOS */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <span className="h-[1px] flex-1 bg-[#5B0014]"></span>
              <h2
                className={`${cormorant.className} text-4xl font-semibold uppercase text-[#5B0014]`}
              >
                Segundos
              </h2>
              <span className="h-[1px] flex-1 bg-[#5B0014]"></span>
            </div>

            <ul className="space-y-8 text-center text-[17px] leading-relaxed text-[#333]">
              <li>Pimientos del piquillo rellenos de brandada de bacalao al cava</li>
              <li>Falso risotto de funghi, pulled pork y crujiente de parmesano</li>
              <li>Plato de lacón con patatas, pimentón y aove</li>
              <li>Burgers de pollo a la plancha con mutabbal de berenjena y pimiento asado</li>
            </ul>
          </div>
        </div>

        {/* TEXTO FINAL */}
        <div className="mt-20 border-t border-[#5B0014] pt-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#5B0014]">
            Cocina mediterránea · Producto fresco · Sabor auténtico
          </p>
        </div>

      </div>
    </section>
  );
}

/*
grid --> activa columnas
grid-cols --> en móvil una columna
md: grid-cols-2 --> en ordenador dos columnas
gap-16 --> separacion entre bloques
max-w-gxl mx-auto --> centra todo y no lo deja infinito

http://localhost:3000
arrancar next --> npm run dev



*/
