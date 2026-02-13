<script>
import Layout from './layouts/Layout.vue'

import Home from './pages/Home.vue'
import Completed from './pages/Completed.vue'
import Active from './pages/Active.vue'

let id = 0;

export default {
  components: {
    Layout,
  },

  data() {
    return {
      currentView: 'Home',
      todos: [
        { id: id++, text: 'Learn Vue.js', completed: false },
        { id: id++, text: 'Build a to-do app', completed: false },
        { id: id++, text: 'Learn JavaScript', completed: false },
        { id: id++, text: 'Clean the house', completed: false},
      ],
    }
  },

  computed: {
    viewComponent() {
      return {
        Home,
        Completed,
        Active
      }[this.currentView]
    }
  },

  methods: {
    navigate(view) {
      this.currentView = view
    },

    addTodo(text) {
      this.todos.push({ id: id++, text, completed: false })
    },

    toggleTodo(id) {
      const todo = this.todos.find((t) => t.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },

    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
  }
}
</script>

<template>
  <Layout @navigate="navigate">
    <component
      :is="viewComponent"
      :todos="todos"
      @add="addTodo"
      @toggle="toggleTodo"
      @remove="removeTodo"
    />
  </Layout>
</template>

<style scoped></style>
