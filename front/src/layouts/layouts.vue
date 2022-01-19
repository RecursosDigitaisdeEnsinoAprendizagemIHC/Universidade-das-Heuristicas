<template>
  <div class="layout">
    <slot />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="postcss">
.layout {
  @apply bg-green-200;
  @apply my-10 mx-10;
  @apply border-opacity-100 border-8 border-black rounded-3xl;
  height: 90vh;
}
</style>