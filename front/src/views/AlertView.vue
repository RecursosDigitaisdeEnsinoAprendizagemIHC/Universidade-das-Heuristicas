<template>
  <div class="container h-full">
    <div
    class="modal-error bg-white border rounded-lg border-blue-800"
    ref="ModalConfirm"
    hidden
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
        <button v-tippy="{ content: 'Fechar mensagem de erro' }" class="btn btn-blue" @click="$emit('closeModal')">Fechar</button>
      </div>
    </div>
  </div>
  </div>
</template>
<script lang="ts">
import { computed, ref, defineComponent } from '@vue/runtime-core'
import Layout from '../layouts/layout.vue'
import ModalError from '../components/ModalError.vue'
import { useStore } from '../store'
import { directive } from 'vue-tippy'
import { defineComponent, ref, onUpdated } from '@vue/runtime-core'
import { useStore } from '../store/index'

export default defineComponent({
  name: 'App',
  components: { Layout, ModalError },
  directives: {
      tippy: directive,
  },

  setup() {

    const store = useStore()
    const isOpen = ref<boolean>(true)
    const ModalConfirm = ref<HTMLElement | null>(null)
    console.log('Store: ', store.state)
    const message = store?.state?.error?.message
    const code = store?.state?.error?.code
    onUpdated(() => {
      
        ModalConfirm.value.hidden = true
      
    })

    const confirmar = () => {
        router.push('/')
    }

  return {
      message,
      code,
      isOpen
    }
  },
})
</script>
<style scoped lang="postcss">
h1 {
  @apply text-2xl text-blue-800;
}
</style>
