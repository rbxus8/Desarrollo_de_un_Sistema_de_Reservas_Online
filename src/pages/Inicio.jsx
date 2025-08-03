import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/autoplay";

function Inicio() {
  return (
    <main>
      {/* Hero principal */}
      <section className="bg-pink-500 h-200">
        <Swiper
          className="h-full"
          modules={[Autoplay]}
          spaceBetween={-5}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img
              src="src/assets/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg"
              alt="Habitación"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/anshuman-debashis-G-yzDWHe2ic-unsplash.jpg"
              alt="Spa"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/hung-li-1HbWj9BDbjE-unsplash.jpg"
              alt="Piscina"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Separador */}
      <section className="h-40 w-full bg-black" />

      {/* Habitaciones */}
      <section className="min-h-full flex flex-col justify-center items-center text-center gap-6 pt-20 pb-20">
        <h2 className="font-serif text-3xl mb-3 font-bold">Habitaciones</h2>
        <p className="max-w-xl">
          Disfruta de nuestras lujosas habitaciones equipadas con todo lo que
          necesitas para una estancia inolvidable.
        </p>
        <ul className=" flex flex-wrap justify-center gap-6">
          <li className="shadow-xl cursor-pointer flex items-end w-[400px] h-70 rounded-xl bg-[url('src/assets/Buenos-Aires-Gran-Brizo-dormitorio-768x567.jpg')] bg-cover bg-center overflow-hidden">
            <p className="bg-black/70 text-white text-sm p-2 w-full text-left rounded-b-lg">
              🛌 Suite Presidencial – Vista panorámica, jacuzzi privado,
              servicio premium
            </p>
          </li>
          <li className="shadow-xl cursor-pointer flex items-end w-[400px] h-70 rounded-xl bg-[url('src/assets/habitacion-estandar-twin.jpg')] bg-cover bg-center overflow-hidden">
            <p className="bg-black/70 text-white text-sm p-2 w-full text-left rounded-b-lg">
              🛏️ Habitación Doble Deluxe – Espaciosa, con diseño moderno y
              elegante
            </p>
          </li>
          <li className="shadow-xl cursor-pointer flex items-end w-[400px] h-70 rounded-xl bg-[url('src/assets/NH_Coimbra_Dona_Inês_Room_Standard_River_View_General.jpg')] bg-cover bg-center overflow-hidden">
            <p className="bg-black/70 text-white text-sm p-2 w-full text-left rounded-b-lg">
              👨‍👩‍👧 Familiar – Perfecta para familias, con zonas de entretenimiento
            </p>
          </li>
        </ul>
      </section>

      {/* Servicios */}
      <section className="flex flex-col items-center justify-center text-center gap-6 px-4 mb-16">
        <div className="bg-black p-10 text-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
          <h2 className="font-serif text-3xl mb-3 font-bold">Servicios</h2>
          <ul className="grid sm:grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-10 w-full max-w-3xl p-6 bg-gray-900 rounded-l">
            <li className="flex items-center justify-start gap-3">
              💆 <span>Spa de lujo</span>
            </li>
            <li className="flex items-center justify-start gap-3">
              🍽️ <span>Restaurante gourmet</span>
            </li>
            <li className="flex items-center justify-start gap-3">
              🏊 <span>Piscina con bar</span>
            </li>
            <li className="flex items-center justify-start gap-3">
              🏋️ <span>Gimnasio</span>
            </li>
            <li className="flex items-center justify-start gap-3">
              🚗 <span>Transporte al aeropuerto</span>
            </li>
            <li className="flex items-center justify-start gap-3">
              🐶 <span>Pet friendly</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Galería */}
      <section className="p-10 bg-black mb-16 text-center px-4 pt-20 flex flex-col justify-center items-center">
        <h2 className="text-white font-serif text-3xl mb-3 font-bold">
          Galería
        </h2>

        <p className="mb-6 text-white">
          Explora nuestros <span className="font-bold">espacios</span>:
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              src: "src/assets/habitacion-estandar-twin.jpg",
              alt: "Habitación",
            },
            { src: "src/assets/spa.jpg", alt: "Spa" },
            {
              src: "src/assets/Piscina_iluminada-1024x538.webp",
              alt: "Piscina",
            },
            { src: "src/assets/restaurante.jpg", alt: "Restaurante" },
            { src: "src/assets/zonacomun.webp", alt: "zonacomun" },
            {
              src: "src/assets/areadeentrenimiento.jpg",
              alt: "Áreasdeentretenimiento",
            },
            { src: "src/assets/exterior.jpg", alt: "Exteriores" },
            { src: "src/assets/Eventos.jpg", alt: " Eventos" },
          ].map((img, i) => (
            <div
              key={i}
              className="w-full flex flex-nowrap bg-white m-2 overflow-hidden rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Ubicación */}
      <section className="mb-16 text-center px-4">
        <h2 className="font-serif text-3xl mb-3 font-bold">Ubicación</h2>
        <p className="mt-2">
          Nos encontramos en una zona privilegiada, cerca de atracciones
          turísticas, centros comerciales y más.
        </p>

        <div className="mt-6 w-full max-w-4xl mx-auto">
          <iframe
            title="Ubicación GranDestino"
            src="https://maps.google.com/maps?q=hotel%20de%20lujo&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 rounded-lg shadow-md"
            loading="lazy"
            allowFullScreen
            aria-label="Mapa de ubicación del hotel"
          />
        </div>
      </section>

      {/* Testimonios */}
      <section className="mb-16 text-center px-4 bg-black text-white py-10">
        <h2 className="font-serif text-3xl mb-3 font-bold">Testimonios</h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-2xl mx-auto "
        >
          {[
            `"Una experiencia inolvidable, el personal es increíble y el spa fue lo mejor del viaje." – Laura G., Colombia`,
            `"La habitación era un sueño. Volveré sin dudarlo." – Carlos M., México`,
            `"Excelente ubicación y desayuno de primer nivel. 100% recomendado." – Ana P., Perú`,
          ].map((quote, i) => (
            <SwiperSlide key={i}>
              <blockquote className="italic text-lg px-4">{quote}</blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contacto */}
      <section className="text-center px-4 pb-20">
        <h2 className="font-serif text-3xl mb-3 font-bold ">Contáctanos</h2>
        <p>📞 Teléfono: +57 300 123 4567</p>
        <p>📧 Correo: reservas@grandestinohotel.com</p>
        <p>📍 Dirección: Cra. 10 #25-50, Bogotá, Colombia</p>
        <Link
          to="/Reservas"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Escribenos
        </Link>
      </section>
    </main>
  );
}

export default Inicio;
