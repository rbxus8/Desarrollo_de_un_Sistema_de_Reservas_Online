function Inicio() {
  return (
    <main style={{ backgroundColor: '#742f2f', color: '#fff', padding: '40px' }}>
      {/* Hero principal */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '40px', color: '#d4af37' }}>Bienvenido a GranDestino</h1>
        <p style={{ fontSize: '18px', marginTop: '10px' }}>
          Donde el lujo y la comodidad se encuentran en el corazón de tu destino ideal.
        </p>
        <button style={{
          marginTop: '30px',
          padding: '12px 30px',
          backgroundColor: '#a88432',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Reservar ahora
        </button>
      </section>

      {/* Habitaciones */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#d4af37' }}>Habitaciones</h2>
        <p>Disfruta de nuestras lujosas habitaciones equipadas con todo lo que necesitas para una estancia inolvidable.</p>
        <ul>
          <li>🛌 Suite Presidencial – Vista panorámica, jacuzzi privado, servicio premium</li>
          <li>🛏️ Habitación Doble Deluxe – Espaciosa, con diseño moderno y elegante</li>
          <li>👨‍👩‍👧 Familiar – Perfecta para familias, con zonas de entretenimiento</li>
        </ul>
      </section>

      {/* Servicios */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#d4af37' }}>Servicios</h2>
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
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#d4af37' }}>Galería</h2>
        <p>Explora nuestros espacios:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          <img src="/img/habitacion.jpg" alt="Habitación" style={{ width: '100%', borderRadius: '10px' }} />
          <img src="/img/spa.jpg" alt="Spa" style={{ width: '100%', borderRadius: '10px' }} />
          <img src="/img/piscina.jpg" alt="Piscina" style={{ width: '100%', borderRadius: '10px' }} />
          <img src="/img/restaurante.jpg" alt="Restaurante" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
      </section>

      {/* Ubicación */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#d4af37' }}>Ubicación</h2>
        <p>Nos encontramos en una zona privilegiada, cerca de atracciones turísticas, centros comerciales y más.</p>
        <iframe
          title="Ubicación GranDestino"
          src="https://maps.google.com/maps?q=hotel%20de%20lujo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ borderRadius: '10px', marginTop: '20px' }}
          loading="lazy"
        />
      </section>

      {/* Testimonios */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#d4af37' }}>Testimonios</h2>
        <blockquote style={{ fontStyle: 'italic' }}>"Una experiencia inolvidable, el personal es increíble y el spa fue lo mejor del viaje." – Laura G., Colombia</blockquote>
        <blockquote style={{ fontStyle: 'italic', marginTop: '20px' }}>"La habitación era un sueño. Volveré sin dudarlo." – Carlos M., México</blockquote>
      </section>

      {/* Contacto */}
      <section>
        <h2 style={{ color: '#d4af37' }}>Contáctanos</h2>
        <p>📞 Teléfono: +57 300 123 4567</p>
        <p>📧 Correo: reservas@grandestinohotel.com</p>
        <p>📍 Dirección: Cra. 10 #25-50, Bogotá, Colombia</p>
      </section>
    </main>
  );
}

export default Inicio;
