<script setup>
  import { ref } from 'vue'
  import TodoItem from '@/components/TodoItem.vue';

  const props = defineProps({
    todos: {
      type: Array,
      required: true,
    }
  })

  const emit = defineEmits(['add', 'toggle'])

  const newTodo = ref('')

  const submit = () => {
    emit('add', newTodo.value)
    newTodo.value = ''
  }
</script>

<template>
  <h2 class="mb-4 text-lg font-semibold">Home</h2>
  <form @submit.prevent="submit" class="flex w-4/5 gap-2 mb-8 sm:w-full">
    <input
      v-model="newTodo"
      required type="text"
      placeholder="Add a new task"
      class="flex-1 border p-2 rounded"
    />
    <button class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer  hover:bg-blue-400 transition">
      Add Task
    </button>
  </form>
  <ul class="w-full md:w-1/2">
    <TodoItem
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      @toggle="emit('toggle', $event)"
      @remove="emit('remove', $event)"
    />
  </ul>
</template>

<style scoped></style>