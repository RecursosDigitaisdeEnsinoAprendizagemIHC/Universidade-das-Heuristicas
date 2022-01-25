import { ParticipanteInterface } from '../typings/Types';
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { GameStore } from './gameStore'

export interface State {
  participante: ParticipanteInterface | null
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  ...GameStore
})

export function useStore() {
  return baseUseStore(key)
}