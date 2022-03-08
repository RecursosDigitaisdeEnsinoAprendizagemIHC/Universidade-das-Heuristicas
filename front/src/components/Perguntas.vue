<template>
  <div class="flex items-end">
    <img
      class="rectangle p-10 shrink w-1/4 h-1/4"
      src="../assets/imgs/open-project.png"
      alt="open-project"
      srcset=""
    />
    <div class="pergunta ml-5 mr-2 grow">
      <div v-show="!isPergunta">
        <h3>{{ currentFase.nome }}</h3>
        <p>{{ currentFase.descricao }}</p>
        <button @click="setPerguntas(currentFase.perguntas)">OK</button>
      </div>
      <div v-show="isPergunta">
        <h3>{{ currentPergunta?.descricao }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from '@vue/runtime-core'
import { useStore } from '../store/index'
import {
  JogadorInterface,
  PerguntaInterface,
  FasesInterface,
} from '../typings/Types'
import { ref, PropType } from 'vue'

export default defineComponent({
  name: 'Perguntas',
  props: {
    currentFase: {
      type: Object as PropType<FasesInterface>,
      required: true,
      default: {},
    },
  },
  setup(props) {
    const store = useStore()
    const isPergunta = ref<boolean>(false)
    const currentFase = ref<FasesInterface>(props.currentFase)
    const perguntas = ref<PerguntaInterface[]>([])
    const currentPergunta = ref<PerguntaInterface>()

    onUpdated(() => {
      console.log(props.currentFase)
      currentFase.value = props.currentFase
    })

    const setPerguntas = (_perguntas: PerguntaInterface[]) => {
      perguntas.value = [..._perguntas]
      currentPergunta.value = perguntas.value.shift()
      isPergunta.value = true
    }

    return { isPergunta, currentFase, currentPergunta, setPerguntas }
  },
})
</script>
<style scoped lang="postcss">
.rectangle {
  @apply border-opacity-100 border-8 border-blue-800 rounded-3xl;
  @apply bg-white;
}

.pergunta {
  position: relative;
  height: 50vh;
  background: #fff;
  border-radius: 40px;
  padding: 24px;
  margin-bottom: 25px;
  text-align: center;
}

.pergunta:before {
  content: '';
  width: 0px;
  height: 0px;
  position: absolute;

  border-left: 32px solid #fff;

  border-right: 20px solid transparent;
  border-top: 20px solid #fff;

  border-bottom: 28px solid transparent;

  left: 32px;
  bottom: -45px;
}
</style>
