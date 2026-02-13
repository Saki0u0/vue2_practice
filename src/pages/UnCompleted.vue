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
      uncompletedTodos() {
        return (this.todos || []).filter((todo) => !todo.completed);
      },
    },
  }
</script>

<template>
  <h2 class="mb-4 text-lg font-semibold">UnCompleted</h2>
  <ul class="w-full md:w-1/2">
    <TodoItem
      v-for="todo in uncompletedTodos"
      :key="todo.id"
      :todo="todo"
      @toggle="$emit('toggle', $event)"
      @remove="$emit('remove', $event)"
    />
  </ul>
  <p v-if="uncompletedTodos.length === 0" class="text-gray-400">
    未完了のタスクはありません
  </p>
</template>

<style scoped></style>