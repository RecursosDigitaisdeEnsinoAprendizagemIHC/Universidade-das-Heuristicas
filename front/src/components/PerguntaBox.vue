<template>
  <div class="flex items-end mx-5 mt-0 mb-2 md:mx-10 md:mb-10">
    <img
      class="rectangle p-5 lg:p-10 shrink w-1/5 h-1/5 md:w-1/4 md:h-1/4"
      src="../assets/imgs/open-project.png"
      alt="open-project"
      srcset=""
    />
    <div class="pergunta ml-5 mr-2 grow">
      <div class="float-right ml-2 cursor-pointer" @click="goToFases">
        <font-awesome-icon icon="times-circle" size="2x" class="text-red-800 btn-close" />
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { FasesInterface } from '../typings/Types'

export default defineComponent({
  name: 'PerguntaBox',
  emits: ['close'],

  setup(props, { emit }) {
    const router = useRouter()

    const goToFases = () => {
      emit('close')
    }

    return {
      goToFases,
    }
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
  box-sizing: content-box;
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

.btn-close:hover {
  opacity: 0.4;
}
</style>
