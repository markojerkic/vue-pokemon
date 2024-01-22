<script lang="ts">
export default {
  computed: {
    pokemonId() {
      // We will see what `params` is shortly
      return this.$route.params.id
    },
  },
  methods: {
    goToDashboard() {
    },
  },
}
</script>

<template>
  <div class="about">
    <p>{{ pokemonId }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
