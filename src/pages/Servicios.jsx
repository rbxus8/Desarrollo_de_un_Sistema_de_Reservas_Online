import React from "react";

function Servicios() {
  const servicios = [
    {
      icono: "💆",
      imagen: "src/assets/spa.jpg",
      nombre: "Spa de lujo",
      descripcion:
        "Relájate con masajes terapéuticos, faciales rejuvenecedores, sauna, jacuzzi y zonas de descanso.",
    },
    {
      icono: "🍽️",
      imagen: "src/assets/restaurante.jpg",
      nombre: "Restaurante gourmet",
      descripcion:
        "Platos internacionales con ingredientes frescos y atención personalizada en un ambiente elegante.",
    },
    {
      icono: "🏊",
      imagen: "src/assets/Piscina_iluminada-1024x538.webp",
      nombre: "Piscina con bar",
      descripcion:
        "Cocteles, snacks y música en nuestra piscina al aire libre con vista panorámica.",
    },
    {
      icono: "🏋️",
      imagen: "src/assets/gimnasio.jpg",
      nombre: "Gimnasio",
      descripcion:
        "Zona de cardio, fuerza, clases dirigidas y entrenadores personales las 24 horas.",
    },
    {
      icono: "🚗",
      imagen: "src/assets/transporte.jpg",
      nombre: "Transporte al aeropuerto",
      descripcion:
        "Traslado privado y seguro al aeropuerto, disponible 24/7 con reserva anticipada.",
    },
    {
      icono: "🐶",
      imagen: "src/assets/petfriendly.jpg",
      nombre: "Pet friendly",
      descripcion:
        "Espacios adaptados, kits de bienvenida y áreas verdes para que tu mascota también disfrute.",
    },
  ];

  const eventos = [
    {
      icono: "🎉",
      imagen: "src/assets/EventosCorporativo.jpg",
      titulo: "Eventos Corporativos",
      descripcion:
        "Salones equipados con tecnología audiovisual, coffee breaks y asistencia logística para empresas.",
    },
    {
      icono: "💍",
      imagen: "src/assets/BodasyCelebraciones.jpg",
      titulo: "Bodas y Celebraciones",
      descripcion:
        "Organizamos tu día especial en un entorno elegante con catering, decoración y coordinación total.",
    },
    {
      icono: "🎶",
      imagen: "src/assets/NochesTemáticas.webp",
      titulo: "Noches Temáticas",
      descripcion:
        "Cenas especiales con música en vivo, degustaciones, coctelería temática y ambientaciones únicas.",
    },
    {
      icono: "🧘",
      imagen: "src/assets/yoga.jpg",
      titulo: "Experiencias Wellness",
      descripcion:
        "Sesiones de yoga al amanecer, meditación guiada y rituales de relajación al aire libre.",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-20 py-20 text-center">
      {/* Servicios */}
      <h1 className="font-serif text-4xl mb-3 font-bold">Nuestros Servicios</h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
        Todo lo que necesitas para una estadía inolvidable.
      </p>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-black border border-gray-200 rounded-xl shadow-md text-left hover:shadow-lg transition"
          >
            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              className="rounded-t-xl w-full h-80 object-cover"
            />
            <div className="p-5">
              <div className="text-3xl mb-2">{servicio.icono}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {servicio.nombre}
              </h3>
              <p className="text-white text-base leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Eventos y Experiencias */}
      <section>
        <h2 className="font-serif text-4xl mb-3 font-bold">
          Eventos & Experiencias
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          Disfruta de actividades diseñadas para sorprenderte, relajarte o
          celebrar a lo grande.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {eventos.map((evento, idx) => (
            <div
              key={idx}
              className="bg-black border border-gray-200 rounded-xl shadow-md hover:shadow-lg text-left"
            >
              <img
                src={evento.imagen}
                alt={evento.titulo}
                className="rounded-t-xl w-full h-80 object-cover"
              />
              <div className="p-6">
                <div className="text-3xl mb-2">{evento.icono}</div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {evento.titulo}
                </h4>
                <p className="text-white leading-relaxed">
                  {evento.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Servicios;
