<template>
    <div
        class="busStand"
        v-for="(busStand, index) in $routeData.getAllBusStands()"
        :key="index"
        @click="goToBuses(busStand.location)"
    >
    <div class="basic-info">
        <div class="left">
            <img
                src="../assets/busStand.svg"
                alt="bus stand img"
                class="busStandImg"
            />
            <img
                src="../assets/rectangle.svg"
                alt=""
                class="rectangle"
            />

            <div class="top">
                <div class="name">{{ busStand.location }}</div>
            </div>
            <div class="bottom">
                <div class="amount">Amount of people</div>
                <div
                    class="circle"
                    :class="circleColor(busStand.occupancy)"
                ></div>
                <div class="occupancy">
                    {{ busStand.occupancy }}
                </div>
            </div>
        </div>
        <div class="right">
            <div class="number-text">
                <div class="distance-text">Distance</div>
                <div class="number">
                    {{ busStand.distance }}
                </div>
            </div>
            <div class="km">Km</div>
        </div>
    </div>
    </div>
</template>

<script setup> 
import { inject, computed } from "vue";

let pageNo = inject("pageNo");
let busStop = inject("busStop");


function circleColor(occupancy) {
    return occupancy == "Crowded"
        ? "red"
        : occupancy == "Moderate"
        ? "yellow"
        : "green";
}

const $routeData = inject("$routeData");

function goToBuses(stand) {
  pageNo.value = 1;
  busStop.value = `${stand}`;

}
</script>
