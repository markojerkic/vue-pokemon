<script setup lang="ts">
import PokemonPreview from "@/components/PokemonPreview.vue";
</script>

<script lang="ts">

export default {
  data() {
    return {
      allPokemon: [],
      selectedRecipe: null,
      selectedRecipeIndex: -1,
    };
  },
  watch: {
    $route(to, from) {
      console.log(`Route changed: ${from.path} -> ${to.path} `);
    },
  },
  methods: {
    async fetchAllPokemon() {
      const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json());
      this.allPokemon = pokemon.results;
    },
  },
  async mounted() {
    await this.fetchAllPokemon();
  },
};
</script>

<template>
  <div>
    <div class="preview-container" v-for="pokemon in allPokemon" :key="pokemon.name">
      <PokemonPreview :name="pokemon.name" />
    </div>
  </div>
</template>

<style scoped>
.preview-container {
  display: inline-block;
  margin: 10px;
}
</style>
