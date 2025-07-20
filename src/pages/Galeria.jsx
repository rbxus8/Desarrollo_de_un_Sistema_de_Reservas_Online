import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";

const secciones = [
  {
    titulo: "Habitaciones",
    descripcion: "Confort y elegancia en cada detalle.",
    imagenes: [
      { src: "/img/habitacion.jpg", alt: "Suite principal" },
      { src: "/img/habitacion-estandar-twin.jpg", alt: "Habitación Twin" },
      {
        src: "/img/NH_Coimbra_Dona_Inês_Room_Standard_River_View_General.jpg",
        alt: "Vista al río",
      },
      { src: "/img/habitacion-familiar.jpg", alt: "Habitación Familiar" },
    ],
  },
  {
    titulo: "Áreas Comunes",
    descripcion: "Espacios diseñados para el relax y la convivencia.",
    imagenes: [
      { src: "/img/lobby.jpg", alt: "Lobby moderno" },
      { src: "/img/gym.jpg", alt: "Gimnasio equipado" },
      { src: "/img/spa.jpg", alt: "Spa de lujo" },
      { src: "/img/bar.jpg", alt: "Bar con terraza" },
    ],
  },
  {
    titulo: "Eventos",
    descripcion: "Salones adaptables para bodas, reuniones y más.",
    imagenes: [
      { src: "/img/eventos.jpg", alt: "Evento corporativo" },
      { src: "/img/evento-social.jpg", alt: "Boda en jardín" },
      { src: "/img/conferencia.jpg", alt: "Salón de conferencias" },
    ],
  },
  {
    titulo: "Gastronomía",
    descripcion: "Una experiencia culinaria inigualable.",
    imagenes: [
      { src: "/img/restaurante.jpg", alt: "Restaurante gourmet" },
      { src: "/img/restaurante2.jpg", alt: "Chef en acción" },
      { src: "/img/plato.jpg", alt: "Plato de autor" },
    ],
  },
];

function Galeria() {
  return (
    <main className="px-4 py-20 max-w-7xl mx-auto space-y-24">
      <h2 className="text-center font-serif text-4xl mb-10">
        Galería de Espacios
      </h2>

      {secciones.map((sec, idx) => (
        <section key={idx}>
          <div className="text-center mb-6">
            <h3 className="text-3xl font-semibold text-gray-800">
              {sec.titulo}
            </h3>
            <p className="text-gray-500">{sec.descripcion}</p>
          </div>

          <Swiper
            modules={[Grid, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            grid={{ rows: 2, fill: "row" }}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1, grid: { rows: 1 } },
              640: { slidesPerView: 2, grid: { rows: 1 } },
              1024: { slidesPerView: 4, grid: { rows: 2 } },
            }}
            className="cursor-grab"
          >
            {sec.imagenes.map(({ src, alt }, i) => (
              <SwiperSlide
                key={i}
                className="relative overflow-hidden rounded-xl shadow-md group"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 text-center">
                  {alt}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}
    </main>
  );
}

export default Galeria;
