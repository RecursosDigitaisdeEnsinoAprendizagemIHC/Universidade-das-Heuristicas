<template>
  <div class="score-card">
    <div class="m-2">
      <h3 class="m-2">{{ jogador.nome }}</h3>
      <div class="flex">
        <div class="mr-4">
          <img
            v-if="jogador.imagemPersonagem == 'F'"
            src="../assets/imgs/avatar-feminino.png"
            alt="avatar-feminino"
          />
          <img
            v-else
            src="../assets/imgs/avatar-masculino.png"
            alt="avatar-masculino"
          />
        </div>
        <div class="flex flex-col">
          <span class="">PTS {{ jogador.pontuacaoTotal }}</span>
          <span class="">certas {{ jogador.questoesCertas }}</span>
          <span class="">tentadas {{ jogador.questoesTentadas }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from '@vue/runtime-core'
import { useStore } from '../store/index'
import { useRouter, useRoute } from 'vue-router'
import { JogadorInterface } from '../typings/Types'
import { ref } from 'vue'

export default defineComponent({
  name: 'ScoreCard',
  setup(props) {
    const store = useStore()

    const jogador = ref<JogadorInterface>(
      store.state.jogador as JogadorInterface
    )
    onUpdated(() => {})

    return { jogador }
  },
})
</script>
<style scoped lang="postcss">
.score-card {
  @apply bg-blue-800
      border
      rounded-lg
      absolute
      top-1
      right-1
      text-left;
}
</style>
