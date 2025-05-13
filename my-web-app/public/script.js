document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Load todos from localStorage
    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => addTodoToDOM(todo));
    };

    // Save todos to localStorage
    const saveTodos = () => {
        const todos = Array.from(todoList.children).map(li => li.firstChild.textContent);
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    // Add todo to DOM
    const addTodoToDOM = (todoText) => {
        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
            saveTodos();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    };

    // Handle form submission
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodoToDOM(todoText);
            saveTodos();
            todoInput.value = '';
        }
    });

    loadTodos();
});
