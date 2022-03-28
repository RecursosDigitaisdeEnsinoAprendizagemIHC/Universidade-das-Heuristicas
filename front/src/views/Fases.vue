<template>
  <sub-header :hideVoltar="true"></sub-header>

  <div class="container h-full">
    <div class="flex flex-col w-full">
      <div class="bg flex flex-col">
        <score-card></score-card>
        <div>
          <div class="flex justify-evenly mb-10" v-show="!faseStart">
            <div
              v-for="fase of fasesList"
              :key="fase.idFase"
              class="rectangle p-5"
              @click="gotToFase(fase)"
            >
              <img
                v-if="jogador && jogador.pontuacaoTotal >= fase.minPontuacao"
                src="../assets/imgs/open-project.png"
                alt="open-project"
                srcset=""
                class="w-10/12 m-auto md:w-3/4"
              />
              <img
                v-if="jogador && jogador.pontuacaoTotal < fase.minPontuacao"
                src="../assets/imgs/closed-project.png"
                alt="closed-project"
                srcset=""
                class="w-10/12 m-auto m-auto md:w-3/4"
              />
            </div>
          </div>
          <pergunta-box v-show="faseStart">
            <div
              v-show="faseIntro"
              class="flex flex-col h-full text-left text-blue-800"
            >
              <h3 class="mb-10">
                <strong>{{ currentFase.nome }}</strong>
              </h3>
              <p class="grow text-blue-800">{{ currentFase.descricao }}</p>
              <button
                class="
                  mt-20
                  p-5
                  rounded-lg
                  text-white
                  bg-blue-800
                  align-bottom
                  self-end
                "
                @click="setPerguntas(currentFase.perguntas)"
              >
                OK
              </button>
            </div>
            <pergunta
              v-show="!faseIntro"
              class="mb-10"
              :pergunta="currentPergunta"
              @resposta="nextPergunta"
            ></pergunta>
          </pergunta-box>
        </div>
      </div>

      <div class="bg-white white-bg" v-show="!faseStart">
        <type-writer :speed="70" :text="text"></type-writer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Pergunta from '../components/Pergunta.vue'
import PerguntaBox from '../components/PerguntaBox.vue'
import ScoreCard from '../components/ScoreCard.vue'
import SubHeader from '../components/SubHeader.vue'
import Typewriter from '../components/Typewriter.vue'
import { useStore } from '../store/index'
import { FasesInterface, PerguntaInterface } from '../typings/Types'
import { shuffleArray } from '../utils/Utils'

export default defineComponent({
  components: { PerguntaBox, Pergunta, Typewriter, SubHeader, ScoreCard },
  name: 'Fases',

  setup() {
    const text = `Aqui você pode avaliar os projetos!\
    A cada projeto respondido corretamente você pode avançar pro próximo! Boa sorte e bons estudos!!`

    const fasesList = ref<FasesInterface[]>([])
    const store = useStore()
    const router = useRouter()
    const isPergunta = ref<boolean>(false)
    const currentFase = ref<FasesInterface | any>({})
    const faseIntro = ref<boolean>(false)
    const faseStart = ref<boolean>(false)

    const currentPergunta = ref<PerguntaInterface>()
    const perguntas = ref<PerguntaInterface[]>([])

    let jogador = store.state.jogador
    if (jogador == null) {
      jogador = store.getters.getJogador()
      if (!jogador) {
        return router.push({ name: 'Home' })
      }

      store.commit({ type: 'setJogador', payload: { ...jogador } })
      jogador = store.state.jogador
    }

    onMounted(async () => {
      await store.dispatch({ type: 'getFases' })
      fasesList.value = store.state.fases
    })

    const gotToFase = (fase: FasesInterface) => {
      if (jogador && jogador.pontuacaoTotal < fase.minPontuacao) return false

      store.dispatch({ type: 'setCurrentFase', payload: fase })

      currentFase.value = store.state.currentFase

      faseIntro.value = true
      faseStart.value = true
    }

    const setPerguntas = (_perguntas: PerguntaInterface[]) => {
      perguntas.value = [...shuffleArray(_perguntas)]
      nextPergunta()
    }

    const nextPergunta = () => {
      const newPergunta: PerguntaInterface | undefined = perguntas.value.shift()
      if (newPergunta) {
        currentPergunta.value = { ...newPergunta }
        faseIntro.value = false
        isPergunta.value = true
      } else {
        faseStart.value = false
      }
    }

    return {
      text,
      fasesList,
      jogador,
      isPergunta,
      faseIntro,
      faseStart,
      currentFase,
      currentPergunta,
      gotToFase,
      setPerguntas,
      nextPergunta,
    }
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
