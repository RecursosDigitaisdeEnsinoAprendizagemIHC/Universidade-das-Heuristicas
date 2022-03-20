<template>
  <div class="flex items-end m-10 mt-0">
    <img
      class="rectangle p-10 shrink w-1/4 h-1/4"
      src="../assets/imgs/open-project.png"
      alt="open-project"
      srcset=""
    />
    <div class="pergunta ml-5 mr-2 grow">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.rectangle {
  @apply border-opacity-100 border-8 border-blue-800 rounded-3xl;
  @apply bg-white;
}

.pergunta {
  position: relative;
  height: 50vh;
  background: #fff;
  border-radius: 40px;
  padding: 24px;
  margin-bottom: 25px;
  text-align: center;
}

.pergunta:before {
  content: '';
  width: 0px;
  height: 0px;
  position: absolute;

  border-left: 32px solid #fff;

  border-right: 20px solid transparent;
  border-top: 20px solid #fff;

  border-bottom: 28px solid transparent;

  left: 32px;
  bottom: -45px;
}
</style>
