import "./style.css";

const taskContainer = document.querySelector(".todo-lists");

const todoTasks = [
  {
    description: "Wash the dishes",
    completed: false,
    index: 0,
  },
  {
    description: "Complete To Do list project",
    completed: false,
    index: 1,
  },
  {
    description: "Fix car",
    completed: false,
    index: 2,
  },
];

todoTasks.map((task, i) => {
  const markup = `<li class="todo-list border-bottom">${task.description}</li>`;
  taskContainer.insertAdjacentHTML("beforeend", markup);
});
