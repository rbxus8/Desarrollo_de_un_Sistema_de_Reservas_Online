import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaTripadvisor,
} from "react-icons/fa";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Gracias por contactarnos. Pronto te responderemos.");
    setFormData({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <section className="min-h-screen p-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Información de contacto */}
          <div className="space-y-4">
            <p>
              <strong>📍 Dirección:</strong> Calle 123, Ciudad Hotelera
            </p>
            <p>
              <strong>📞 Teléfono:</strong> +57 300 123 4567
            </p>
            <p>
              <strong>📧 Correo:</strong> contacto@hotelparaiso.com
            </p>
            <p>
              <strong>🕒 Horarios:</strong> Lunes a Domingo, 24 horas
            </p>

            {/* Botones de redes sociales */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/hotelparaiso"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-2xl hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/hotelparaiso"
                target="_blank"
                rel="noreferrer"
                className="text-pink-500 text-2xl hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noreferrer"
                className="text-green-500 text-2xl hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://twitter.com/hotelparaiso"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 text-2xl hover:scale-110 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.tripadvisor.com/hotelparaiso"
                target="_blank"
                rel="noreferrer"
                className="text-green-700 text-2xl hover:scale-110 transition"
              >
                <FaTripadvisor />
              </a>
            </div>

            <iframe
              className="w-full h-64 rounded shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
              allowFullScreen=""
              loading="lazy"
              title="Mapa Hotel"
            ></iframe>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full border rounded p-2 h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
