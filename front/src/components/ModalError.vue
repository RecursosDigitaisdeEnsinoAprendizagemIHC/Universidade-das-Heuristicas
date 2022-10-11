<template>
  <div
    class="modal-error bg-white border rounded-lg border-blue-800"
    ref="ModalConfirm"
  >
    <div class="m-10">
      <div class="title">
        <img
            src="../assets/imgs/error.svg"
            alt="icone de alerta"
            srcset=""
        />
        <h3 class="msg-title">Erro do sistema</h3>
      </div >
      <div class="modal-content">
        <h3>Erro: {{message}}</h3>
        <h3>Codigo: {{code}}</h3>
      </div>
      <div class="button-group">
        <button v-tippy="{ content: 'Fechar mensagem de erro' }" class="btn btn-blue" @click="CloseModalError">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { useStore } from '../store/index'
import { useRouter, useRoute } from 'vue-router'
import { directive } from 'vue-tippy'
import { useToast } from 'vue-toast-notification'

export default defineComponent({
  name: 'ModalError',
  directives: {
      tippy: directive,
  },
  props: {
    message: {
      type: String,
      required: true,
      default: '',
    },
    code: {
      type: String,
      required: true,
      default: '',
    },
  },

  setup(props) {
    const store = useStore();
    const router = useRouter();
    const $toast = useToast();
    const ModalConfirm = ref<HTMLElement | null>(null)
    const message = ref<string>(props.message)
    const code = ref<string>(props.code)

    const confirmar = () => {
        router.push('/')
    }

    const CloseModalError = () => {
      store.dispatch({ type: 'setError', payload: null })
      router.go(-1)
    }
    return { ModalConfirm, confirmar, message, code, CloseModalError }
  },
})
</script>
<style scoped lang="postcss">
.modal-error {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
}

.btn {
  @apply font-bold py-2 px-4 rounded bg-blue-800 text-white;
}
.btn:hover {
  @apply bg-blue-700;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 37px;
}
.button-group {
    display: flex;
    gap: 24px;
    justify-content: center;
}

.msg-title{
    color: #F44236;
}

.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-bottom: 48px;
}
</style>
