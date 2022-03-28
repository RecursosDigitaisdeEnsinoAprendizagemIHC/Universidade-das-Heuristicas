<template>
  <sub-header title="Sobre Nós"></sub-header>

  <div class="container">
    <div class="">
      <p class="mx-auto w-10/12">
        Este jogo foi desenvolvido como Trabalho de Conclusão de Curso da
        Universidade de Brasília pelos alunos Lucas Midlhey e Cauê Mateus.
      </p>
      <p>
        O intuito é educar de uma forma didática e divertida sobre as
        Heurísticas de Nielsen, tema muito importante para a área de Interação
        Humano-Computador.
      </p>
      <p>
        Agradecemos aos nossos orientadores, a professora Dra. Fabiana Freitas
        Mendes e o professor Dr. André Barros de Sales, por todo auxílio e
        acompanhamento no desenvolvimento deste jogo.
      </p>
      <p>
        Para contribuir e saber mais:
        <a
          class="underline"
          href="https://github.com/RecursosDigitaisdeEnsinoAprendizagemIHC/Universidade-das-Heuristicas"
          >link github</a
        >
      </p>
      <p class="text-center">Divirtam-se</p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="postcss">
.container {
  @apply p-10 bg-white rounded-lg mt-24;
}
p {
  @apply mb-5;
}
</style>
