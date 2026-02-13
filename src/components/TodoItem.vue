<script>
  import { Trash2 } from 'lucide-vue-next';

  export default {

    components: {
      Trash2,
    },

    props: {
      todo: {
        type: Object,
        required: true,
      }
    },
  }
</script>

<template>
  <li class="flex items-center mb-5 justify-between pb-2">
    <div>
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="() => { $emit('toggle', todo.id) }"
        class="mr-2 cursor-pointer"
      />
      <span :class="{ 'line-through text-gray-400': todo.completed }">
        {{ todo.text }}
      </span>
    </div>
    <button
      @click="$emit('remove', todo.id)" class="cursor-pointer"
    >
      <Trash2 class="w-5 h-5 text-red-500"/>
    </button>
  </li>
</template>

<style>
</style>