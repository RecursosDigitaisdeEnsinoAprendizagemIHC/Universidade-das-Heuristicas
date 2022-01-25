import { ParticipanteInterface } from './../typings/Types';
import { State } from './index';
import { ActionContext } from 'vuex'

export const GameStore: { state: State, getters: any, actions: any, mutations: any } = {
  state: {
    participante: null,
  },
  getters: {
    // getAuth(state: Auth): boolean {
    //   return state.loggedIn
    // },
  },
  actions: {
    // changeAuth(context: ActionContext<Auth, Auth>, data: boolean): void {
    //   context.commit('changeAuth', data)
    // },
  },
  mutations: {
    createParticipante(state: State, payload: ParticipanteInterface) {
      state.participante = {
        id: null,
        nome: payload.nome,
        pontos: 0,
        questoes: 0,
        avatar: payload.avatar
      }
    }
  },
}
