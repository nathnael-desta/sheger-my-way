<template>
    <Journey />

    <BusArrival />

    <List />

    <div 
      class="plan"
      :class="{hidden: !hideButtons}"
      @click="planTrip()"
      >
      Plan next trip
    </div>
    

</template>

<script setup>
import { inject } from "vue";
import List from "../components/List.vue";
import Journey from "../components/Journey.vue"
import BusArrival from "../components/BusArrival.vue"

let pageNo = inject("pageNo");
let hideButtons = inject("hideButtons")
let tracking = inject("tracking");

function planTrip() {
  pageNo.value = 2
  hideButtons.value = false;
  tracking.value = false;

}
</script>