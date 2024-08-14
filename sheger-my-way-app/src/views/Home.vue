<template>
    <div class="app">
        <div

            class="splash"
            @click="splashScreen = false"
            :class="{hiddenSplash: splashScreen == false, visibleSplash: splashScreen == true}"
        >
            <div class="splash-container">
                <img
                    class="splash-img"
                    src="../assets/splash.svg"
                    alt=""
                />
                <div class="splash-title">SHEGER MY WAY</div>
            </div>
            <div class="swipe">
                <img
                    class="swipeimg"
                    src="../assets/swipeup.svg"
                    alt=""
                />
                <div class="uptext">SWIPE UP TO CONTINUE</div>
            </div>
        </div>
        <div
            class="main"
            :class="{ scrollable: pageNo == 3 && !hideButtons }"
        >
            <div
                class="blue-background"
                :class="{
                    bigger: pageNo == 3 && !hideButtons,
                    scrollableBackground: pageNo === 3,
                }"
            ></div>
            <div class="top-text">
                <div class="top-text-content">{{ topText() }}</div>
                <img
                    @click="goBack()"
                    v-if="
                        pageNo == 1 ||
                        pageNo == 2 ||
                        pageNo === 3 ||
                        pageNo === 4
                    "
                    src="../assets/arrow.svg"
                    alt="arrow"
                    class="arrow"
                />
                <img
                    v-if="pageNo == 0"
                    src="../assets/stepIndicator1.svg"
                    alt="step Indicator 1"
                    class="stepIndicator"
                />
                <img
                    v-if="
                        pageNo == 1 ||
                        pageNo == 2 ||
                        pageNo === 3 ||
                        pageNo === 3
                    "
                    src="../assets/stepindicator2.svg"
                    alt="step Indicator 2"
                    class="stepIndicator"
                />
                <div
                    class="ff"
                    v-if="tracking && pageNo !== 3"
                    @click="pageNo = 3"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <title>fast-forward</title>
                        <path d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z" />
                    </svg>
                </div>
            </div>
            <div class="content">
                <StopPage v-if="pageNo == 0 || pageNo == 1" />

                <FinalChoice v-if="pageNo == 2" />

                <TrackingPage v-if="pageNo == 3 || pageNo === 4" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, computed, ref, provide, reactive } from "vue";
import StopPage from "../components/StopPage.vue";
import FinalChoice from "../components/FinalChoice.vue";
import TrackingPage from "../components/TrackingPage.vue";

let pageNo = ref(0);
let busStop = ref("Hawassa");
let destination = ref("nowhere");
let busPlate = reactive({
    plate: false,
    plateNo: "",
});
let tracking = ref(false);
let currentBus = ref({
    stop: "Amist Kilo",
    from: "Janmeda",
    next: "Mexico",
    time: {
        arrival: "8",
        min: "24",
    },
    plate: "A12483",
    diabilityFriendly: true,
    route: [
        "Janmeda",
        "Amist Kilo",
        "Arat Kilo",
        "Fil Wuha",
        "Friendship",
        "Stadium",
        "Mexico",
    ],
    nextRoute: "amistKilo-mexico",
});
let hideButtons = ref(false);

let splashScreen = ref(true);

provide("pageNo", pageNo);
provide("busStop", busStop);
provide("destination", destination);
provide("busPlate", busPlate);
provide("tracking", tracking);
provide("currentBus", currentBus);
provide("hideButtons", hideButtons);

function topText() {
    if (tracking.value) {
        return "Tracking";
    }

    if (pageNo.value == 0) {
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
        tracking.value = false;
    }
    if (pageNo.value == 3) {
        pageNo.value = 2;
        hideButtons.value = false;
    }
    if (pageNo.value == 4) {
        pageNo.value = 3;
        hideButtons.value = false;
    }
}

const $routeData = inject("$routeData");
</script>
