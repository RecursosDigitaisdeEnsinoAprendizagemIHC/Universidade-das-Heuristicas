<template>
  <ag-grid-vue
    style="height: 500px"
    class="ag-theme-alpine h-1/2"
    :columnDefs="table.columnDefs"
    :rowData="rowData"
  >
  </ag-grid-vue>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/runtime-core'
import { AgGridVue } from 'ag-grid-vue3'
import { useStore } from '../store'

export default defineComponent({
  name: 'RankList',
  components: {
    AgGridVue,
  },
  setup() {
    const store = useStore()
    let rowData = ref([])

    const table = {
      columnDefs: [
        { headerName: 'Nome', field: 'nome', sortable: true },
        { headerName: 'Pontos', field: 'pontuacaoTotal', sortable: true },
        { headerName: 'Questões', field: 'questoesCertas', sortable: true },
      ],
      rowData,
    }

    onMounted(async () => {
      const alunos = await store.dispatch({ type: 'getRankingList' })
      // TODO - terminar ranking
      rowData.value = alunos
    })
    return { table, rowData }
  },
})
</script>
<style lang="scss">
@import 'ag-grid-community/dist/styles/ag-grid.css';
@import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
</style>
