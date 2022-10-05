<template>
  <sub-header :hideVoltar="true"></sub-header>

  <div class="container h-full">
    <div class="flex flex-col">
      <div>
        <img
          src="../assets/imgs/welcome-image.png"
          alt="welcome-image"
          srcset=""
        />
      </div>
      <div  class="bg-white white-bg">
        <type-writer :speed="30" :text="text"></type-writer>
        <br/>
        <br/>
        <button v-tippy="{ content: 'Ir para fases' }" class="btn" @click="$router.push('/fases')">Continuar</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { directive } from 'vue-tippy'

export default defineComponent({
  name: 'GameWelcome',
  directives: {
      tippy: directive,
  },
  setup() {
    const text = `Bem vindo ao seu primeiro desafio! Estamos na UnB e aqui você verá os primeiros projetos para avaliar.\
    A medida que sua pontuação aumentar mais desafiador vai ficar! Boa sorte e bons estudos!`

    return { text }
  },
})

</script>
<style scoped lang="postcss">
.btn {
  @apply font-bold py-2 px-4 rounded bg-blue-800 text-white;
}
.btn:hover {
  opacity: 0.5;
}

</style>
