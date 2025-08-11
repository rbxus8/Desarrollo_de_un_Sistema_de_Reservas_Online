<?php
// Datos de conexión
define('DB_SERVER', 'bih72mnrhfueiq2dqjoa-mysql.services.clever-cloud.com');
define('DB_USERNAME', 'uo3du4bobhxnhlkc');
define('DB_PASSWORD', '2O0L4RsTaO8gpNs0MobF');
define('DB_NAME', 'bih72mnrhfueiq2dqjoa');

// Crear conexión
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Opcional: Configurar charset
$conn->set_charset("utf8mb4");
