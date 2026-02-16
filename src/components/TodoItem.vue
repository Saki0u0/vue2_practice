<script setup>
  import { Trash2 } from 'lucide-vue-next';

  const props = defineProps({
    todo: {
      type: Object,
      required: true,
    },
  })

  const emit = defineEmits(['toggle', 'remove'])

  const onToggle = () => {
    emit('toggle',  props.todo.id)
  }

  const onRemove = () => {
    emit('remove', props.todo.id)
  }
</script>

<template>
  <li class="flex items-center mb-5 justify-between pb-2">
    <div>
      <input
        type="checkbox"
        :checked="props.todo.completed"
        @change="onToggle"
        class="mr-2 cursor-pointer"
      />
      <span :class="{ 'line-through text-gray-400': todo.completed }">
        {{ todo.text }}
      </span>
    </div>
    <button
      @click="onRemove"
      class="cursor-pointer"
    >
      <Trash2 class="w-5 h-5 text-red-500"/>
    </button>
  </li>
</template>

<style scoped></style>