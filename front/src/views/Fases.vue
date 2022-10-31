<template>
  <sub-header v-on:openModal="openModal" :hideVoltar="true" :showLinks="true"></sub-header>

  <div class="container h-full">
    <div class="flex flex-col w-full">
      <div class="bg flex flex-col">
        <score-card></score-card>
        <div>
          <div class="flex justify-evenly mb-10" v-show="!faseStart">
            <div
              v-tippy="{ content: 'Projeto' }"
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
                class="w-10/12 m-auto md:w-3/4 fase-habilitada"
              />
              <img
                v-if="jogador && jogador.pontuacaoTotal < fase.minPontuacao"
                src="../assets/imgs/closed-project.png"
                alt="closed-project"
                srcset=""
                class="w-10/12 m-auto m-auto md:w-3/4 fase-desabilitada"
              />
            </div>
          </div>
          <pergunta-box v-show="faseStart" @close="close">
            <div
              v-show="faseIntro"
              class="flex flex-col h-full text-left text-blue-800"
            >
              <h3 class="mb-10">
                <strong>{{ currentFase.nome }}</strong>
              </h3>
              <p class="grow text-blue-800 break-line">
                {{ currentFase.descricao }}
              </p>
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
                v-tippy="{ content: 'Iniciar questões' }"
                @click="setPerguntas(currentFase.perguntas)"
              >
                Iniciar
              </button>
            </div>
            <pergunta
              v-show="!faseIntro"
              class="mb-10 pergunta-scroll"
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
    <modal-confirmacao v-on:closeModal="closeModal"  :open="isOpenModal"></modal-confirmacao>
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
import ModalConfirmacao from '../components/ModalConfirmation.vue'
import { useStore } from '../store/index'
import { FasesInterface, PerguntaInterface } from '../typings/Types'
import { shuffleArray } from '../utils/Utils'
import { useToast } from 'vue-toast-notification'

const FASE_INFINITA = -1

export default defineComponent({
  components: { PerguntaBox, Pergunta, Typewriter, SubHeader, ScoreCard, ModalConfirmacao},
  name: 'Fases',
    watch: {
    '$store.state.error': function() {
      this.$store.state.error
      this.$router.push('/alert-view')
      }
  },
  setup() {
    const text = 'Bem vindo a tela de projetos! Clique em um projeto desbloqueado acima e avance para as perguntas. \n A cada projeto respondido corretamente você pode avançar para o próximo! Boa sorte e bons estudos!!'
    const fasesList = ref<FasesInterface[]>([])
    const store = useStore()
    const router = useRouter()
    const $toast = useToast();
    const isPergunta = ref<boolean>(false)
    const currentFase = ref<FasesInterface | any>({})
    const faseIntro = ref<boolean>(false)
    const faseStart = ref<boolean>(false)
    const isOpenModal = ref<boolean>(false)

    const currentPergunta = ref<PerguntaInterface>()
    const perguntas = ref<PerguntaInterface[]>([])

    let jogador = store.state.jogador
    if (jogador == null) {
      jogador = store.getters.getJogador()
      if (!jogador) {
        router.push({ name: 'Home' })
      }

      store.commit({ type: 'setJogador', payload: { ...jogador } })
      jogador = store.state.jogador
    }

    onMounted(async () => {
      await store.dispatch({ type: 'getFases' })
      const fases = store.state.fases.map((fase, index, fases) => {
        fase.proxFasePontuacao = fases[index + 1]
          ? fases[index + 1].minPontuacao
          : FASE_INFINITA
        return fase
      })
      fasesList.value = fases
    })

    const gotToFase = (fase: FasesInterface) => {
      if (jogador && jogador.pontuacaoTotal < fase.minPontuacao) return false

      store.dispatch({ type: 'setCurrentFase', payload: fase })

      currentFase.value = store.state.currentFase

      faseIntro.value = true
      faseStart.value = true
    }

    const setPerguntas = (_perguntas: PerguntaInterface[]) => {
      $toast.success('Fase Iniciada!',{
        position: 'top-right'
      })
      perguntas.value = [...shuffleArray(_perguntas)]
      nextPergunta()
    }

    const openModal = () => {
      isOpenModal.value = true
    }

    const closeModal = () => {
      isOpenModal.value = false
    }

    const nextPergunta = () => {
      if (nextFase()) return false

      const newPergunta: PerguntaInterface | undefined = perguntas.value.shift()
      if (newPergunta) {
        currentPergunta.value = { ...newPergunta }
        faseIntro.value = false
        isPergunta.value = true
      } else {
        faseStart.value = false
      }
    }

    const close = () => {
      faseStart.value = false
    }

    const nextFase = () => {
      const fase = currentFase.value
      if (
        fase.proxFasePontuacao != FASE_INFINITA &&
        jogador &&
        jogador?.pontuacaoTotal >= fase.proxFasePontuacao
      ) {
        currentFase.value.proxFasePontuacao = FASE_INFINITA
        close()
        return true
      }

      return false
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
      close,
      openModal,
      isOpenModal,
      closeModal
    }
  },
})
</script>
<style scoped lang="postcss">
.bg {
  background-image: url('../assets/imgs/fases-bg.png');
}

.break-line {
  white-space: pre-wrap;
}

.pergunta-scroll {
  height: inherit;
  overflow-y: auto;
}

.rectangle {
  @apply border-opacity-100 border-8 border-blue-800 rounded-3xl;
  @apply bg-white;
  cursor: pointer;
}

.fase-habilitada:hover{
  opacity: 0.4;
}

.fase-desabilitada{
  opacity: 0.5;
}

.mt-20:hover{
  opacity: 0.4;
}
</style>
