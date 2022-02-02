<template>
  <p class="text-blue-800 text-base">
    Universidade das Heurísticas{{ subTitle }}
  </p>
  <div class="mt-5 cursor-pointer flex items-center" @click="$router.go(-1)">
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
import { ParticipanteInterface } from '../typings/Types'
import { useStore } from '../store/index'

export default defineComponent({
  name: 'SubHeader',
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const subTitle = props.title ? ` - ${props.title}` : ''

    return {
      subTitle,
    }
  },
})
</script>
