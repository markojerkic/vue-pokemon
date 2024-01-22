<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  isLiked: Boolean,
});

</script>

<template>
      <button
        class="like-button"
        v-if="!isLiked"
        @click="$emit('add-like')"
      >
        Like this pokemon
      </button>
      <button class="remove-like-button" v-else @click="$emit('remove-like')">
        Remove this pokemo from your likes
      </button>

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
</style>
