<template>
  <sub-header title="Ranking"></sub-header>

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
          <tr v-for="participante of rankingList" :key="participante.id + 1">
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
import { computed, ref, defineComponent, onMounted } from '@vue/runtime-core'
import { ParticipanteInterface } from '../typings/Types'
import { useStore } from '../store/index'

export default defineComponent({
  name: 'Ranking',
  setup() {
    const rankingList = ref<ParticipanteInterface[]>([])
    const store = useStore()

    onMounted(async () => {
      const alunos = await store.getters.getRankingList
      rankingList.value = alunos
    })

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
