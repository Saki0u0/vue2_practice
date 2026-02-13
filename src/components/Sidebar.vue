<script></script>

<template>
  <nav class="p-6">
    <ul>
      <li @click="$emit('navigate', 'Home')" class="cursor-pointer mb-4 hover:text-gray-300">
        Home
      </li>

      <li @click="$emit('navigate', 'Completed')" class="cursor-pointer mb-4 hover:text-gray-300">
        Completed
      </li>

      <li @click="$emit('navigate', 'Active')" class="cursor-pointer hover:text-gray-300">
        Active
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>