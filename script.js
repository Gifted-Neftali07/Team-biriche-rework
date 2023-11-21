// Definir la función para enviar una tarea al servidor
function sendTaskToServer(task) {
    // Hacer una petición fetch al servidor, específicamente al archivo server.php
    fetch('server.php', {
        method: 'POST', // Método HTTP POST para enviar datos
        body: JSON.stringify({ task: task }), // Convertir el objeto de la tarea a una cadena JSON
        headers: {
            'Content-Type': 'application/json' // Establecer el tipo de contenido de la solicitud como JSON
        }
    })
    .then(response => response.text()) // Convertir la respuesta del servidor a texto
    .then(data => console.log(data)); // Imprimir la respuesta en la consola del navegador
}
// Añadir un escuchador de eventos al formulario con ID 'taskForm'
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto de envío del formulario

    // Obtener el valor del input con ID 'taskInput'
    let task = document.getElementById('taskInput').value;

    // Verificar si el input no está vacío
    if (task) {
        addTaskToDOM(task); // Llamar a una función para añadir la tarea al DOM
        sendTaskToServer(task); // Llamar a la función para enviar la tarea al servidor
        document.getElementById('taskInput').value = ''; // Limpiar el input después de enviar
    }
});
