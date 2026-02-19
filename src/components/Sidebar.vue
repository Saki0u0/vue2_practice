<script setup></script>

<template>
  <nav class="p-6 flex flex-col">
      <router-link to="/" class="cursor-pointer mb-4 hover:text-gray-300">
        Home
      </router-link>

      <router-link to="/completed" class="cursor-pointer mb-4 hover:text-gray-300">
        Completed
      </router-link>

      <router-link to="/active" class="cursor-pointer hover:text-gray-300">
        Active
      </router-link>
  </nav>
</template>

<style scoped></style>
