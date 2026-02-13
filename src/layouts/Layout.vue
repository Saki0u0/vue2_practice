<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<template>
  <div class="flex h-screen flex-col">
    <Header />

    <div class="flex flex-1">
      <aside class="w-64 bg-gray-50">
        <Sidebar @navigate="$emit('navigate', $event)" />
      </aside>

      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped></style>