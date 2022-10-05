<template>
  <div
    class="modal-confirmacao-pop-up bg-white border rounded-lg border-blue-800"
    ref="ModalConfirm"
    hidden
  >
    <div class="m-10">
      <div class="title">
        <img
            src="../assets/imgs/alert.svg"
            alt="icone de alerta"
            srcset=""
        />
        <h3>Realmente deseja inciar um novo jogo? você perdera dados do jogo atual</h3>
      </div>
      <div class="button-group">
        <button v-tippy="{ content: 'Voltar' }" class="btn btn-white" @click="$emit('closeModal')">Voltar</button>
        <button v-tippy="{ content: 'Confirmar Ação' }" class="btn btn-blue" @click="confirmar">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUpdated } from '@vue/runtime-core'
import { useStore } from '../store/index'
import { useRouter, useRoute } from 'vue-router'
import { directive } from 'vue-tippy'
import { useToast } from 'vue-toast-notification'

export default defineComponent({
  name: 'ModalConfirmacao',
  directives: {
      tippy: directive,
  },
  props: {
    open: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  setup(props) {

    const store = useStore();
    const router = useRouter();
    const $toast = useToast();
    const ModalConfirm = ref<HTMLElement | null>(null)

    onUpdated(() => {
      if ( props.open == true) {
        ModalConfirm.value.hidden = false
      }else {
        ModalConfirm.value.hidden = true
      }
    })

    const confirmar = () => {
        router.push('/')
    }

    const voltar = () => {
        props.open = false;
    }

    return { ModalConfirm, voltar, confirmar }
  },
})
</script>
<style scoped lang="postcss">
.modal-confirmacao-pop-up {
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
    gap: 37px;
    margin-bottom: 101px;
}
.button-group {
    display: flex;
    gap: 24px;
    justify-content: center;
}
.btn-white{
    background-color: #fff;
    color: #000;
    border: solid 1px #000;
    &:hover{
        background-color: #DAD9D9;
        opacity: 0.4;
    }
}
</style>
