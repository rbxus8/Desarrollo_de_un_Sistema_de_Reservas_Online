<?php
$host = 'db.lomxjlomykxdkodruqjm.supabase.co';
$port = '5432';
$dbname = 'postgres';
$user = 'postgres';
$password = 'Supercarrera.8'; // Reemplaza con tu contraseña real

try {
  $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;";
  $pdo = new PDO($dsn, $user, $password, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
  ]);

  echo "✅ Conexión exitosa a Supabase";

  // Ejemplo de consulta
  $stmt = $pdo->query("SELECT NOW()");
  $fila = $stmt->fetch(PDO::FETCH_ASSOC);
  print_r($fila);
} catch (PDOException $e) {
  echo "❌ Error de conexión: " . $e->getMessage();
}
