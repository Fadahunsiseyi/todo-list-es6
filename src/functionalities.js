

const todoInputContainer = document.querySelector('.todo-input-container')
const todoInput = document.querySelector('.todo-input')
const todoStorage = JSON.parse(localStorage.getItem('todos')) || []
const todoLists = document.querySelector('.todo-lists')
console.log(todoStorage, 'here!!!')

const displayTodo = () => {
    console.log('i have been displayed')
    if(!todoStorage) return;
    const arrangeTodos = todoStorage.sort((a, b) => a.index - b.index)
    console.log(arrangeTodos, 'arrange me')
    todoLists.innerHTML = ''
    arrangeTodos.forEach((todo) => {
        const theTodo =  `
        <li class="list list-${todo.index}">
          <span class="list-checks">
            <button class="btn check" data-btn="${todo.index}">
              <span class="empty-check active"><i class="fa-solid fa-square active"></i></span>
              <span class="checked"><i class="fa-solid fa-check"></i></span>
            </button>
            <input type="text" class="todo" value="${todo.desc}"/>
          </span>
          <button class="btn remove" data-remove="${todo.index}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </>
      `;
      todoLists.insertAdjacentHTML('beforeend', theTodo)
    })
}

todoInputContainer.addEventListener('submit', (e) => {
    console.log('clicked me!!')
    e.preventDefault()
    const todoInputValue = todoInput.value.trim()
    todoInput.value = ''
    if(!todoInputValue) return;
    const todoList = {
        desc: todoInputValue,
        completed: false,
        index: todoStorage.length,
    }
    todoStorage.push(todoList)
    localStorage.setItem('todos',JSON.stringify(todoStorage))
    displayTodo()
})