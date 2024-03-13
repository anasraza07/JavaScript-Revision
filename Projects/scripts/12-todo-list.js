const todoList = [{
    name: "make dinner",
    dueDate: '2020-02-12'
}, {
    name: "wash clothes",
    dueDate: '2024-12-11'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div> ${dueDate}</div>
        <button class="delete-todo-button" onclick="
            todoList.splice(${index}, 1);
            renderTodoList();
        ">Delete</button>
    `;
        todoListHTML += html;
    })

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
};


function addTodo() {
    const inputElement = document.querySelector('.js-todo-input');
    const name = inputElement.value;
    const dueDateElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateElement.value;

    todoList.push({
        name,
        dueDate,
    });
    console.log(todoList);

    inputElement.value = '';
    renderTodoList();
};