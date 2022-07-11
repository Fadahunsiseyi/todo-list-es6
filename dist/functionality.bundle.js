(self["webpackChunktodo_list_es6"] = self["webpackChunktodo_list_es6"] || []).push([["functionality"],{

/***/ "./src/functionalities.js":
/*!********************************!*\
  !*** ./src/functionalities.js ***!
  \********************************/
/***/ (() => {

const todoInputContainer = document.querySelector('.todo-input-container');
const todoInput = document.querySelector('.todo-input');
const todoLists = document.querySelector('.todo-lists');
const clearBtn = document.querySelector('.clear-btn');

const displayTodo = () => {
  const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];
  if (!todoStorage) return;
  const arrangeTodos = todoStorage.sort((a, b) => a.index - b.index);
  todoLists.innerHTML = '';
  arrangeTodos.forEach((todo) => {
    const { completed } = todo;
    const mark = !completed ? '' : 'active';
    const notMark = !completed ? 'active' : '';
    const strike = completed ? 'cross' : '';
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
  const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];
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
  displayTodo();
});

todoLists.addEventListener('click', (e) => {
  const clicked = e.target.closest('.check');
  if (!clicked) return;
  const listNum = +clicked.dataset.btn;
  const listEl = document.querySelector(`.list-${listNum}`);
  listEl.querySelector('.empty-check').classList.toggle('active');
  listEl.querySelector('.checked').classList.toggle('active');
  listEl.querySelector('.todo').classList.toggle('cross');
  const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];

  const compTask = todoStorage.find((todo) => todo.index === listNum);
  compTask.completed = !compTask.completed;
  localStorage.setItem('todos', JSON.stringify(todoStorage));
});

clearBtn.addEventListener('click', () => {
  const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];
  const filteredTask = todoStorage.filter((todo) => todo.completed === false);
  const fixIndex = [];
  filteredTask.forEach((task, i) => {
    task.index = i;
    fixIndex.push(task);
  });

  localStorage.setItem('todos', JSON.stringify(fixIndex));
  displayTodo();
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/functionalities.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25hbGl0eS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQSxrREFBa0QsV0FBVztBQUM3RCx5Q0FBeUMsUUFBUTtBQUNqRCxxQ0FBcUMsS0FBSztBQUMxQztBQUNBLDJDQUEyQyxZQUFZLGNBQWMsT0FBTyxXQUFXLFVBQVU7QUFDakc7QUFDQSxvREFBb0QsV0FBVztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsUUFBUTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1lczYvLi9zcmMvZnVuY3Rpb25hbGl0aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvZG9JbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWlucHV0LWNvbnRhaW5lcicpO1xyXG5jb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pbnB1dCcpO1xyXG5jb25zdCB0b2RvTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0cycpO1xyXG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idG4nKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XHJcbiAgaWYgKCF0b2RvU3RvcmFnZSkgcmV0dXJuO1xyXG4gIGNvbnN0IGFycmFuZ2VUb2RvcyA9IHRvZG9TdG9yYWdlLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcclxuICB0b2RvTGlzdHMuaW5uZXJIVE1MID0gJyc7XHJcbiAgYXJyYW5nZVRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xyXG4gICAgY29uc3QgbWFyayA9ICFjb21wbGV0ZWQgPyAnJyA6ICdhY3RpdmUnO1xyXG4gICAgY29uc3Qgbm90TWFyayA9ICFjb21wbGV0ZWQgPyAnYWN0aXZlJyA6ICcnO1xyXG4gICAgY29uc3Qgc3RyaWtlID0gY29tcGxldGVkID8gJ2Nyb3NzJyA6ICcnO1xyXG4gICAgY29uc3QgdGhlVG9kbyA9IGBcclxuICAgICAgICA8bGkgY2xhc3M9J2xpc3QgYm9yZGVyLWJvdHRvbSBsaXN0LSR7dG9kby5pbmRleH0nPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9J2xpc3QtY2hlY2tzJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnRuIGNoZWNrJyBkYXRhLWJ0bj0nJHt0b2RvLmluZGV4fSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2VtcHR5LWNoZWNrICR7bm90TWFya30nPjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXNxdWFyZSBhY3RpdmUnPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NoZWNrZWQgJHttYXJrfSc+PGkgY2xhc3M9J2ZhLXNvbGlkIGZhLWNoZWNrJz48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGRhdGEtZGVzYz0ke3RvZG8uaW5kZXh9IGNsYXNzPSd0b2RvICR7c3RyaWtlfScgdmFsdWU9JyR7dG9kby5kZXNjfScvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnRuIHJlbW92ZScgZGF0YS1yZW1vdmU9JyR7dG9kby5pbmRleH0nPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz0nZmEtc29saWQgZmEtdHJhc2gtY2FuJz48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgYDtcclxuICAgIHRvZG9MaXN0cy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoZVRvZG8pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxudG9kb0lucHV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRvZG9TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XHJcbiAgY29uc3QgdG9kb0lucHV0VmFsdWUgPSB0b2RvSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gIHRvZG9JbnB1dC52YWx1ZSA9ICcnO1xyXG4gIGlmICghdG9kb0lucHV0VmFsdWUpIHJldHVybjtcclxuICBjb25zdCB0b2RvTGlzdCA9IHtcclxuICAgIGRlc2M6IHRvZG9JbnB1dFZhbHVlLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGluZGV4OiB0b2RvU3RvcmFnZS5sZW5ndGgsXHJcbiAgfTtcclxuICB0b2RvU3RvcmFnZS5wdXNoKHRvZG9MaXN0KTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvU3RvcmFnZSkpO1xyXG4gIGRpc3BsYXlUb2RvKCk7XHJcbn0pO1xyXG5cclxudG9kb0xpc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBjb25zdCB0b2RvU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xyXG4gIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudG9kbycpO1xyXG4gIGlmICghY2xpY2tlZCkgcmV0dXJuO1xyXG4gIGNsaWNrZWQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0TnVtID0gK2NsaWNrZWQuZGF0YXNldC5kZXNjO1xyXG4gICAgY29uc3QgZmluZFRvZG8gPSB0b2RvU3RvcmFnZS5maW5kKCh0b2RvKSA9PiB0b2RvLmluZGV4ID09PSBsaXN0TnVtKTtcclxuICAgIGZpbmRUb2RvLmRlc2MgPSBjbGlja2VkLnZhbHVlLnRyaW0oKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9TdG9yYWdlKSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxudG9kb0xpc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdG9kb1N0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB8fCBbXTtcclxuICBjb25zdCBjbGlja2VkID0gZS50YXJnZXQuY2xvc2VzdCgnLnJlbW92ZScpO1xyXG4gIGlmICghY2xpY2tlZCkgcmV0dXJuO1xyXG4gIGNvbnN0IGxpc3ROdW0gPSArY2xpY2tlZC5kYXRhc2V0LnJlbW92ZTtcclxuICBjb25zdCBmaWx0ZXJlZFRvZG8gPSB0b2RvU3RvcmFnZS5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaW5kZXggIT09IGxpc3ROdW0pO1xyXG4gIGNvbnN0IG5ld1RvZG8gPSBbXTtcclxuICBmaWx0ZXJlZFRvZG8uZm9yRWFjaCgoblRvZG8sIGkpID0+IHtcclxuICAgIG5Ub2RvLmluZGV4ID0gaTtcclxuICAgIG5ld1RvZG8ucHVzaChuVG9kbyk7XHJcbiAgfSk7XHJcbiAgZS50YXJnZXQuY2xvc2VzdCgnLmxpc3QnKS5yZW1vdmUoKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShuZXdUb2RvKSk7XHJcbiAgZGlzcGxheVRvZG8oKTtcclxufSk7XHJcblxyXG50b2RvTGlzdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2hlY2snKTtcclxuICBpZiAoIWNsaWNrZWQpIHJldHVybjtcclxuICBjb25zdCBsaXN0TnVtID0gK2NsaWNrZWQuZGF0YXNldC5idG47XHJcbiAgY29uc3QgbGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3QtJHtsaXN0TnVtfWApO1xyXG4gIGxpc3RFbC5xdWVyeVNlbGVjdG9yKCcuZW1wdHktY2hlY2snKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICBsaXN0RWwucXVlcnlTZWxlY3RvcignLmNoZWNrZWQnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICBsaXN0RWwucXVlcnlTZWxlY3RvcignLnRvZG8nKS5jbGFzc0xpc3QudG9nZ2xlKCdjcm9zcycpO1xyXG4gIGNvbnN0IHRvZG9TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XHJcblxyXG4gIGNvbnN0IGNvbXBUYXNrID0gdG9kb1N0b3JhZ2UuZmluZCgodG9kbykgPT4gdG9kby5pbmRleCA9PT0gbGlzdE51bSk7XHJcbiAgY29tcFRhc2suY29tcGxldGVkID0gIWNvbXBUYXNrLmNvbXBsZXRlZDtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvU3RvcmFnZSkpO1xyXG59KTtcclxuXHJcbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XHJcbiAgY29uc3QgZmlsdGVyZWRUYXNrID0gdG9kb1N0b3JhZ2UuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xyXG4gIGNvbnN0IGZpeEluZGV4ID0gW107XHJcbiAgZmlsdGVyZWRUYXNrLmZvckVhY2goKHRhc2ssIGkpID0+IHtcclxuICAgIHRhc2suaW5kZXggPSBpO1xyXG4gICAgZml4SW5kZXgucHVzaCh0YXNrKTtcclxuICB9KTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoZml4SW5kZXgpKTtcclxuICBkaXNwbGF5VG9kbygpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9