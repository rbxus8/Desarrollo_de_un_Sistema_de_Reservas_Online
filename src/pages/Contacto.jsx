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
    <section className="min-h-screen p-6 bg-gray-50 text-gray-800 flex flex-col items-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center b">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-800">
          Contáctanos
        </h2>

        <div className="grid w-300 grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-6">
          {/* Información de contacto */}
          <div className="space-y-4">
            <p>
              <strong className="text-blue-800">📍 Dirección:</strong> Calle
              123, Ciudad Hotelera
            </p>
            <p>
              <strong className="text-blue-800">📞 Teléfono:</strong> +57 300
              123 4567
            </p>
            <p>
              <strong className="text-blue-800">📧 Correo:</strong>{" "}
              contacto@hotelparaiso.com
            </p>
            <p>
              <strong className="text-blue-800">🕒 Horarios:</strong> Lunes a
              Domingo, 24 horas
            </p>

            {/* Redes Sociales */}
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

            {/* Mapa */}
            <iframe
              className="w-full h-64 rounded shadow mt-6"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.716452635264!2d-74.07209238523642!3d4.656073643427006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aa4ff660d3d%3A0x9b1d5c4b2068a3fc!2sHotel%20Ejemplo!5e0!3m2!1ses!2sco!4v1617657200000"
              allowFullScreen=""
              loading="lazy"
              title="Mapa Hotel"
            ></iframe>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-blue-800">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-blue-800">
                Correo electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-blue-800">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded p-2 h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md transition"
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
