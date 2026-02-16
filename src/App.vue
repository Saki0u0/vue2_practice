<script setup>
import { ref } from 'vue'
import Layout from './layouts/Layout.vue'

let id = 0;

const todos = ref([
  { id: id++, text: 'Learn Vue.js', completed: false },
  { id: id++, text: 'Build a to-do app', completed: false },
  { id: id++, text: 'Learn JavaScript', completed: false },
  { id: id++, text: 'Clean the house', completed: false},
])

const addTodo = (text) => {
  todos.value.push({ id: id++, text, completed: false })
}

const toggleTodo = (id) => {
  const todo = todos.value.find((todo) => todo.id === id)
  if (todo) todo.completed = !todo.completed
}

const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

</script>

<template>
  <Layout>
    <router-view v-slot="{ Component }">
      <component
        :is="Component"
        :todos="todos"
        @add="addTodo"
        @toggle="toggleTodo"
        @remove="removeTodo"
      />
    </router-view>
  </Layout>
</template>

<style scoped></style>
