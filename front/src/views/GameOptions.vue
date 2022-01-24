<template>
  <p class="text-blue-800 text-base">Universidade das Heurísticas</p>

  <div class="container">
    <div class="flex w-full justify-around h-1/4 space-x-20">
      <div class="bg-option" @click="$router.push('/game-options')">
        <p>Jogar</p>
      </div>
      <div class="bg-option" @click="$router.push('/ranking')">
        <p>Ranking</p>
      </div>
      <div class="bg-option" @click="$router.push('/sobre-nos')">
        <p>Sobre<br />Nós</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="postcss">
.bg-option {
  @apply text-2xl bg-blue-800 text-white w-1/2 h-1/2;
  @apply flex items-center;
  @apply rounded-2xl cursor-pointer;
  @apply hover:animate-pulse hover:shadow-xl;
}
p {
  @apply m-auto;
}
</style>