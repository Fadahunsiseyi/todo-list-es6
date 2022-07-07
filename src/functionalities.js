

const todoInputContainer = document.querySelector('.todo-input-container')
const todoInput = document.querySelector('.todo-input')
const todoStorage = JSON.parse(localStorage.getItem('todos')) || []
console.log(todoStorage, 'here!!!')

todoInputContainer.addEventListener('submit', (e) => {
    console.log('clicked me!!')
    e.preventDefault()
    const todoInputValue = todoInput.value.trim()
    if(!todoInputValue) return;
    const todoList = {
        desc: todoInputValue,
        completed: false,
        index: todoStorage.length,
    }
    todoStorage.push(todoList)
    localStorage.setItem('todos',JSON.stringify(todoStorage))
})