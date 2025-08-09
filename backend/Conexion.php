<?php
$host = "localhost";
$dbname = "mi_db";
$username = "root";
$password = "";

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo json_encode([
    "error" => "Error de conexión a la base de datos",
    "detalle" => $e->getMessage()
  ]);
  exit;
}
