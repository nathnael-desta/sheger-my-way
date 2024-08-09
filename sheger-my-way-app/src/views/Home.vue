<template>
    <div class="main">
        <div class="blue-background"></div>
        <div class="top-text">
          <div class="top-text-content">{{ topText() }}</div>
          <img @click="goBack()" v-if="pageNo == 1 || pageNo == 2" src="../assets/arrow.svg" alt="arrow" class="arrow">
          <img v-if="pageNo == 0" src="../assets/stepIndicator1.svg" alt="step Indicator 1" class="stepIndicator">
          <img v-if="pageNo == 1 || pageNo == 2" src="../assets/stepindicator2.svg" alt="step Indicator 2" class="stepIndicator">
        </div>
        <div class="content">
            <StopPage
                v-if="pageNo == 0 || pageNo == 1"
            />      
            
            <FinalChoice 
                v-if="pageNo == 2"
            />
        </div>
    </div>
</template>

<script setup>
import { inject, computed, ref, provide } from "vue";
import StopPage from "../components/StopPage.vue";
import FinalChoice from "../components/FinalChoice.vue";

let pageNo = ref(0);
let busStop = ref("Hawassa");
let destination = ref("nowhere");

provide('pageNo', pageNo);
provide('busStop', busStop);
provide('destination', destination);

function topText() {
    if (pageNo.value == 0){
        return "Find a bus stop near you";
    } else if (pageNo.value == 1) {
        return "Enter your destination";
    } else if (pageNo.value == 2) {
        return "Choose a bus to your destination";
    }
}

function goBack() {
    if (pageNo.value == 1) {
        pageNo.value = 0;
    }
    if (pageNo.value == 2) {
        pageNo.value = 1;
    }

}

const $routeData = inject("$routeData");
</script>
