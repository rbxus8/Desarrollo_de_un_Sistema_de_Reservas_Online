import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function Inicio() {
  return (
    <main>
      {/* Hero principal */}
      <section className="bg-pink-500 h-130">
        <Swiper
          className="h-full"
          modules={[Autoplay]}
          spaceBetween={20}
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
        <h2 className="font-serif text-2xl">Habitaciones</h2>
        <p className="max-w-xl">
          Disfruta de nuestras lujosas habitaciones equipadas con todo lo que
          necesitas para una estancia inolvidable.
        </p>
        <ul className=" flex flex-wrap justify-center gap-6">
          <li className="shadow-xl cursor-pointer flex items-end w-[300px] h-60 rounded-xl bg-[url('src/assets/Buenos-Aires-Gran-Brizo-dormitorio-768x567.jpg')] bg-cover bg-center overflow-hidden">
            <p className="bg-black/70 text-white text-sm p-2 w-full text-left rounded-b-lg">
              🛌 Suite Presidencial – Vista panorámica, jacuzzi privado,
              servicio premium
            </p>
          </li>
          <li className="shadow-xl cursor-pointer flex items-end w-[300px] h-60 rounded-xl bg-[url('src/assets/habitacion-estandar-twin.jpg')] bg-cover bg-center overflow-hidden">
            <p className="bg-black/70 text-white text-sm p-2 w-full text-left rounded-b-lg">
              🛏️ Habitación Doble Deluxe – Espaciosa, con diseño moderno y
              elegante
            </p>
          </li>
          <li className="shadow-xl cursor-pointer flex items-end w-[300px] h-60 rounded-xl bg-[url('src/assets/NH_Coimbra_Dona_Inês_Room_Standard_River_View_General.jpg')] bg-cover bg-center overflow-hidden">
            <p className="bg-black/70 text-white text-sm p-2 w-full text-left rounded-b-lg">
              👨‍👩‍👧 Familiar – Perfecta para familias, con zonas de entretenimiento
            </p>
          </li>
        </ul>
      </section>

      {/* Servicios */}
      <section className="text-white bg-black text-center p-20 flex flex-col items-center gap-10">
        <h2 className="font-serif text-2xl">Servicios</h2>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 w-full max-w-3xl p-6 bg-gray-800 rounded-lg">
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
      </section>

      {/* Galería */}
      <section className="mb-16 text-center px-4 pt-20">
        <h2 className="font-serif text-2xl">Galería</h2>
        <p className="mb-6">Explora nuestros espacios:</p>

        <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { src: "/img/habitacion.jpg", alt: "Habitación" },
            { src: "/img/spa.jpg", alt: "Spa" },
            { src: "/img/piscina.jpg", alt: "Piscina" },
            { src: "/img/restaurante.jpg", alt: "Restaurante" },
            { src: "/img/piscina.jpg", alt: "Piscina" },
            { src: "/img/restaurante.jpg", alt: "Restaurante" },
          ].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
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
        <h2 className="font-serif text-2xl">Ubicación</h2>
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
      <section className="mb-16 text-center px-4">
        <h2 className="font-serif text-2xl mb-6">Testimonios</h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-2xl mx-auto"
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
        <h2 className="font-serif text-2xl">Contáctanos</h2>
        <p>📞 Teléfono: +57 300 123 4567</p>
        <p>📧 Correo: reservas@grandestinohotel.com</p>
        <p>📍 Dirección: Cra. 10 #25-50, Bogotá, Colombia</p>
      </section>
    </main>
  );
}

export default Inicio;
