import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { GameStore } from './gameStore'

interface storeTypes {
  hasItens: boolean
}

export const key: InjectionKey<Store<storeTypes>> = Symbol()

export const store = createStore<storeTypes>({
  modules: {
    GameStore,
  },
})