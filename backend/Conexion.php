<?php
$host = "localhost";
$dbname = "mi_db";
$username = "root";
$password = "";

$pdo = null;
$conexion_exitosa = false;

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $conexion_exitosa = true;
} catch (PDOException $e) {
  $conexion_exitosa = false;
}

// Verificación
if ($conexion_exitosa) {
  echo "✅ Conexión exitosa a la base de datos";
} else {
  echo "❌ Error al conectar con la base de datos";
}
