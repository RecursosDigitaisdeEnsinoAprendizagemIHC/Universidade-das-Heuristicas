<template>
  <div class="container">
    <h1>TESTE</h1>
    <div v-for="a in list" :key="a">
      <p>{{ a }}</p>
    </div>
    <type-writer text="Hello World! I was registered globally!"></type-writer>
  </div>

  <button @click="$router.push('/pagetwo')">Go back</button>
</template>
<script lang="ts">
import { computed, ref, defineComponent } from '@vue/runtime-core'
import Layout from '../layouts/layout.vue'

export default defineComponent({
  name: 'App',
  components: { Layout },
  setup() {
    const list = ref<string[]>(['a', 'b'])

    return {
      list,
    }
  },
})
</script>
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  text-align: center;
}
.creator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  color: black;
}
.icon {
  color: white;
}
</style>