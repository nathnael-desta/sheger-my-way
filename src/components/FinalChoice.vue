<template>
  <Journey />

  <List />

  <Map />

  <div 
    class="trackingText"
    v-if="busPlate.plate"
    >{{ `Tracking Sheger ${busPlate.plateNo}, we will notify you when it arrives.` }}</div>
</template>

<script setup> 
import {reactive, inject} from "vue"
import List from "../components/List.vue";
import Map from "../components/Map.vue";
import Journey from "../components/Journey.vue"

const busPlate = inject("busPlate");


</script>