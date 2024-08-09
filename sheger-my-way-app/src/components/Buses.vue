<template>
    <div
        class="busStand bus"
        v-for="(bus, index) in busesToLocation"
        :key="index"
        @click="goToDestination(bus, index)"
    >
        <div class="basic-info">
            <div class="left">
                <img
                    src="../assets/rectLeft.svg"
                    alt="bus"
                    class="rectLeft"
                />
                <img
                    src="../assets/bus.svg"
                    alt="bus"
                    class="busImg"
                />
                <img
                    src="../assets/rectRight.svg"
                    alt="bus"
                    class="rectRight"
                />
                <div class="top">
                    <div class="name next">{{ bus.next }}</div>
                </div>
                <div class="bottom">
                    <img
                        src="../assets/from.svg"
                        alt=""
                        class="fromImg"
                    />
                    <div class="coming">Coming from</div>
                    <div class="from">{{ bus.from }}</div>
                </div>
            </div>
            <div class="right busRight">
                <div class="arrival-container">
                    <div class="arrives">Arrives in</div>
                    <div class="arrival-div">
                        <div class="hour-number">{{ bus.time.arrival }}</div>
                        <div class="hour-text">min</div>
                    </div>
                </div>
                <div class="min-container">
                    <div class="travel">travel time</div>
                    <div class="travel-div">
                        <div class="travel-number">{{ bus.time.min }}</div>
                        <div class="travel-text">min</div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="plate"
            v-if="subBus.active === true && subBus.index === index"
        >
            <div class="plate-left">
                <img
                    src="../assets/plate.svg"
                    alt="plate img"
                    v-if="subBus.active === true && subBus.index === index"
                />
                <div class="plate-text">{{ bus.plate }}</div>
            </div>
            <img
                src="../assets/accessibility.svg"
                alt="accessibility img"
                v-if="bus.diabilityFriendly"
            />
        </div>

        <div
            class="route"
            v-if="subBus.active === true && subBus.index === index"
        >
            <div class="route-title">
                <img
                    src="../assets/route.svg"
                    alt=""
                />
                <div class="">Route</div>
            </div>

            <div class="route-list-container">
                <div
                    class="route-list"
                    v-for="(line, index) in routeListCreator(bus.route).order"
                >
                    <div
                        class="normal"
                        v-if="line.type === 'normal'"
                        v-for="(location, index) in line.data"
                    >
                        <div class="">{{ location }}</div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            v-if="index !== 2"
                        >
                            <path
                                d="M15 6.66663L18.3333 9.99996L15 13.3333"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M1.66675 10H18.3334"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <div
                        class="curved"
                        v-if="line.type === 'curved'"
                        v-for="(location, index) in line.data"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="bottomCurved"
                            v-if="index === 0"
                        >
                            <path
                                d="M11.6666 12.5L7.49992 16.6667L3.33325 12.5"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M16.6667 3.33337H10.8333C9.94928 3.33337 9.10143 3.68456 8.47631 4.30968C7.85119 4.93481 7.5 5.78265 7.5 6.66671V16.6667"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            v-if="index === 1"
                        >
                            <path
                                d="M5 13.3333L1.66667 9.99998L5 6.66665"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M18.3333 10L1.66659 10"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <div class="">{{ location }}</div>

                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="leftCurved"
                            v-if="index === 1"
                        >
                            <path
                                d="M7.50016 8.33337L3.3335 12.5L7.50016 16.6667"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M16.6668 3.33337V9.16671C16.6668 10.0508 16.3156 10.8986 15.6905 11.5237C15.0654 12.1489 14.2176 12.5 13.3335 12.5H3.3335"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div
            class="route"
            v-if="subBus.active === true && subBus.index === index"
        >
            <div class="route-title">
                <img
                    src="../assets/route.svg"
                    alt=""
                />
                <div class="">Route</div>
            </div>
            <div class="route-list-container">
                <div class="route-list">
                    <div class="normal">
                        <div class="">Janmeda</div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 6.66663L18.3333 9.99996L15 13.3333"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M1.66675 10H18.3334"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <div class="">Amist Kilo</div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 6.66663L18.3333 9.99996L15 13.3333"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M1.66675 10H18.3334"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <div class="">Arat Kilo</div>
                    </div>
                    <div class="curved">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="bottomCurved"
                        >
                            <path
                                d="M11.6666 12.5L7.49992 16.6667L3.33325 12.5"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M16.6667 3.33337H10.8333C9.94928 3.33337 9.10143 3.68456 8.47631 4.30968C7.85119 4.93481 7.5 5.78265 7.5 6.66671V16.6667"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <div class="">Fil Wuha</div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 13.3333L1.66667 9.99998L5 6.66665"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M18.3333 10L1.66659 10"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <div class="">Friendship</div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="leftCurved"
                        >
                            <path
                                d="M7.50016 8.33337L3.3335 12.5L7.50016 16.6667"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M16.6668 3.33337V9.16671C16.6668 10.0508 16.3156 10.8986 15.6905 11.5237C15.0654 12.1489 14.2176 12.5 13.3335 12.5H3.3335"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <div class="normalEnding">
                        <div class="">Stadium</div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 6.66663L18.3333 9.99996L15 13.3333"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M1.66675 10H18.3334"
                                stroke="#416084"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <div class="Mexico">Mexico</div>
                    </div>
                </div>
            </div>
        </div> -->
        <div
            class="buttons"
            v-if="subBus.active === true && subBus.index === index"
        >
            <div class="cancel">Cancel</div>
            <div class="track">Track</div>
        </div>
    </div>
</template>

<script setup>
import { inject, computed, reactive } from "vue";
import { routeListCreator } from "@/utils/routeUtils";

const $routeData = inject("$routeData");
const pageNo = inject("pageNo");
const busStop = inject("busStop");
const destination = inject("destination");

const subBus = reactive({
    active: false,
    index: NaN,
});

// Ensure the computed property reacts to changes
const busesToLocation = computed(() => {
    let result = [];
    if (pageNo.value === 1) {
        result = [...$routeData.getAllBuses()].filter(
            (bus) => bus.stop === busStop.value
        );
    } else if (pageNo.value === 2) {
        result = [...$routeData.getAllBuses()].filter(
            (bus) =>
                bus.stop === busStop.value && bus.next === destination.value
        );
    }
    return result;
});

function goToDestination(bus, index) {
    if (pageNo.value == 1) {
        destination.value = bus.next;
        pageNo.value = 2;
    }
    if (pageNo.value == 2) {
        if (index !== subBus.index) {
            subBus.active = true;
            subBus.index = index;
        } else {
            subBus.active = false;
            subBus.index = NaN;
        }
    }
}
</script>
