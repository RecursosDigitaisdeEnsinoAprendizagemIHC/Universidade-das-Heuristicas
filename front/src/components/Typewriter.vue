<template>
  <span class="text-bold">
    {{ displayText }}
  </span>
</template>

<script lang="ts">
import {
  computed,
  ref,
  defineComponent,
  PropType,
  onMounted,
} from '@vue/runtime-core'

export default defineComponent({
  name: 'Typewriter',
  props: {
    speed: {
      type: Number,
      default: 100,
    },
    deleteSpeed: {
      type: Number,
      default: 166,
    },
    text: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup(props) {
    const displayText = ref<string>('')
    let i = 0
    const speed = props.speed
    const type = () => {
      if (i < props.text.length) {
        displayText.value += props.text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }

    onMounted(() => {
      type()
    })

    return {
      displayText,
    }
  },
})
</script>
