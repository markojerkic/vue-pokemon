<script setup lang="ts">
import Score from "../components/Score.vue";
</script>

<script lang="ts">
import { useLikedPokemonStore } from "@/stores/likes";

export default {
  data() {
    const { isLiked, addLike, removeLike } = useLikedPokemonStore();
    return {
      pokemon: null,
      loading: true,
      isLiked,
      addLike,
      removeLike,
    };
  },
  watch: {
    $route(to, from) {
      console.log(`Route changed: ${from.path} -> ${to.path} `);
    },
  },
  computed: {
    numberOfAbilities() {
      return this.pokemon?.abilities.length ?? 0;
    },
  },
  methods: {
    async fetchPokemon(id: string | string[]) {
      this.loading = true;
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      ).then((res) => res.json());
      this.pokemon = pokemon;
      this.loading = false;
    },

    addPokemonToLikes() {
      this.addLike(this.pokemon!.name);
    },

    removePokemonFromLikes() {
      this.removeLike(this.pokemon!.name);
    },
  },
  async mounted() {
    await this.fetchPokemon(this.$route.params.id);
  },
};
</script>

<template>
  <div class="about" v-if="!this.loading && this.pokemon">
    <div class="about-container">
      <h1>{{ pokemon!.name }}</h1>
      <img :src="pokemon!.sprites.front_default" />
      <p>Number of abilities: {{ numberOfAbilities }}</p>
      <h2>Abilities</h2>
      <ul>
        <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
          {{ ability.ability.name }}
        </li>
      </ul>

      <button
        class="like-button"
        v-if="!isLiked(pokemon!.name)"
        @click="addPokemonToLikes"
      >
        Like this pokemon
      </button>
      <button class="remove-like-button" v-else @click="removePokemonFromLikes">
        Remove this pokemo from your likes
      </button>

      <Score />

      <router-link :to="{ name: 'home' }">
        <h3><- Back to list of pokemon</h3>
      </router-link>
    </div>
  </div>
  <div v-else>
    <h1>Loading...</h1>
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
.remove-like-button:hover {
  background-color: #ba000d;
}
.like-button {
  background-color: #4caf50;
}
img {
  width: 300px;
  height: 300px;
  image-rendering: pixelated;
}
.like-button:hover {
  background-color: #357a38;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
