<template>
  <p class="text-blue-800 text-base">
    Universidade das Heurísticas{{ subTitle }}
    <span v-if="showLinks == true">
      |
      <router-link v-tippy="{ content: 'Visualizar ranking' }" to="/ranking" class="underline" @click="openModal">Ranking</router-link>
      -
      <button v-tippy="{ content: 'Iniciar novo jogo' }" class="underline" @click="$emit('openModal')">Novo Jogo</button>
      |
    </span>
  </p>
  <div
    v-if="hideVoltar == false"
    class="mt-5 cursor-pointer flex items-center :hover{@apply bg-red-700}"
    @click="$router.go(-1)"
  >
    <font-awesome-icon
      icon="arrow-circle-left"
      size="1x"
      class="text-blue-800"
    />
    <span class="ml-2">Voltar</span>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent, onMounted } from '@vue/runtime-core'
import { JogadorInterface } from '../typings/Types'
import { useStore } from '../store/index'

export default defineComponent({
  name: 'SubHeader',
  props: {
    title: {
      type: String,
      required: false,
    },
    hideVoltar: {
      type: Boolean,
      required: false,
      default: false,
    },
    showLinks: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const subTitle = props.title ? ` - ${props.title}` : ''
    const hideVoltar = props.hideVoltar
    const showLinks = props.showLinks
    const isOpenModal = ref<boolean>(false)

    return {
      subTitle,
      hideVoltar,
      showLinks,
      isOpenModal
    }
  },
})
</script>

<style scoped lang="postcss">
.mt-5:hover {
  opacity: 0.25;
}
.underline:hover{
  opacity: 0.4;
}

</style>