function Servicios() {
  const servicios = [
    {
      icono: "💆",
      nombre: "Spa de lujo",
      descripcion:
        "Relájate con masajes terapéuticos, faciales rejuvenecedores, sauna, jacuzzi y zonas de descanso.",
    },
    {
      icono: "🍽️",
      nombre: "Restaurante gourmet",
      descripcion:
        "Platos internacionales con ingredientes frescos y atención personalizada en un ambiente elegante.",
    },
    {
      icono: "🏊",
      nombre: "Piscina con bar",
      descripcion:
        "Cocteles, snacks y música en nuestra piscina al aire libre con vista panorámica.",
    },
    {
      icono: "🏋️",
      nombre: "Gimnasio",
      descripcion:
        "Zona de cardio, fuerza, clases dirigidas y entrenadores personales las 24 horas.",
    },
    {
      icono: "🚗",
      nombre: "Transporte al aeropuerto",
      descripcion:
        "Traslado privado y seguro al aeropuerto, disponible 24/7 con reserva anticipada.",
    },
    {
      icono: "🐶",
      nombre: "Pet friendly",
      descripcion:
        "Espacios adaptados, kits de bienvenida y áreas verdes para que tu mascota también disfrute.",
    },
  ];

  const eventos = [
    {
      icono: "🎉",
      titulo: "Eventos Corporativos",
      descripcion:
        "Salones equipados con tecnología audiovisual, coffee breaks y asistencia logística para empresas.",
    },
    {
      icono: "💍",
      titulo: "Bodas y Celebraciones",
      descripcion:
        "Organizamos tu día especial en un entorno elegante con catering, decoración y coordinación total.",
    },
    {
      icono: "🎶",
      titulo: "Noches Temáticas",
      descripcion:
        "Cenas especiales con música en vivo, degustaciones, coctelería temática y ambientaciones únicas.",
    },
    {
      icono: "🧘",
      titulo: "Experiencias Wellness",
      descripcion:
        "Sesiones de yoga al amanecer, meditación guiada y rituales de relajación al aire libre.",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-20 text-center">
      {/* Servicios */}
      <h1 className="font-serif text-4xl mb-4 text-gray-900">Nuestros Servicios</h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
        Todo lo que necesitas para una estadía inolvidable.
      </p>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-gray-50 to-white border border-gray-200 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{servicio.icono}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {servicio.nombre}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* Eventos y Experiencias */}
      <section>
        <h2 className="font-serif text-3xl text-gray-900 mb-4">Eventos & Experiencias</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          Disfruta de actividades diseñadas para sorprenderte, relajarte o celebrar a lo grande.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {eventos.map((evento, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md text-left"
            >
              <div className="text-4xl mb-3">{evento.icono}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{evento.titulo}</h4>
              <p className="text-gray-600 leading-relaxed">{evento.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Servicios;
