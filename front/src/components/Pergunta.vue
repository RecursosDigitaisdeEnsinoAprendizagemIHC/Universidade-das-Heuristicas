<template>
  <div v-if="!isFeedback">
    <div v-if="eMultiplaEscolha" class="flex flex-col h-full text-left">
      <h2>{{ pergunta.descricao }}</h2>
      <br />
      <template v-if="hasImage">
        <img :src="getImage(pergunta.imagem)" :alt="pergunta.descricao" />
      </template>
      <br />
      <input type="radio" name="resposta" value="1" v-model="respostaModel" />
      {{ respostaMultiRef?.descricaoOpcao1 }}
      <input type="radio" name="resposta" value="2" v-model="respostaModel" />
      {{ respostaMultiRef?.descricaoOpcao2 }}
      <input type="radio" name="resposta" value="3" v-model="respostaModel" />
      {{ respostaMultiRef?.descricaoOpcao3 }}
      <input type="radio" name="resposta" value="4" v-model="respostaModel" />
      {{ respostaMultiRef?.descricaoOpcao4 }}

      <button @click="checkResposta(respostaMultiRef, respostaModel)">
        OK
      </button>
    </div>
    <div v-else class="flex flex-col h-full">
      <h2 class="mb-10">
        <strong>Avalie a frase seguinte como correta ou incorreta:</strong>
      </h2>
      <br />
      <template v-if="hasImage">
        <img :src="getImage(pergunta.imagem)" :alt="pergunta.descricao" />
      </template>
      <br />
      <p class="text-blue-800 mb-10">{{ pergunta.descricao }}</p>
      <br />
      <div class="flex flex-col items-start grow h-full">
        <div class="my-2 mx-5">
          <label>
            <input
              type="radio"
              name="resposta"
              value="1"
              v-model="respostaModel"
            />
            Verdadeiro
          </label>
        </div>
        <div class="my-2 mx-5">
          <label>
            <input
              type="radio"
              name="resposta"
              value="0"
              v-model="respostaModel"
            />
            Falso
          </label>
        </div>
      </div>

      <button
        class="
          mt-20
          p-5
          rounded-lg
          text-white
          bg-blue-800
          align-bottom
          self-center
        "
        @click="checkResposta(respostaVFRef, respostaModel)"
      >
        Confirmar
      </button>
    </div>
  </div>
  <div v-else class="flex flex-col h-full">
    <h2 :class="feedback.color" class="mb-10 text-red-">
      <strong>{{ feedback.title }}</strong>
    </h2>
    <p>{{ feedback.description }}</p>
    <button
      class="
        mt-20
        p-5
        rounded-lg
        text-white
        bg-blue-800
        align-bottom
        self-center
      "
      @click="emitNextPergunta()"
    >
      Próxima Questão
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from '@vue/runtime-core'
import { PropType, ref, computed } from 'vue'
import { useStore } from '../store/index'
import {
  PerguntaInterface,
  RespostaMultiplaEscolhaInferface,
  RespostaVFInterface,
  FeedBackInterface,
} from '../typings/Types'
import { toBufferToBase64 } from '../utils/Utils'

export default defineComponent({
  name: 'Perguntas',
  props: {
    pergunta: {
      type: Object as PropType<PerguntaInterface>,
      required: true,
      default: {},
    },
  },
  emits: ['resposta'],
  setup(props, { emit }) {
    const store = useStore()
    const perguntaRef = ref<PerguntaInterface>()
    const eMultiplaEscolha = ref<boolean>(false)
    const respostaVFRef = ref<RespostaVFInterface>()
    const respostaMultiRef = ref<RespostaMultiplaEscolhaInferface>()

    const feedback = ref<FeedBackInterface>({
      color: 'text-green-500',
      title: '',
      description: '',
    })
    const isFeedback = ref<boolean>(false)

    const respostaModel = ref()

    onUpdated(() => {
      const { pergunta } = props
      perguntaRef.value = pergunta
      eMultiplaEscolha.value = pergunta.eMultiplaEscolha
      if (pergunta.eMultiplaEscolha) {
        respostaMultiRef.value =
          pergunta.respostaMultiplaEscolha as RespostaMultiplaEscolhaInferface
      } else {
        respostaVFRef.value = pergunta.respostaVF as RespostaVFInterface
      }
    })

    const checkResposta = (
      resposta:
        | RespostaVFInterface
        | RespostaMultiplaEscolhaInferface
        | undefined,
      respostaModel: any
    ) => {
      if (!respostaModel) {
        // TODO - error
        console.error('Error, escolha resposta')
        return false
      }

      let isRespostaCorreta = false
      const pontuacao = perguntaRef.value?.pontuacaoPergunta || 0

      if (resposta?.chaveResposta === Number(respostaModel)) {
        isRespostaCorreta = true

        feedback.value.color = 'text-green-500'
        feedback.value.title = 'Parabéns! Você Acertou!'
        feedback.value.description = `+ ${pontuacao} pts`
      } else {
        feedback.value.color = 'text-red-700'
        feedback.value.title = 'Errou!'
        feedback.value.description = resposta?.descricaoFeedback || ''
      }

      const payload = { isRespostaCorreta, pontuacao }

      store.dispatch({ type: 'addPontuacao', payload })
      isFeedback.value = true
    }

    const emitNextPergunta = () => {
      emit('resposta', true)
      isFeedback.value = false
    }

    const getImage = (
      perguntaImgBuffer: { type: string; data: any[] } | undefined
    ) =>
      perguntaImgBuffer
        ? `data:image/png;base64,${toBufferToBase64(perguntaImgBuffer.data)}`
        : ''

    const hasImage = computed(() =>
      perguntaRef.value && perguntaRef.value.imagem ? true : false
    )

    return {
      eMultiplaEscolha,
      perguntaRef,
      respostaVFRef,
      respostaMultiRef,
      respostaModel,
      feedback,
      isFeedback,
      emitNextPergunta,
      checkResposta,
      getImage,
      hasImage,
    }
  },
})
</script>
<style scoped lang="postcss"></style>
