import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLikedPokemonStore = defineStore("counter", () => {
  let initialValues = [];
  const localStorageItems = localStorage.getItem("likes");
  try {
    if (localStorageItems) {
      try {
        const obj = JSON.parse(localStorageItems);
        if (obj instanceof Array) {
          initialValues = obj;
        }
      } catch (e) {
        console.error(e);
      }
    }
  } catch (e) {
    console.error(e);
  }
  const likesSet = ref(new Set(initialValues));
  const likes = computed(() => Array.from(likesSet.value));
  const likesCount = computed(() => likesSet.value.size);

  function addLike(name: string) {
    likesSet.value.add(name);
    localStorage.setItem("likes", JSON.stringify(Array.from(likesSet.value)));
  }

  function isLiked(name: string) {
    return likesSet.value.has(name);
  }

  function removeLike(name: string) {
    likesSet.value.delete(name);
    localStorage.setItem("likes", JSON.stringify(Array.from(likesSet.value)));
  }

  return { likes, addLike, likesCount, isLiked, removeLike };
});
