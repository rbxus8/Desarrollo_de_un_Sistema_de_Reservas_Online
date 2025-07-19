import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function Inicio() {
  return (
    <main>
      {/* Hero principal */}
      <section className="bg-pink-500">
        <Swiper
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
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/anshuman-debashis-G-yzDWHe2ic-unsplash.jpg"
              alt="Spa"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/hung-li-1HbWj9BDbjE-unsplash.jpg"
              alt="Piscina"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Habitaciones */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ color: "#d4af37" }}>Habitaciones</h2>
        <p>
          Disfruta de nuestras lujosas habitaciones equipadas con todo lo que
          necesitas para una estancia inolvidable.
        </p>
        <ul>
          <li>
            🛌 Suite Presidencial – Vista panorámica, jacuzzi privado, servicio
            premium
          </li>
          <li>
            🛏️ Habitación Doble Deluxe – Espaciosa, con diseño moderno y
            elegante
          </li>
          <li>
            👨‍👩‍👧 Familiar – Perfecta para familias, con zonas de entretenimiento
          </li>
        </ul>
      </section>

      {/* Servicios */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ color: "#d4af37" }}>Servicios</h2>
        <ul>
          <li>💆 Spa de lujo con masajes y tratamientos personalizados</li>
          <li>🍽️ Restaurante gourmet con cocina internacional</li>
          <li>🏊 Piscina climatizada con bar</li>
          <li>🏋️ Gimnasio de última generación</li>
          <li>🚗 Transporte al aeropuerto incluido</li>
          <li>🐶 Pet friendly – Aceptamos mascotas</li>
        </ul>
      </section>

      {/* Galería */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ color: "#d4af37" }}>Galería</h2>
        <p>Explora nuestros espacios:</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "10px",
          }}
        >
          <img
            src="/img/habitacion.jpg"
            alt="Habitación"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <img
            src="/img/spa.jpg"
            alt="Spa"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <img
            src="/img/piscina.jpg"
            alt="Piscina"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <img
            src="/img/restaurante.jpg"
            alt="Restaurante"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
      </section>

      {/* Ubicación */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ color: "#d4af37" }}>Ubicación</h2>
        <p>
          Nos encontramos en una zona privilegiada, cerca de atracciones
          turísticas, centros comerciales y más.
        </p>
        <iframe
          title="Ubicación GranDestino"
          src="https://maps.google.com/maps?q=hotel%20de%20lujo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ borderRadius: "10px", marginTop: "20px" }}
          loading="lazy"
        />
      </section>

      {/* Testimonios */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ color: "#d4af37" }}>Testimonios</h2>
        <blockquote style={{ fontStyle: "italic" }}>
          "Una experiencia inolvidable, el personal es increíble y el spa fue lo
          mejor del viaje." – Laura G., Colombia
        </blockquote>
        <blockquote style={{ fontStyle: "italic", marginTop: "20px" }}>
          "La habitación era un sueño. Volveré sin dudarlo." – Carlos M., México
        </blockquote>
      </section>

      {/* Contacto */}
      <section>
        <h2 style={{ color: "#d4af37" }}>Contáctanos</h2>
        <p>📞 Teléfono: +57 300 123 4567</p>
        <p>📧 Correo: reservas@grandestinohotel.com</p>
        <p>📍 Dirección: Cra. 10 #25-50, Bogotá, Colombia</p>
      </section>
    </main>
  );
}

export default Inicio;
