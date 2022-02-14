<template>
  <p class="text-blue-800 text-base">Universidade das Heurísticas</p>

  <div class="container">
    <div class="flex w-full justify-around h-1/4 space-x-20">
      <div class="bg-option" @click="openPopUp">
        <p>Jogar</p>
      </div>
      <div class="bg-option" @click="$router.push('/ranking')">
        <p>Ranking</p>
      </div>
      <div class="bg-option" @click="$router.push('/sobre-nos')">
        <p>Sobre<br />Nós</p>
      </div>
    </div>
    <avatar-pop-up :jogar="isJogar"></avatar-pop-up>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import AvatarPopUp from '../components/AvatarPopUp.vue'
import { useStore } from '../store/index'

export default defineComponent({
  components: { AvatarPopUp },
  name: 'GameOptions',
  setup() {
    const store = useStore()
    const isJogar = ref<boolean>(false)

    const openPopUp = () => {
      isJogar.value = true
    }

    return { isJogar, openPopUp }
  },
})
</script>
<style scoped lang="postcss">
.bg-option {
  @apply text-2xl bg-blue-800 text-white;
  @apply flex items-center;
  @apply rounded-2xl cursor-pointer;
  @apply hover:animate-pulse hover:shadow-xl;
  transform: rotate(45deg);
  p {
    @apply m-auto;
    transform: rotate(-45deg);
  }

  height: 200px;
  width: 200px;
}
</style>
