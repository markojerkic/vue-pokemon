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
    //setSelectedRecipe() {
    //  this.selectedRecipe = this.allRecipes.find(
    //    (x) => x.id == this.$route.params.id
    //  );
    //  this.selectedRecipeIndex = this.allRecipes.findIndex(
    //    (x) => x.id == this.$route.params.id
    //  );
    //},
    //deleteRecipe(args) {
    //  console.log("deleting recipe", args, this.allRecipes.length);
    //  this.allRecipes = this.allRecipes.filter((x) => x.id !== args.id);
    //  if (this.selectedRecipe && this.selectedRecipe.id === args.id) {
    //    this.selectedRecipe = null;
    //  }
    //},
  },
  async mounted() {
    await this.fetchAllPokemon();
  },
};
</script>

<template>
  <!-- <div v-if="selectedRecipe" class="d-flex flex-column align-items-center"> -->
  <!-- <h2>Recipe #{{ selectedRecipe.id }}</h2> -->
  <!-- <recipe-card -->
  <!--   :key="selectedRecipe.id" -->
  <!--   v-model="allRecipes[selectedRecipeIndex]" -->
  <!--   :zoom="1" -->
  <!--   can-edit="true" -->
  <!--   @delete-recipe="deleteRecipe" -->
  <!-- ></recipe-card> -->
  <!-- </div> -->
  <!-- <div v-else> -->
  <h2>All pokemon ({{ allPokemon.length }})</h2>
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
