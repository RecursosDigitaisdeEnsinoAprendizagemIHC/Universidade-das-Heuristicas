<template>
  <div
    class="avatar-pop-up bg-white border rounded-lg border-blue-800"
    ref="popUp"
    hidden
  >
    <div class="m-10">
      <input
        type="text"
        name="name"
        placeholder="Digite seu nome..."
        class="mt-4"
        v-model="nomeParticipante"
      />
      <div class="flex justify-around mt-4 mb-8">
        <img
          src="../assets/imgs/avatar-feminino.png"
          alt="avatar-feminino"
          ref="avatarF"
          @click="trocaAvatar('F', $event)"
        />
        <img
          src="../assets/imgs/avatar-masculino.png"
          alt="avatar-masculino"
          ref="avatarM"
          @click="trocaAvatar('M', $event)"
        />
      </div>

      <button class="btn btn-blue" @click="confirmar">Confirmar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from '@vue/runtime-core'
import { useStore } from '../store/index'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'AvatarPopUp',
  props: {
    jogar: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()

    const popUp = ref<HTMLElement | null>(null)
    const avatarF = ref<HTMLElement | null>(null)
    const avatarM = ref<HTMLElement | null>(null)

    const nomeParticipante = ref<string>('')
    const avatar = ref<string>('')

    onUpdated(() => {
      if (popUp.value && props.jogar == true) {
        popUp.value.hidden = false
      }
    })

    const trocaAvatar = (tipo: string, event: Event) => {
      avatar.value = tipo

      avatarF.value?.classList.remove('selected')
      avatarM.value?.classList.remove('selected')

      const selectedImgElement = event.currentTarget as HTMLElement
      selectedImgElement.classList.add('selected')
    }

    const confirmar = () => {
      if (!nomeParticipante.value || !avatar.value) {
        // TODO - msg de error, colocar no canto direto superior
        return false
      }
      const participante = {
        avatar: avatar.value,
        nome: nomeParticipante.value,
      }
      if (store.state.participante == null) {
        store.dispatch({ type: 'criarParticipante', ...participante })
        router.push('/game-welcome')
      }
    }

    return { nomeParticipante, popUp, avatarF, avatarM, confirmar, trocaAvatar }
  },
})
</script>
<style scoped lang="postcss">
.avatar-pop-up {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
}

.btn {
  @apply font-bold py-2 px-4 rounded bg-blue-800 text-white;
}
.btn:hover {
  @apply bg-blue-700;
}

img:hover {
  cursor: pointer;
}
img.selected {
  @apply border border-blue-800;
}
</style>
