<template>
  <div v-if="!isFeedback">
    <div v-if="eMultiplaEscolha" class="flex flex-col h-full text-left">
      <h2>{{ pergunta.descricao }}</h2>
      <template v-if="hasImage">
        <img
          :src="getImage(pergunta.imagem)"
          :alt="pergunta.descricao"
          class="image cursor-pointer"
          ref="image"
          @click="openNewTab()"
        />
      </template>
      <div class="my-2 mx-5">
        <label class="text">
          <input
            type="radio"
            name="resposta"
            value="1"
            v-model="respostaModel"
          />
          {{ respostaMultiRef?.descricaoOpcao1 }}
        </label>
      </div>

      <div class="my-2 mx-5">
        <label class="text">
          <input
            type="radio"
            name="resposta"
            value="2"
            v-model="respostaModel"
          />
          {{ respostaMultiRef?.descricaoOpcao2 }}
        </label>
      </div>
      <div class="my-2 mx-5">
        <label class="text">
          <input
            type="radio"
            name="resposta"
            value="3"
            v-model="respostaModel"
          />
          {{ respostaMultiRef?.descricaoOpcao3 }}
        </label>
      </div>
      <div class="my-2 mx-5">
        <label class="text">
          <input
            type="radio"
            name="resposta"
            value="4"
            v-model="respostaModel"
          />
          {{ respostaMultiRef?.descricaoOpcao4 }}
        </label>
      </div>
      <button
        class="
          mt-5
          lg:mt-10
          p-5
          rounded-lg
          text-white
          bg-blue-800
          align-bottom
          self-center
          text
        "
        @click="checkResposta(respostaMultiRef, respostaModel)"
      >
        OK
      </button>
    </div>
    <div v-else class="flex flex-col h-full">
      <h2 class="mb-1 md:mb-10">
        <strong class="text">{{ pergunta.titulo }}</strong>
      </h2>
      <p class="text-blue-800 mb-1 md:mb-10 text">
        {{ pergunta.descricao }}
      </p>
      <div class="flex flex-col items-start grow h-full">
        <div class="my-2 mx-5">
          <label class="text">
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
          <label class="text">
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
          mt-5
          lg:mt-10
          p-5
          rounded-lg
          text-white
          bg-blue-800
          align-bottom
          self-center
          text
        "
        @click="checkResposta(respostaVFRef, respostaModel)"
      >
        Confirmar
      </button>
    </div>
  </div>
  <div v-else class="flex flex-col h-full text-">
    <h2 :class="feedback.color" class="mb-10 text-red">
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
        text
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

    const image = ref<HTMLImageElement | null>(null)

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
      respostaModelValue: any
    ) => {
      if (!respostaModelValue) {
        // TODO - error
        console.error('Error, escolha resposta')
        return false
      }

      let isRespostaCorreta = false
      const pontuacao = perguntaRef.value?.pontuacaoPergunta || 0

      if (resposta?.chaveResposta === Number(respostaModelValue)) {
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
      respostaModel.value = ''
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

    const openNewTab = () => {
      if (image.value) {
        const newWindow = window.open(image.value.src, '_blank')
        if (newWindow) {
          newWindow.document.write(image.value.outerHTML)
        }
      }
    }

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
      openNewTab,
      hasImage,
      image,
    }
  },
})
</script>
<style scoped lang="postcss">
.text {
  @apply text-sm md:text-sm lg:text-base;
}

.image {
  width: 70%;
  margin: 0 auto;
}
</style>
