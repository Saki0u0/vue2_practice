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
      completedTodos() {
        return (this.todos || []).filter((todo) => todo.completed);
      },
    },
  }
</script>

<template>
  <h2 class="mb-4 text-lg font-semibold">Completed</h2>
  <ul class="w-full md:w-1/2">
    <TodoItem
      v-for="todo in completedTodos"
      :key="todo.id"
      :todo="todo"
      @toggle="$emit('toggle', $event)"
      @remove="$emit('remove', $event)"
    />
    <p v-if="completedTodos.length === 0" class="text-gray-400">
      No completed tasks.
    </p>
  </ul>
</template>

<style scoped></style>