<script setup lang="ts">
import { ref } from "vue";

const score = ref(0);
</script>

<template>
  <div class="score">
    <input class="score-input" type="number" v-model="score" placeholder="Your score" />
    <h1>Your score of this pokemon: {{ score }}</h1>
  </div>
</template>

<style scoped>
.score-input {
  width: 5rem;
  padding: .5rem;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
