-- Tabla usuarios
CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    telefono VARCHAR(20),
    contrasena VARCHAR(255),
    rol ENUM('cliente', 'administrador') DEFAULT 'cliente',
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla habitaciones
CREATE TABLE habitaciones (
    id_habitacion INT PRIMARY KEY AUTO_INCREMENT,
    numero_habitacion VARCHAR(10) UNIQUE,
    tipo ENUM('individual', 'doble', 'suite', 'familiar'),
    descripcion TEXT,
    precio_noche DECIMAL(10,2),
    estado ENUM('disponible', 'ocupada', 'mantenimiento') DEFAULT 'disponible',
    capacidad INT
);

-- Tabla reservas
CREATE TABLE reservas (
    id_reserva INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_habitacion INT,
    fecha_inicio DATE,
    fecha_fin DATE,
    estado ENUM('pendiente', 'confirmada', 'cancelada', 'finalizada') DEFAULT 'pendiente',
    fecha_reserva DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_habitacion) REFERENCES habitaciones(id_habitacion)
);

-- Tabla pagos
CREATE TABLE pagos (
    id_pago INT PRIMARY KEY AUTO_INCREMENT,
    id_reserva INT,
    monto DECIMAL(10,2),
    metodo_pago ENUM('tarjeta', 'efectivo', 'transferencia'),
    estado ENUM('pendiente', 'pagado', 'fallido') DEFAULT 'pendiente',
    fecha_pago DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_reserva) REFERENCES reservas(id_reserva)
);

-- Tabla servicios_adicionales
CREATE TABLE servicios_adicionales (
    id_servicio INT PRIMARY KEY AUTO_INCREMENT,
    nombre_servicio VARCHAR(100),
    descripcion TEXT,
    precio DECIMAL(10,2)
);

-- Tabla reserva_servicio
CREATE TABLE reserva_servicio (
    id_reserva INT,
    id_servicio INT,
    cantidad INT DEFAULT 1,
    PRIMARY KEY (id_reserva, id_servicio),
    FOREIGN KEY (id_reserva) REFERENCES reservas(id_reserva),
    FOREIGN KEY (id_servicio) REFERENCES servicios_adicionales(id_servicio)
);
