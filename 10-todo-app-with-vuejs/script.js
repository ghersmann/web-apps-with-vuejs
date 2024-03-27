// Todo App with Vue.JS

Vue.createApp({
  data() {
    return {
      todos: [
        { id: 1, description: "Buy Coffee", done: false },
        { id: 2, description: "Invite people for Coffee", done: false },
      ],
      currentDescription: "",
      filter: "all",
      disableAddBtn: true,
    };
  },

  methods: {
    addTodo() {
      if (this.isValidDescription && this.duplicateCheck) {
        this.todos.push({
          description: this.currentDescription,
          done: false,
          id: Date.now(),
        });
        this.currentDescription = "";
      } else {
        window.alert("No empty ToDo's please.");
      }
    },

    deleteSingleTodo(index) {
      this.todos.splice(index, 1);
    },

    checkText() {
      if (this.isValidDescription && this.duplicateCheck) {
        this.disableAddBtn = false;
      } else {
        this.disableAddBtn = true;
      }
    },
  },

  computed: {
    duplicateCheck() {
      for (todo of this.todos) {
        if (
          this.currentDescription.toLowerCase() ===
          todo.description.toLowerCase()
        ) {
          return false;
        }
      }
      return true;
    },

    isValidDescription() {
      if (this.currentDescription.trim().length >= 5) {
        return true;
      } else {
        return false;
      }
    },

    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "open") {
        return this.todos.filter((todo) => todo.done === false);
      } else {
        return this.todos.filter((todo) => todo.done === true);
      }
    },
  },
}).mount("#app");
