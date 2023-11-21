

function testAddTaskToDOM() {
    let task = 'Test Task';
    addTaskToDOM(task);
    let tasksList = document.getElementById('tasksList');
    if (tasksList.children.length !== 1 || tasksList.children[0].textContent !== task) {
        console.error('Test failed');
    } else {
        console.log('Test passed');
    }
}

testAddTaskToDOM();