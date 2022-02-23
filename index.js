class Todos {
  // Do NOT modify the constructor
  constructor() {
    // we don't capture any parameters here
    // we're defining an array of todos with two example todos
    this.todos = [
      {
        title: "Learn JavaScript",
        category: "work",
      },
      {
        title: "Meditate",
        category: "personal",
      },
    ];
  }

  getAll() {
    return this.todos;
  }

  getCount() {
    return this.todos.length;
  }

  add(title, category) {
    return this.todos.push({ title, category });
  }

  getWork() {
    return this.todos.filter((todo) => todo.category === "work");
  }

  getWorkCount() {
    return this.getWork().length;
  }

  getPersonal() {
    return this.todos.filter((todo) => todo.category === "personal");
  }

  getPersonalCount() {
    return this.getPersonal().length;
  }

  // TODO: define remaining instance methods
}

const form = document.querySelector("#todo-form");
const title = document.querySelector("#todo-title");
const category = document.querySelector("#todo-category");
const list = document.querySelector("#todo-list");
const filter = document.querySelector("#todo-filter");
const count = document.querySelector("#todo-count");

const render = (items, itemsCount) => {
  count.textContent = `(${itemsCount})`;
  list.innerHTML = items
    .map((todo) => `<li>${todo.title} [${todo.category}]</li>`)
    .join("");
};

const todos = new Todos();

try {
  render(todos.getAll(), todos.getCount());
} catch (error) {
  console.error(error);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    todos.add(title.value, category.value);
    render(todos.getAll(), todos.getCount());
  } catch (error) {
    console.error(error);
  }
  title.value = "";
});

filter.addEventListener("change", () => {
  try {
    if (filter.value === "work") {
      // filter work
      render(todos.getWork(), todos.getWorkCount());
    } else if (filter.value === "personal") {
      // filter personal
      render(todos.getPersonal(), todos.getPersonalCount());
    } else {
      // show all
      render(todos.getAll(), todos.getCount());
    }
  } catch (error) {
    console.error(error);
  }
});
