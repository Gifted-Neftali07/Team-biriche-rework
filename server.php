<?php
$tasksFile = 'tasks.txt'; // Archivo para almacenamiento de tareas

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $task = $data['task'] ?? '';

    if ($task) {
        file_put_contents($tasksFile, $task . "\n", FILE_APPEND); // Añadir tarea al archivo
        echo "Tarea agregada";
    }
} else {
    // Si no es una solicitud POST, asumimos que es GET y mostramos las tareas
    if (file_exists($tasksFile)) {
        echo file_get_contents($tasksFile);
    }
}
?>
