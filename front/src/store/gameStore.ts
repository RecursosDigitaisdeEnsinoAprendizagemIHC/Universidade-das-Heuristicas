import { ParticipanteInterface } from './../typings/Types';
import { State } from './index';
import { ActionContext } from 'vuex'
import apiClient from '../plugins/https'

export const GameStore: { state: State, getters: any, actions: any, mutations: any } = {
  state: {
    participante: null,
  },
  getters: {
    async getRankingList(): Promise<ParticipanteInterface[]> {
      const result = await apiClient.get<ParticipanteInterface[]>('/ranking-list')
      return result.data
    },
  },
  actions: {
    // changeAuth(context: ActionContext<Auth, Auth>, data: boolean): void {
    //   context.commit('changeAuth', data)
    // },

    criarParticipante({ commit, state }: ActionContext<State, State>, payload: { nome: string, avatar: string }) {
      // TODO criar no banco (async ) e depois das o commit
      commit({ type: 'criarParticipante', ...payload })
    }
  },
  mutations: {
    criarParticipante(state: State, payload: { nome: string, avatar: string }) {
      state.participante = {
        id: -1,
        nome: payload.nome,
        pontos: 0,
        questoes: 0,
        avatar: payload.avatar
      }
      console.log('criado', state.participante)
    }
  },
}
