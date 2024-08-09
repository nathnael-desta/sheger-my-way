<template>
    <div class="list">
        <div 
            class="list-text"
            v-if="currentPageNo == 0 || currentPageNo == 1"
            >In Your Area</div>

        <div class="list-container">
            <BusStands
                v-if="currentPageNo == 0"
            />
             <Buses 
                v-if="currentPageNo == 1 || currentPageNo == 2"
            />
            <BusesToDestination />
        </div>
    </div>
</template>

<script setup>
import BusStands from "../components/BusStands.vue";
import Buses from "../components/Buses.vue";
import { inject, computed } from "vue";



let pageNo = inject("pageNo");


const currentPageNo = computed(() => pageNo.value);

</script>
