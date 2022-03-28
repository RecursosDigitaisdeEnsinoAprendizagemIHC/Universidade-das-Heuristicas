<template>
  <sub-header title="Ranking"></sub-header>

  <div class="container">
    <div class="ranking w-full">
      <!-- <table class="table-auto w-full">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Pontos</th>
            <th>Questões</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="participante of rankingList"
            :key="participante.idJogador + 1"
          >
            <td>{{ participante.nome }}</td>
            <td>{{ participante.pontuacaoTotal }}</td>
            <td>{{ participante.questoesCertas }}</td>
          </tr>
        </tbody>
      </table> -->
      <rank-list></rank-list>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, reactive } from '@vue/runtime-core'
import { JogadorInterface } from '../typings/Types'
import { useStore } from '../store/index'
import RankList from '../components/RankList.vue'
import SubHeader from '../components/SubHeader.vue'
export default defineComponent({
  name: 'Ranking',
  components: { RankList, SubHeader },
  setup() {
    const rankingList = ref<JogadorInterface[]>([])
    const store = useStore()

    // onMounted(async () => {
    //   const alunos = await store.dispatch({ type: 'getRankingList' })
    //   // TODO - terminar ranking
    //   rankingList.value = alunos
    // })

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

:deep(.vtl-paging) {
  @apply text-sm;
}
</style>
