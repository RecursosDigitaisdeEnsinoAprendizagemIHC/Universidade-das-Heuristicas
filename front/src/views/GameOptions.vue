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
<script lang="ts">
import { computed, ref, defineComponent } from '@vue/runtime-core'
import { useStore } from '../store/index'

export default defineComponent({
  name: 'GameOptions',
  setup() {
    const store = useStore()
    const participante = {}
    console.log(store.state.participante)
    if (store.state.participante == null) {
      // TODO - prompt telinha, salvar nome e avatar
      store.commit({ type: 'createParticipante', ...participante })
    }
    console.log(store.state.participante)
    const rankingList = ref<any[]>()

    return {}
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
