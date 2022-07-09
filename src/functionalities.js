const todoInputContainer = document.querySelector('.todo-input-container');
const todoInput = document.querySelector('.todo-input');
const todoLists = document.querySelector('.todo-lists');

const displayTodo = () => {
  const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];
  if (!todoStorage) return;
  const arrangeTodos = todoStorage.sort((a, b) => a.index - b.index);
  todoLists.innerHTML = '';
  arrangeTodos.forEach((todo) => {
    const {completed} = todo;
    const mark = !completed ? '' : 'active'
    const notMark = !completed ? 'active' : ''
    const strike = completed ? 'cross' : ''
    const theTodo = `
        <li class='list border-bottom list-${todo.index}'>
          <span class='list-checks'>
            <button class='btn check' data-btn='${todo.index}'>
              <span class='empty-check ${notMark}'><i class='fa-regular fa-square active'></i></span>
              <span class='checked ${mark}'><i class='fa-solid fa-check'></i></span>
            </button>
            <input type='text' data-desc=${todo.index} class='todo ${strike}' value='${todo.desc}'/>
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
  const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];
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
  const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];
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
  displayTodo()
});

todoLists.addEventListener('click', (e) => {
  const clicked = e.target.closest('.check')
  if(!clicked) return;
  const listNum = +clicked.dataset.btn
  const listEl = document.querySelector(`.list-${listNum}`)
  listEl.querySelector('.empty-check').classList.toggle('active');
  listEl.querySelector('.checked').classList.toggle('active');
  listEl.querySelector('.todo').classList.toggle('cross');
  const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];

  const compTask = todoStorage.find((todo) => todo.index === listNum);
  compTask.completed = !compTask.completed;
  localStorage.setItem('todos', JSON.stringify(todoStorage));
})
