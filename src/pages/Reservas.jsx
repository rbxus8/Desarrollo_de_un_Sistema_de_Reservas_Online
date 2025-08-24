import { useState } from "react";

function Reservas() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fechaEntrada: "",
    fechaSalida: "",
    tipoHabitacion: "suite",
    personas: 1,
  });

  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");

  const tiposHabitacion = [
    { value: "suite", label: "Suite Presidencial" },
    { value: "doble", label: "Habitación Doble Deluxe" },
    { value: "familiar", label: "Habitación Familiar" },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validaciones simples
    if (
      !formData.nombre ||
      !formData.email ||
      !formData.fechaEntrada ||
      !formData.fechaSalida
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (formData.fechaEntrada > formData.fechaSalida) {
      alert("La fecha de entrada no puede ser posterior a la fecha de salida.");
      return;
    }

    // Aquí iría la lógica para enviar la reserva a backend o API
    // Por ahora solo simulamos confirmación
    setMensajeConfirmacion(
      `Gracias, ${formData.nombre}. Tu reserva para la ${
        tiposHabitacion.find((t) => t.value === formData.tipoHabitacion).label
      } desde ${formData.fechaEntrada} hasta ${
        formData.fechaSalida
      } ha sido recibida. Nos contactaremos pronto.`
    );

    // Reset formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      fechaEntrada: "",
      fechaSalida: "",
      tipoHabitacion: "suite",
      personas: 1,
    });
  }

  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <div className="text-center mb-12 bg-gray-100 p-15 rounded-lg shadow-lg">
        <h1 className="font-serif text-4xl mb-3 font-bold">
          Reserva tu estancia
        </h1>
        <p className="mb-12 text-center">
          Completa el formulario y confirma tu reserva en pocos pasos.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 space-y-6 "
        >
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block mb-1 font-semibold text-gray-700"
            >
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-semibold text-gray-700"
            >
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Teléfono */}
          <div>
            <label
              htmlFor="telefono"
              className="block mb-1 font-semibold text-gray-700"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+57 300 123 4567"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Fecha entrada */}
          <div>
            <label
              htmlFor="fechaEntrada"
              className="block mb-1 font-semibold text-gray-700"
            >
              Fecha de entrada <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="fechaEntrada"
              name="fechaEntrada"
              value={formData.fechaEntrada}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Fecha salida */}
          <div>
            <label
              htmlFor="fechaSalida"
              className="block mb-1 font-semibold text-gray-700"
            >
              Fecha de salida <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="fechaSalida"
              name="fechaSalida"
              value={formData.fechaSalida}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Tipo habitación */}
          <div>
            <label
              htmlFor="tipoHabitacion"
              className="block mb-1 font-semibold text-gray-700"
            >
              Tipo de habitación
            </label>
            <select
              id="tipoHabitacion"
              name="tipoHabitacion"
              value={formData.tipoHabitacion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {tiposHabitacion.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Personas */}
          <div>
            <label
              htmlFor="personas"
              className="block mb-1 font-semibold text-gray-700"
            >
              Número de personas
            </label>
            <input
              type="number"
              id="personas"
              name="personas"
              value={formData.personas}
              onChange={handleChange}
              min={1}
              max={10}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-md transition"
          >
            Confirmar Reserva
          </button>
        </form>

        {mensajeConfirmacion && (
          <div className="mt-8 bg-green-100 border border-green-400 text-green-700 p-4 rounded-md text-center">
            {mensajeConfirmacion}
          </div>
        )}
      </div>
    </main>
  );
}

export default Reservas;
