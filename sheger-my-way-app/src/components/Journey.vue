<template>
  <div class="journey-container">
    <div class="journey-from">{{ busStop }}</div>
    <img class="journey-svg" src="../assets/leftright.svg" alt="">
    <div class="journey-to">{{ destination }}</div>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";

const busStop = inject("busStop");
const destination = inject("destination");
</script>