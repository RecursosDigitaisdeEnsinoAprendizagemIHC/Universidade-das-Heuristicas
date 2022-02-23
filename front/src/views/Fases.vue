<template>
  <sub-header :hideVoltar="true"></sub-header>

  <div class="container">
    <div class="flex flex-col w-full">
      <div class="bg relative">
        <!-- TODO <img src="../assets/imgs/fases-bg.png" alt="welcome-image" srcset="" /> -->
        <div class="flex justify-evenly mt-56 mb-10">
          <div
            v-for="fase of fasesList"
            :key="fase.idFase"
            class="rectangle p-10"
            @click="gotToFase(fase)"
          >
            <img
              v-if="jogador && jogador.pontuacaoTotal >= fase.minPontuacao"
              src="../assets/imgs/open-project.png"
              alt="open-project"
              srcset=""
            />
            <img
              v-if="jogador && jogador.pontuacaoTotal < fase.minPontuacao"
              src="../assets/imgs/closed-project.png"
              alt="closed-project"
              srcset=""
            />
          </div>
        </div>
        <score-card></score-card>
      </div>
      <div class="bg-white" style="height: 100px">
        <type-writer :speed="70" :text="text"></type-writer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref, onMounted } from 'vue'
import ScoreCard from '../components/ScoreCard.vue'
import { useStore } from '../store/index'
import { FasesInterface, JogadorInterface } from '../typings/Types'

export default defineComponent({
  components: { ScoreCard },
  name: 'Fases',

  setup() {
    const text = `Aqui você pode avaliar os projetos!\
    A cada projeto respondido corretamente você pode avançar pro próximo! Boa sorte e bons estudos!!`

    const fasesList = ref<FasesInterface[]>([])
    const store = useStore()

    let jogador = store.state.jogador

    onMounted(async () => {
      await store.dispatch({ type: 'getFases' })
      fasesList.value = store.state.fases
    })

    const gotToFase = (fase: FasesInterface) => {
      if (jogador && jogador.pontuacaoTotal < fase.minPontuacao) return false

      store.dispatch({ type: 'setCurrentFase', payload: fase })

      // TODO - rota pra pagina de fase
    }

    return { text, fasesList, jogador, gotToFase }
  },
})
</script>
<style scoped lang="postcss">
.bg {
  background-image: url('../assets/imgs/fases-bg.png');
}

.rectangle {
  @apply border-opacity-100 border-8 border-blue-800 rounded-3xl;
  @apply bg-white;
}
</style>
