<script setup>
  import { computed } from 'vue'
  import TodoItem from '@/components/TodoItem.vue';

  const props = defineProps({
    todos: {
      type: Array,
      required: true,
    }
  })

  const emit = defineEmits(['add','toggle','remove'])

  const activeTodos = computed(() => {
    return (props.todos || []).filter((todo) => !todo.completed)
  })
</script>

<template>
  <h2 class="mb-4 text-lg font-semibold">Active</h2>
  <ul class="w-full md:w-1/2">
    <TodoItem
      v-for="todo in activeTodos"
      :key="todo.id"
      :todo="todo"
      @toggle="emit('toggle', $event)"
      @remove="emit('remove', $event)"
    />
  </ul>
  <p v-if="activeTodos.length === 0" class="text-gray-400">
    No active tasks.
  </p>
</template>

<style scoped></style>