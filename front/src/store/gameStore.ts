import { ActionContext, ActionPayload, GetterTree, MutationPayload } from 'vuex';
import apiClient from '../plugins/https';
import { getJogadorLocalStorage, setJogadorLocalStorage } from '../utils/Utils';
import { FasesInterface, JogadorInterface } from './../typings/Types';
import { State } from './index';


export const JOGADOR_STORAGE = 'jogadorHeuristica'

export const GameStore: { state: State, getters: GetterTree<State, State>, actions: any, mutations: any } = {
  state: {
    jogador: null,
    fases: [],
    currentFase: null
  },
  getters: {
    getJogador: (state) => () => {
      return state.jogador || getJogadorLocalStorage()
    }
  },
  actions: {
    async getRankingList({ commit, state }: ActionContext<State, State>): Promise<JogadorInterface[]> {
      const result = await apiClient.get<JogadorInterface[]>('/ranking-list')
      return result.data
    },
    async getFases({ commit, state }: ActionContext<State, State>): Promise<FasesInterface[]> {
      const result = await apiClient.get<FasesInterface[]>('/get-fases')
      const fases = result.data
      commit({ type: 'setFase', fases })
      return result.data
    },

    async setCurrentFase({ commit, state }: ActionContext<State, State>, { payload }: ActionPayload): Promise<void> {
      commit({ type: 'setCurrentFase', payload })
    },

    async addPontuacao({ commit, state, getters }: ActionContext<State, State>, { payload }: ActionPayload): Promise<void> {
      const jogador = state.jogador as JogadorInterface

      if (payload.isRespostaCorreta) {
        jogador.pontuacaoTotal += payload.pontuacao as number
        jogador.questoesCertas += 1
      }

      jogador.questoesTentadas += 1


      setJogadorLocalStorage(jogador)
      await apiClient.post('/update-score', jogador)
    },

    async criarParticipante({ commit, state }: ActionContext<State, State>, payload: { nome: string, avatar: string }) {
      const participante: JogadorInterface = {
        idJogador: -1,
        nome: payload.nome,
        pontuacaoTotal: 0,
        questoesCertas: 0,
        questoesTentadas: 0,
        imagemPersonagem: payload.avatar
      }

      try {
        const result = await apiClient.post<JogadorInterface>('/create-user', participante)
        if (result.data) {
          const jogador = { ...result.data }
          commit({ type: 'criarParticipante', ...jogador })
          setJogadorLocalStorage(jogador)
        }
      } catch (error) {
        throw error
      }

    },
    setJogadorNull({ commit, state }: ActionContext<State, State>) {
      localStorage.removeItem(JOGADOR_STORAGE)
      commit({ type: 'setJogadorNull' })
    }
  },
  mutations: {
    criarParticipante(state: State, payload: JogadorInterface) {
      state.jogador = {
        idJogador: payload.idJogador,
        nome: payload.nome,
        pontuacaoTotal: payload.pontuacaoTotal,
        questoesTentadas: 0,
        questoesCertas: 0,
        imagemPersonagem: payload.imagemPersonagem
      }

    },

    setFase(state: State, payload: { type: string, fases: FasesInterface[] }) {
      state.fases = payload.fases
    },
    setCurrentFase(state: State, payload: MutationPayload) {
      state.currentFase = payload.payload
    },
    setJogador(state: State, payload: MutationPayload) {
      state.jogador = { ...payload.payload }
    },
    setJogadorNull(state: State, payload: MutationPayload) {
      state.jogador = null
    },
  },
}
