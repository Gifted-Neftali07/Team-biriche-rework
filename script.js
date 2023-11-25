// Función para añadir tareas al DOM
function addTaskToDOM(task) {
    let div = document.createElement('div');
    div.textContent = task;
    document.getElementById('tasksList').appendChild(div);
}

// Función para enviar una tarea al servidor
function sendTaskToServer(task) {
    fetch('server.php', {
        method: 'POST',
        body: JSON.stringify({ task: task }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        addTaskToDOM(task); // Añadir la tarea al DOM después de enviarla al servidor
    });
}

// Manejador de eventos para el formulario
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let task = document.getElementById('taskInput').value;
    if (task) {
        sendTaskToServer(task); // Envía la tarea al servidor
        document.getElementById('taskInput').value = ''; // Limpia el campo de entrada
    }
});
