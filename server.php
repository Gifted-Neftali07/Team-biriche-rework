<?php
// Por simplificación, las tareas se almacenan en un array
// En una implementación real, aquí se conectaría con una base de datos
$tasks = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $task = $_POST['task'] ?? '';
    if ($task) {
        $tasks[] = $task;
        echo "Tarea agregada";
    }
} else {
    foreach ($tasks as $task) {
        echo $task . "<br>";
    }
}
?>