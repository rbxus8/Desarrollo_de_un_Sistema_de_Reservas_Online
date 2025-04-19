<?php
require_once 'conexion.php'; // Asegúrate de usar el mismo archivo de conexión que en tu aplicación

// Prueba simple de conexión
echo "<h2>Prueba de Conexión</h2>";

if ($conn->ping()) {
    echo "<p style='color: green;'>✅ Conexión exitosa a MySQL</p>";
} else {
    echo "<p style='color: red;'>❌ Error de conexión: " . $conn->error . "</p>";
}

// Prueba de consulta
$sql = "SELECT 1+1 AS resultado";
$result = $conn->query($sql);

if ($result) {
    $row = $result->fetch_assoc();
    echo "<p>Prueba de consulta SQL: 1+1 = " . $row['resultado'] . "</p>";
    echo "<p style='color: green;'>✅ Consulta ejecutada correctamente</p>";
} else {
    echo "<p style='color: red;'>❌ Error en consulta: " . $conn->error . "</p>";
}

// Cerrar conexión
$conn->close();
