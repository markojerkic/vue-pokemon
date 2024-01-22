<script setup lang="ts">
import { useLikedPokemonStore } from "../stores/likes";
const likes = useLikedPokemonStore();
</script>

<template>
  <div class="liked">
    <h1>Liked pokemon</h1>
    <div class="preview-container" v-for="pokemon in likes.likedPokemon" :key="pokemon">
      <PokemonPreview :name="pokemon" />
    </div>
    <h2 v-if="likes.likedPokemon.length === 0">You have no liked pokemon</h2>
  </div>
</template>
