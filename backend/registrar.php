<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

include 'conexion.php'; // aquí creas $pdo

$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Validar que existan todos los datos
    if (
        !isset($data["nombre"]) ||
        !isset($data["apellido"]) ||
        !isset($data["email"]) ||
        !isset($data["telefono"]) ||
        !isset($data["password"])
    ) {
        echo json_encode(["error" => "Faltan datos requeridos"]);
        exit;
    }

    $nombre     = trim($data["nombre"]);
    $apellido   = trim($data["apellido"]);
    $email      = trim($data["email"]);
    $telefono   = trim($data["telefono"]);
    $contrasena = trim($data["password"]); // Cambié para que coincida con React

    // Validaciones básicas
    if (empty($nombre) || strlen($nombre) < 4) {
        echo json_encode(["error" => "Nombre no válido"]);
        exit;
    }
    if (empty($apellido) || strlen($apellido) < 4) {
        echo json_encode(["error" => "Apellido no válido"]);
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["error" => "Email no válido"]);
        exit;
    }
    if (!preg_match('/^\+?[0-9\s\(\)-]{7,15}$/', $telefono)) {
        echo json_encode(["error" => "Teléfono no válido"]);
        exit;
    }
    if (empty($contrasena) || strlen($contrasena) < 8 || !preg_match('/[A-Z]/', $contrasena) || !preg_match('/[0-9]/', $contrasena)) {
        echo json_encode(["error" => "Contraseña no válida"]);
        exit;
    }

    $hash = password_hash($contrasena, PASSWORD_DEFAULT);

    try {
        $sql = "INSERT INTO usuarios (nombre, apellido, email, telefono, contrasena) 
                VALUES (:nombre, :apellido, :email, :telefono, :contrasena)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':nombre'     => $nombre,
            ':apellido'   => $apellido,
            ':email'      => $email,
            ':telefono'   => $telefono,
            ':contrasena' => $hash
        ]);

        echo json_encode(["mensaje" => "Usuario registrado correctamente"]);
    } catch (PDOException $e) {
        echo json_encode(["error" => $e->getMessage()]);
    }
}
