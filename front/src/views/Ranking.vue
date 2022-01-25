<template>
  <!-- TODO - criar componente p + div -->
  <p class="text-blue-800 text-base">Universidade das Heurísticas - Ranking</p>
  <div class="mt-10 cursor-pointer" @click="$router.push('/game-options')">
    - voltar
  </div>

  <div class="container">
    <div class="ranking w-full">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Pontos</th>
            <th>Questões</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="participante of rankingList" :key="participante.id">
            <td>{{ participante.nome }}</td>
            <td>{{ participante.pontos }}</td>
            <td>{{ participante.questoes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, ref, defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Ranking',
  setup() {
    const alunos = [
      {
        id: 1,
        nome: 'Participante 1',
        pontos: 10,
        questoes: 2,
      },
      {
        id: 2,
        nome: 'Participante 2',
        pontos: 30,
        questoes: 7,
      },
      {
        id: 3,
        nome: 'Participante 3',
        pontos: 2,
        questoes: 1,
      },
    ]
    const rankingList = ref<any[]>([...alunos])

    return {
      rankingList,
    }
  },
})
</script>
<style scoped lang="postcss">
.container {
  height: initial;
  margin-top: 1em;
}
</style>
