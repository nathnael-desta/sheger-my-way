<template>
    <div
        class="map-container"
        v-if="pageNo == 0"
    ></div>
    <div
        class="map2"
        v-if="pageNo == 1 || pageNo == 2"
    ></div>
    <div
        class="map3"
        v-if="pageNo == 3"
    ></div>
</template>
<script setup>
import { inject } from "vue";

let pageNo = inject("pageNo");
</script>
