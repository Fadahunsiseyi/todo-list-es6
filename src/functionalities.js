const todoInputContainer = document.querySelector('.todo-input-container');
const todoInput = document.querySelector('.todo-input');
const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];
const todoLists = document.querySelector('.todo-lists');

const displayTodo = () => {
  if (!todoStorage) return;
  const arrangeTodos = todoStorage.sort((a, b) => a.index - b.index);
  todoLists.innerHTML = '';
  arrangeTodos.forEach((todo) => {
    const theTodo = `
        <li class='list border-bottom list-${todo.index}'>
          <span class='list-checks'>
            <button class='btn check' data-btn='${todo.index}'>
              <span class='empty-check active'><i class='fa-solid fa-square active'></i></span>
              <span class='checked'><i class='fa-solid fa-check'></i></span>
            </button>
            <input type='text' data-desc=${todo.index} class='todo' value='${todo.desc}'/>
          </span>
          <button class='btn remove' data-remove='${todo.index}'>
            <i class='fa-solid fa-trash-can'></i>
          </button>
        </>
      `;
    todoLists.insertAdjacentHTML('beforeend', theTodo);
  });
};

todoInputContainer.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoInputValue = todoInput.value.trim();
  todoInput.value = '';
  if (!todoInputValue) return;
  const todoList = {
    desc: todoInputValue,
    completed: false,
    index: todoStorage.length,
  };
  todoStorage.push(todoList);
  localStorage.setItem('todos', JSON.stringify(todoStorage));
  displayTodo();
});

todoLists.addEventListener('click', (e) => {
  const clicked = e.target.closest('.todo');
  if (!clicked) return;
  clicked.addEventListener('keyup', () => {
    const listNum = +clicked.dataset.desc;
    const findTodo = todoStorage.find((todo) => todo.index === listNum);
    findTodo.desc = clicked.value.trim();
    localStorage.setItem('todos', JSON.stringify(todoStorage));
  });
});

todoLists.addEventListener('click', (e) => {
  e.preventDefault();
  const clicked = e.target.closest('.remove');
  if (!clicked) return;
  const listNum = +clicked.dataset.remove;
  const filteredTodo = todoStorage.filter((todo) => todo.index !== listNum);
  const newTodo = [];
  filteredTodo.forEach((nTodo, i) => {
    nTodo.index = i;
    newTodo.push(nTodo);
  });
  e.target.closest('.list').remove();
  localStorage.setItem('todos', JSON.stringify(newTodo));
});
