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
    <modal-error v-on:closeModal="closeModal" :open="isError" :message="'store.state.error'" :code="'teste wee'"></modal-error>
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
  setup() {
    const store = useStore()
    const isJogar = ref<boolean>(false)
    const isError = ref<boolean>(false)
    const openPopUp = () => {
      isJogar.value = true
    }

    const closeModal = () => {
      console.log('error')
      isError.value = false
      store.dispatch({ type: 'setError', payload: null })
    }
    console.log('teste', store.state.error)
    if(store.state.error !== null){
      
      isError.value = true
    }
    console.log(store.state)
    return { isJogar, openPopUp, isError, store, closeModal }
  },
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
