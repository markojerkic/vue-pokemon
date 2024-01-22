import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLikedPokemonStore = defineStore('counter', () => {
  const likesSet = ref(new Set())
  const likes = computed(() => Array.from(likesSet.value))
  const likesCount = computed(() => likesSet.value.size)

  function addLike(name: string) {
    likesSet.value.add(name)
  }

  function isLiked(name: string) {
    return likesSet.value.has(name)
  }

  function removeLike(name: string) {
    likesSet.value.delete(name)
  }

  return { likes, addLike, likesCount, isLiked, removeLike }
})
