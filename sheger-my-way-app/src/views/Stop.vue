<template>
    <div class="main">
        <div class="blue-background"></div>
        <div class="top-text">
          <div class="top-text-content">Find a bus stop near you</div>
          <img src="../assets/stepIndicator1.svg" alt="step Indicator 1" class="stepIndicator">
        </div>
        <div class="content">
            <div class="map-container">
                <img
                    src="../assets/citymap.svg"
                    alt="city map"
                />
            </div>
            <div class="input-container location">
                <input
                    type="text"
                    class="input"
                    placeholder="Enter current location"
                />
                <img
                    src="../assets/mapPin.svg"
                    alt="map pin"
                    class="mapPin"
                />
            </div>

            <div class="buses">
                <div class="buses-text">In your area</div>

                <div class="busStands-container">
                    <div
                        class="busStand list"
                        v-for="(
                            busStand, index
                        ) in $routeData.getAllBusStands()"
                        :key="index"
                    >
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
                                <div class="circle"></div>
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
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, computed } from "vue";

const $routeData = inject("$routeData");
</script>
