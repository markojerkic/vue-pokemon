import { defineStore } from 'pinia'

export const useCounterStore = defineStore('likedPokemon', {
  state: () => {
    return { likes: new Set() }
  },
  getters: {
    likesCount: (state) => state.likes.size,
  },
  actions: {
    addLike(name: string) {
      this.likes.add(name);
    }
  },
})
