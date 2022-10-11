<template>
  <p class="text-blue-800 text-base">Universidade das Heurísticas</p>

  <div class="container h-full">
    <div class="flex w-full justify-around h-1/4 space-x-20">
      <div  v-tippy="{ content: 'Iniciar partida' }" class="bg-option" @click="openPopUp">
        <p>Jogar</p>
      </div>
      <div v-tippy="{ content: 'Visualizar ranking' }" class="bg-option" @click="$router.push('/ranking')">
        <p>Ranking</p>
      </div>
      <div v-tippy="{ content: 'Sobre os desenvolvedores' }" class="bg-option" @click="$router.push('/sobre-nos')">
        <p>Sobre<br />Nós</p>
      </div>
    </div>
    <avatar-pop-up :jogar="isJogar"></avatar-pop-up>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import AvatarPopUp from '../components/AvatarPopUp.vue'
import ModalError from '../components/ModalError.vue'
import { useStore } from '../store/index'
import { directive } from 'vue-tippy'

export default defineComponent({
  components: { AvatarPopUp, ModalError },
  name: 'GameOptions',
  directives: {
      tippy: directive,
  },
  watch: {
  '$store.state.error': function() {
    this.$store.state.error
    // alert(`message: ${this.$store.state.error.message} code: ${this.$store.state.error.code}`)
    this.$router.push('/alert-view')
  }

},

  setup() {
    const store = useStore()
    const isJogar = ref<boolean>(false)
    const isError = ref<boolean>(false)
    
    const openPopUp = () => {
      isJogar.value = true
    }

    console.log('Is error: ', isError);
    const closePopUp = () => {
      isJogar.value = false
    }

    const closeModal = () => {
      console.log('error')
      isJogar.value = false
      isError.value = false
      // store.dispatch({ type: 'setError', payload: null })
    }
    return { isJogar, openPopUp, isError, store, closeModal }
  }
})
</script>
<style scoped lang="postcss">
.bg-option {
  @apply text-2xl bg-blue-800 text-white;
  @apply flex items-center;
  @apply rounded-2xl cursor-pointer;
  @apply hover:animate-pulse hover:shadow-xl;
  transform: rotate(45deg);
  p {
    @apply m-auto;
    transform: rotate(-45deg);
  }

  height: 200px;
  width: 200px;
}
</style>
