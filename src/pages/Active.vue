<script>
  import TodoItem from '@/components/TodoItem.vue';

  export default {
    components: {
      TodoItem,
    },
    props: {
      todos: {
        type: Array,
        required: true,
      },
    },
    computed: {
      ActiveTodos() {
        return (this.todos || []).filter((todo) => !todo.completed);
      },
    },
  }
</script>

<template>
  <h2 class="mb-4 text-lg font-semibold">Active</h2>
  <ul class="w-full md:w-1/2">
    <TodoItem
      v-for="todo in ActiveTodos"
      :key="todo.id"
      :todo="todo"
      @toggle="$emit('toggle', $event)"
      @remove="$emit('remove', $event)"
    />
  </ul>
  <p v-if="ActiveTodos.length === 0" class="text-gray-400">
    No active tasks.
  </p>
</template>

<style scoped></style>