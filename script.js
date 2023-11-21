function sendTaskToServer(task) {
    fetch('server.php', {
        method: 'POST',
        body: JSON.stringify({ task: task }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log(data));
}

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let task = document.getElementById('taskInput').value;
    if (task) {
        addTaskToDOM(task);
        sendTaskToServer(task);
        document.getElementById('taskInput').value = '';
    }
});

