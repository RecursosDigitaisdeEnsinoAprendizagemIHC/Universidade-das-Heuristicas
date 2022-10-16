<template>
  <div class="container h-full">
    <h1 class="title mb-20">Universidade das Heurísticas</h1>
    <div class="flex items-center justify-around w-full">
      <div>
        <img
          src="../assets/imgs/home-page-image.png"
          alt="placeholder"
          srcset=""
        />
      </div>
      <div
        @click="$router.push('/game-options')"
        class="
          flex
          items-center
          cursor-pointer
          hover:animate-pulse hover:shadow-xl;
        "
      >
        <h1>Começar</h1>
        <div class="pl-4">
          <font-awesome-icon icon="play" size="4x" class="text-blue-800" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, ref, defineComponent } from '@vue/runtime-core'
import Layout from '../layouts/layout.vue'
import { useStore } from '../store'
import { directive } from 'vue-tippy'

export default defineComponent({
  name: 'App',
  components: { Layout },
  directives: {
      tippy: directive,
  },
  watch: {
    '$store.state.error': function() {
      this.$store.state.error
      this.$router.push('/alert-view')
      }
  },
  setup() {
    const list = ref<string[]>(['a', 'b'])
    const store = useStore()

    store.dispatch({ type: 'setJogadorNull' })

    return {
      list,

    }
  },
})
</script>
<style scoped lang="postcss">
h1 {
  @apply text-2xl text-blue-800;
}
</style>
