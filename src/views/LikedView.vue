<script setup lang="ts">
import { useLikedPokemonStore } from "../stores/likes";

const likesStore = useLikedPokemonStore();

function removeLike(pokemonName: string) {
  likesStore.removeLike(pokemonName);
}

</script>

<template>
  <div class="liked">
    <h1>Liked pokemon</h1>
    <div class="preview-container" v-for="pokemon in likesStore.likes" :key="pokemon">
      <PokemonPreview :name="pokemon" />

      <button class="remove-like-button" @click="removeLike(pokemon)">Remove this pokemo from your likes</button>
    </div>
    <h2 v-if="likesStore.likesCount === 0">You have no liked pokemon</h2>

    <router-link to="/">Back to home</router-link>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
  margin: 1rem;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}

.remove-like-button {
  background-color: #f44336;
}
</style>
