<template>
    <div
        class="busArrival-container"
        :class="{ lessPadding: !hideButtons, lessBottomPadding: hideButtons }"
    >
        <div
            class="busArrival-title"
            :class="{ hidden: hideButtons }"
        >
            YOUR BUS HAS ARRIVED
        </div>

        <div
            class="map3"
            :class="{onlyWidth: hideButtons}"
        ></div>

        <div
           class="busArrival-buttons"
           :class="{hidden: hideButtons}"
            >
            <div
                class="boarded"
                @click="goToBoarded()"
            >
                I have boarded
            </div>
            <div
                class="snooze"

                @click="snooze()"
            >
                Snooze to the next nearest bus
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from "vue";
import Map from "./Map.vue";

let pageNo = inject("pageNo");
let tracking = inject("tracking");
const busPlate = inject("busPlate");
let hideButtons = inject("hideButtons")
let hide = ref("false");

function snooze() {
    pageNo.value = 2;
    busPlate.plate = false;
}

function goToBoarded() {
    hide.value = false;
    hideButtons.value = true;
}

setInterval(() => {
  console.log(hideButtons.value)
},500)
</script>
