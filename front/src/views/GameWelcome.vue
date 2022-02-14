<template>
  <sub-header :hideVoltar="true"></sub-header>

  <div class="container">
    <div class="flex flex-col">
      <div class="bg-white">
        <type-writer :text="text"></type-writer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'GameWelcome',

  setup() {
    const text = `Bem vindo ao seu primeiro desafio! Estamos na UnB e aqui você verá os primeiro projetos para avaliar.\
    A medida que sua pontuação aumentar mais desafiador vai ficar! Boa sorte e bons estudos!`

    return { text }
  },
})
</script>
<style scoped lang="postcss"></style>
