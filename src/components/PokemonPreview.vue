<script setup lang="ts">
import { computed } from 'vue'
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
    <h2>{{ name }}</h2>
    <img :src="image" />
  </div>
</template>
