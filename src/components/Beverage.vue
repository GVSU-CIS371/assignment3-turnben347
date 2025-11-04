<template>
  <Mug>
    <!-- Temperature layer -->
    <Cold v-if="isIced" />
    <Hot v-else />

    <!-- Beverage contents -->
    <Contents>
      <!-- Creamer layer -->
      <template v-slot:top>
        <Creamer v-if="store.currentCreamer.id !== 'c1'" />
      </template>

      <!-- Syrup layer -->
      <template v-slot:mid>
        <Syrup v-if="store.currentSyrup.id !== 's1'" />
      </template>

      <!-- Base beverage -->
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Mug from "./Mug.vue";
import Contents from "./Contents.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Syrup from "./Syrup.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

import { useBeverageStore } from "../stores/beverageStore";

// Pinia store for current beverage selections
const store = useBeverageStore();

// Props
type Props = {
  isIced: boolean;
};
defineProps<Props>();
</script>
