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

    async criarParticipante({ commit, state }: ActionContext<State, State>, payload: { nome: string, avatar: string }) {
      const participante = {
        id: -1,
        nome: payload.nome,
        pontos: 0,
        questoes: 0,
        avatar: payload.avatar
      }
      // TODO criar no banco (async ) e depois das o commit
      const result = await apiClient.post('/create-user', participante)
      if (result.data) {
        commit({ type: 'criarParticipante', ...participante })
      }
    }
  },
  mutations: {
    criarParticipante(state: State, payload: ParticipanteInterface) {
      state.participante = {
        id: payload.id,
        nome: payload.nome,
        pontos: payload.pontos,
        questoes: payload.questoes,
        avatar: payload.avatar
      }
    }
  },
}
