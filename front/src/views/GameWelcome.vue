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
      <div class="bg-white white-bg">
        <type-writer :speed="70" :text="text" :goTo="'/fases'"></type-writer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'GameWelcome',

  setup() {
    const text = `Bem vindo ao seu primeiro desafio! Estamos na UnB e aqui você verá os primeiros projetos para avaliar.\
    A medida que sua pontuação aumentar mais desafiador vai ficar! Boa sorte e bons estudos!`

    return { text }
  },
})
</script>
<style scoped lang="postcss"></style>
