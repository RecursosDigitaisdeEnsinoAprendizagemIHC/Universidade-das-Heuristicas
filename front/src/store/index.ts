import { FasesInterface, JogadorInterface } from '../typings/Types';
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { GameStore } from './gameStore'

export interface State {
  jogador: JogadorInterface | null
  currentFase: any | null
  fases: FasesInterface[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  ...GameStore
})

export function useStore() {
  return baseUseStore(key)
}