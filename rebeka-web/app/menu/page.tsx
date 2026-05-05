{/* MENU */}

export default function Menu() {
  return (
    <section className="bg-[#F5F1EA] min-h-screen px-6 py-20 text-black">
      {/* TÍTULO */}
      <h1 className="text-4xl font-bold text-center">
        MENÚ DIARIO
      </h1>

      {/* PRECIO */}
      <p className="mt-4 text-center text-lg text-gray-600">
        18€
      </p>

      {/* CONTENEDOR GENERAL */}
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 text-justify">

        {/* IZQUIERDA */}
        <div>
            <h2 className="text-2xl font-bold underline mb-6">
            Primeros
            </h2>

            <ul className="space-y-8 text-gray-700 text-base">
            <li>Ensalada oriental con noodles, pollo asado, manzana, zanahoria, cebolla china, maíz, brotes de soja y mayonesa de soja, cacahuete y aceite de sésamo</li>
            <li>Ensalada de lentejas con queso semi, hortalizas, aceitunas y vinagreta de limón y soja</li>
            <li>Gazpacho de fresas con picatostes, feta y aceite de cilantro</li>
            <li>Menestra de verduras con eneldo fresco y huevo poché</li>
            </ul>
        </div>

        {/* DERECHA */}
        <div>
            <h2 className="text-2xl font-bold underline mb-6">
            Segundos
            </h2>

            <ul className="space-y-4 text-gray-700">
            <li>Pimientos del piquillo rellenos de brandada de bacalao al cava</li>
            <li>Falso risotto de funghi, pulled pork y crujiente de parmesano</li>
            <li>Plato de lacón con patatas, pimentón y aove</li>
            <li>Burgers de pollo a la plancha con mutabbal de berenjena y pimiento asado</li>
            </ul>
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

*/
