export default function Contacto() {
  return (
    <section className="min-h-screen bg-[#F5F1EA] px-6 py-24 text-black">
      <h1 className="text-center text-4xl font-bold">
        Contacto
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        Estamos aquí para atenderte. Contáctanos para reservas, información sobre el menú diario, desayunos o catering.
      </p>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Atención</h2>
          <p className="mt-4 text-gray-600">933099241</p>

          <h2 className="mt-10 text-2xl font-bold">Consulta</h2>
          <p className="mt-4 text-gray-600">newvida1929@gmail.com</p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full border border-gray-300 px-4 py-3"
          />

          <input
            type="email"
            placeholder="Tu correo"
            className="w-full border border-gray-300 px-4 py-3"
          />

          <textarea
            placeholder="Tu mensaje"
            className="h-40 w-full border border-gray-300 px-4 py-3"
          />

          <button className="bg-[#5B0014] px-6 py-3 text-white">
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
}