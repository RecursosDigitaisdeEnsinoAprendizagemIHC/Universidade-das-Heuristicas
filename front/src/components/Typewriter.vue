<template>
  <span class="text-bold m-4">
    {{ displayText }}
    <font-awesome-icon
      v-show="finish && goTo"
      icon="arrow-circle-left"
      size="1x"
      class="text-blue-800 click"
      rotation="270"
      @click="$router.push(goTo)"
    />
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
    goTo: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const displayText = ref<string>('')
    let finish = ref<boolean>(false)
    let i = 0
    const speed = props.speed
    const goTo = props.goTo
    const type = () => {
      if (i < props.text.length) {
        displayText.value += props.text.charAt(i)
        i++
        setTimeout(type, speed)
      } else {
        finish.value = true
      }
    }

    onMounted(() => {
      type()
    })

    return {
      finish,
      displayText,
      goTo,
    }
  },
})
</script>
<style scoped lang="postcss">
.click {
  cursor: pointer;
}
</style>
