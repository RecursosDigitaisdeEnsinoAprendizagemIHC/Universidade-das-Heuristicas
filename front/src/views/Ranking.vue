<template>
  <sub-header title="Ranking"></sub-header>

  <div class="container">
    <div
      class="ranking w-full"
      style="display: flex; flex-direction: row; height: 100%"
    >
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
  watch: {
  '$store.state.error': function() {
    this.$store.state.error
    this.$router.push('/alert-view')
    }
  },
  setup() {
    const rankingList = ref<JogadorInterface[]>([])
    const store = useStore()

    return {
      rankingList,
    }
  },
})
</script>
<style scoped lang="postcss">
.container {
  height: 80%;
  margin-top: 1em;
}

:deep(.vtl-paging) {
  @apply text-sm;
}
</style>
