<template>
  <!-- Syrup layer: only render if not "No Syrup" -->
  <div
    v-if="store.currentSyrup.id !== 's1'"
    class="syrup"
    :style="{ backgroundColor: store.currentSyrup.color }"
  ></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";

// Pinia store for current beverage selections
const store = useBeverageStore();
</script>

<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
  transition: background-color 0.3s ease;
}
</style>
