<template>
  <div class="busArrival-container">
    <div class="busArrival-title">YOUR BUS HAS ARRIVED</div>

    <div class="busArrival-map-container"></div>

    <div class="busArrival-buttons">
      <div class="boarded">I have boarded</div>
      <div class="snooze">Snooze to the next nearest bus</div>
    </div>
  </div>
</template>

<script setup>
import Map from "./Map.vue";
</script>