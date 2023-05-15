function createTodoTable(todos) {
    const tableBody = document.getElementById('todoTableBody');
    let completedCount = 0; // Counter for completed todos

    todos.forEach(todo => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        const titleCell = document.createElement('td');
        const completedCell = document.createElement('td');

        idCell.textContent = todo.id;
        titleCell.textContent = todo.title;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;

        if (!todo.completed) {
            checkbox.disabled = false; // Enable checkbox for incomplete tasks
        } else {
            checkbox.disabled = true; // Disable checkbox for completed tasks
            completedCount++; // Increment the counter for completed tasks
        }
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                completedCount++; // Increment the counter when a task is marked as completed
            } else {
                completedCount--; // Decrement the counter when a task is marked as incomplete
            }

            if (completedCount % 5 === 0) {
                setTimeout(function(){alert(`Congrats. ${completedCount-90} Tasks have been Successfully Completed`);},300);
            }
        });

        completedCell.appendChild(checkbox);
        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(completedCell);
        tableBody.appendChild(row);
    });
}

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        createTodoTable(todos);
    })
    .catch(error => {
        console.log('Error fetching todos:', error);
    });

var mainpage = () =>{window.location.href = "home.html"};  

var signout = () =>{window.location.href = "index.html"};