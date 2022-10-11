<template>
  <div
    class="avatar-pop-up bg-white border rounded-lg border-blue-800"
    ref="popUp"
    hidden
  >
    <div class="m-10">
      <input v-tippy="{ content: 'Apelido pode possuir até 3 caracteres', position: 'top' }"
        type="text"
        name="name"
        placeholder="Insira o apelido"
        class="mt-4"
        v-model="nomeParticipante"
        maxlength="3"
      />
      <div class="flex justify-around mt-4 mb-8">
        <img  v-tippy="{ content: 'Selecionar personagem' }"
          src="../assets/imgs/avatar-feminino.png"
          alt="avatar-feminino"
          ref="avatarF"
          class="img-avatar"
          @click="trocaAvatar('F', $event)"
        />
        <img v-tippy="{ content: 'Selecionar personagem' }"
          src="../assets/imgs/avatar-masculino.png"
          alt="avatar-masculino"
          ref="avatarM"
          class="img-avatar"
          @click="trocaAvatar('M', $event)"
        />
      </div>

      <button v-tippy="{ content: 'Confirmar cadastro' }" class="btn btn-blue" @click="confirmar">Confirmar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from '@vue/runtime-core'
import { useStore } from '../store/index'
import { useRouter, useRoute } from 'vue-router'
import { directive } from 'vue-tippy'
import { useToast } from 'vue-toast-notification'

export default defineComponent({
  name: 'AvatarPopUp',
  directives: {
      tippy: directive,
  },
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
    const $toast = useToast();

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
      console.log('Clicou')
      if (!nomeParticipante.value ) {
        $toast.error('Deve adicionar um apelido',{
          position: 'top-right'
        })
        return false
      }
      if (!avatar.value ) {
        $toast.error('Deve selecionar um avatar',{
          position: 'top-right'
        })
        return false
      }
      const participante = {
        avatar: avatar.value,
        nome: nomeParticipante.value,
      }
      console.log('Store: ', store.state.error)
      if(store.error){
        alert(`Error: ${store.error}`)
      }

      if(participante.nome.includes(" ")){
        $toast.error('Apelido inválido. Espaço não é permitido.',{
          position: 'top-right'
        })
        return false
      }
      console.log('Jogador: ', store.getters.getJogador())
      if (store.getters.getJogador() == null) {
        console.log('Sem jogador')
        store.dispatch({ type: 'criarParticipante', ...participante })
        $toast.success('Usuário criado com sucesso!',{
          position: 'top-right'
        });

        // router.push('/game-welcome')
      }

      
    }

    return { nomeParticipante, popUp, avatarF, avatarM, confirmar, trocaAvatar }
  },
  methods: {
     onClickButton (event) {
         this.$emit('clicked', 'true')
     }
   }
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
  opacity: 0.5;
  border: solid 3px #000080;
}
img.selected {
  border: solid 3px #000080;
}
</style>
