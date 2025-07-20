import { useState } from "react";

function Habitaciones() {
  const [modalOpen, setModalOpen] = useState(false);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);

  const habitaciones = [
    {
      nombre: "🛌 Suite Presidencial",
      descripcionCorta: "Vista panorámica, jacuzzi privado, servicio premium",
      descripcionLarga:
        "Nuestra suite más exclusiva con amplios ventanales, sala de estar independiente, jacuzzi privado y acceso a servicios VIP. Ideal para quienes buscan lujo total.",
      imagen: "/img/Buenos-Aires-Gran-Brizo-dormitorio-768x567.jpg",
    },
    {
      nombre: "🛏️ Habitación Doble Deluxe",
      descripcionCorta: "Moderna, espaciosa y elegante",
      descripcionLarga:
        "Perfecta para parejas o amigos, esta habitación ofrece dos camas cómodas, decoración moderna, baño privado y excelente iluminación natural.",
      imagen: "/img/habitacion-estandar-twin.jpg",
    },
    {
      nombre: "👨‍👩‍👧 Familiar",
      descripcionCorta: "Amplia y cómoda para toda la familia",
      descripcionLarga:
        "Equipada con camas múltiples, zona de juegos, minibar y espacio para compartir en familia. Ideal para una estadía relajada con niños.",
      imagen: "/img/NH_Coimbra_Dona_Inês_Room_Standard_River_View_General.jpg",
    },
  ];

  const abrirModal = (habitacion) => {
    setHabitacionSeleccionada(habitacion);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setHabitacionSeleccionada(null);
    setModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl text-gray-900 mb-4">Nuestras Habitaciones</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Contamos con habitaciones diseñadas para todo tipo de viajeros: desde suites de lujo hasta opciones familiares,
          todas equipadas para ofrecerte una experiencia cómoda, segura y memorable.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {habitaciones.map((hab, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 flex flex-col"
          >
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${hab.imagen})` }}
            ></div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{hab.nombre}</h3>
              <p className="text-sm text-gray-500 mb-2">{hab.descripcionCorta}</p>
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                {hab.descripcionLarga}
              </p>
              <button
                className="mt-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                onClick={() => abrirModal(hab)}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && habitacionSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-lg shadow-xl relative text-left">
            <button
              onClick={cerrarModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-2">{habitacionSeleccionada.nombre}</h3>
            <p className="text-gray-700 mb-4">{habitacionSeleccionada.descripcionLarga}</p>
            <img
              src={habitacionSeleccionada.imagen}
              alt={habitacionSeleccionada.nombre}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Habitaciones;
