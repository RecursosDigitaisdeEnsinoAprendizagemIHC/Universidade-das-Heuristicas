<template>
  <modal-error :message="message" :code="code"></modal-error>
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
