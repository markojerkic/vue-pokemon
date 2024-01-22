<script setup lang="ts">
import { computed } from 'vue'
import {RouterLink} from 'vue-router'

const props = defineProps({
  name: String
})

// Get image of pokemon based on name
const getImage = (name: string) => {
  return `https://img.pokemondb.net/sprites/home/normal/${name}.png`
}

const image = computed(() => getImage(props.name))
</script>

<script lang="ts">
export default {
}
</script>

<template>

  <div class="pokemon-preview">
    <router-link :to="{ name: 'pokemon', params: {id: name } }">
      <h2>{{ name }}</h2>
      <img :src="image" />
    </router-link>
  </div>
</template>
