<template>
  <ag-grid-vue
    style="height: 100%; width: 100%"
    class="ag-theme-alpine"
    :columnDefs="table.columnDefs"
    :rowData="rowData"
    @first-data-rendered="onFirstDataRendered"
  >
  </ag-grid-vue>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/runtime-core'
import { AgGridVue } from 'ag-grid-vue3'
import { useStore } from '../store'
import { JogadorInterface } from '../typings/Types'

export default defineComponent({
  name: 'RankList',
  components: {
    AgGridVue,
  },
  setup() {
    const store = useStore()
    let rowData = ref<JogadorInterface[]>([])

    const table = {
      columnDefs: [
        { headerName: 'Nome', field: 'nome', sortable: true },
        { headerName: 'Pontos', field: 'pontuacaoTotal', sortable: true },
        { headerName: 'Questões', field: 'porcentagem', sortable: true },
      ],
      rowData,
      defaultColDef: {
        field: 'pontuacaoTotal',
        resizable: true,
      },
    }

    onMounted(async () => {
      const alunos: JogadorInterface[] = await store.dispatch({
        type: 'getRankingList',
      })
      alunos.forEach((aluno) => {
        let porcentagem =
          (Number(aluno.questoesCertas) * 100) / Number(aluno.questoesTentadas)

        porcentagem = isNaN(porcentagem) ? 0 : porcentagem

        aluno.porcentagem = `${porcentagem.toFixed(2)}%`
      })
      rowData.value = alunos
    })

    const onFirstDataRendered = (params) => {
      params.api.sizeColumnsToFit()
    }

    return { table, rowData, onFirstDataRendered }
  },
})
</script>
<style lang="scss">
@import 'ag-grid-community/dist/styles/ag-grid.css';
@import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
</style>
