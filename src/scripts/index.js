new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    todos: [
      { text: 'hello 1.'},
      { text: 'world'}
    ]
  },
  methods: {
    addTodo: function () {
      this.todos.push({
        text: this.message
      });
      this.message = '';
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1);
    }
  }
});
