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
        <!-- TODO  SPEED 70 -->
        <type-writer :speed="10" :text="text" :goTo="'/fases'"></type-writer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'GameWelcome',

  setup() {
    const text = `Bem vindo ao jogo Universidade das Heuristicas! Estamos na UnB em uma feira de projetos de Software para matéria  de Interação Humana Computador.
     O tema principal é Herusticias de Nielsen. A medida que vc avalia os  projetos mais desafiador vai ficar e mais pontuação irá receber. Boa sorte e bons estudos!!`

    return { text }
  },
})
</script>
<style scoped lang="postcss"></style>
