export default class Todos {
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
