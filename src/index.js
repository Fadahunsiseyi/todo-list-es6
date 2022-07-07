import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

const todoLists = document.querySelector('.todo-lists')
const todoStorage = JSON.parse(localStorage.getItem('todos')) || []


window.addEventListener('load', (e) => {
    if(!todoStorage) return;
    const arrangeTodos = todoStorage.sort((a, b) => a.index - b.index)
    console.log(arrangeTodos, 'arrange me')
    todoLists.innerHTML = ''
    arrangeTodos.forEach((todo) => {
        const theTodo =  `
        <li class="list border-bottom list-${todo.index}">
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
})

