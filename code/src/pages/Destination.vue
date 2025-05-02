<script setup>
import { ref } from "vue";
import destinationsData from "../data.json";

const destinations = ref(destinationsData.destinations);
const selectedIndex = ref(0);
const currentDestination = ref(destinations.value[selectedIndex.value]);

function selectDestination(index) {
  selectedIndex.value = index;
  currentDestination.value = destinations.value[index];
}
</script>

<template>
  <picture class="bg-image">
    <source
      media="(min-width: 1024px)"
      srcset="
        ../../public/assets/destination/background-destination-desktop.jpg
      "
    />
    <source
      media="(max-width: 1024px)"
      srcset="../../public/assets/destination/background-destination-tablet.jpg"
    />
    <source
      media="(max-width: 767px)"
      srcset="../../public/assets/destination/background-destination-mobile.jpg"
    />
    <img
      src="../../public/assets/destination/background-destination-mobile.jpg"
      class="bg-image"
      alt="Background Image"
    />
  </picture>
  <main>
    <div class="content-container">
      <p class="text-preset-5">
        <strong class="text-preset-5">01</strong>Pick Your Destination
      </p>
      <div class="content">
        <transition name="fade" mode="out-in">
          <picture :key="selectedIndex">
            <source
              media="(min-width: 1024px)"
              :srcset="currentDestination.images.png"
            />
            <source
              media="(max-width: 1024px)"
              :srcset="currentDestination.images.webp"
            />
            <img
              :src="currentDestination.images.png"
              :alt="currentDestination.name"
              class="destination-image"
            />
          </picture>
        </transition>
        <div class="content-explanation">
          <ul class="destination-tabs">
            <li
              v-for="(destination, index) in destinations"
              :key="destination.name"
              :class="{ active: index === selectedIndex }"
              class="text-preset-8"
              @click="selectDestination(index)"
            >
              {{ destination.name }}
            </li>
          </ul>
          <transition name="fade" mode="out-in">
            <div :key="selectedIndex">
              <h1 class="text-preset-2">{{ currentDestination.name }}</h1>
              <p class="text-preset-9">{{ currentDestination.description }}</p>
              <div class="line"></div>
              <div class="statistics">
                <div class="distance">
                  <p class="text-preset-7">Avg. Distance</p>
                  <p class="text-preset-6">{{ currentDestination.distance }}</p>
                </div>
                <div class="travel-time">
                  <p class="text-preset-7">Est. Travel Time</p>
                  <p class="text-preset-6">{{ currentDestination.travel }}</p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.bg-image {
  width: 100dvw;
  height: 100dvh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8.5rem;
  height: 100vh;
  resize: none;
  box-sizing: border-box;
}

.content-container {
  display: flex;
  flex-direction: column;
  padding: 3rem 10.25rem;
  height: 100%;
  box-sizing: border-box;
  gap: 1.5rem;
}

.text-preset-5 {
  color: white;
}

.text-preset-5 strong {
  font-family: "Barlow Condensed Bold";
  opacity: 0.25;
  margin-right: 1.5rem;
  letter-spacing: 4.72px;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  box-sizing: border-box;
}

.content picture {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.content picture img {
  width: 30rem;
  height: 30rem;
  margin: 0 29.5px;
}

.content-explanation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 0 47px;
  resize: none;
  box-sizing: border-box;
}

.destination-tabs {
  display: flex;
  flex-direction: row;
  height: 2rem;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem;
}

.destination-tabs li {
  display: flex;
  align-items: start;
  height: 100%;
  width: max-content;
  box-sizing: border-box;
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.5s ease-in-out;
  cursor: pointer;
}

.destination-tabs li:hover {
  border-bottom-color: rgb(255, 255, 255, 0.5);
}

.destination-tabs li.active {
  border-bottom-color: white;
}

.text-preset-2 {
  margin-bottom: 1rem;
}

.text-preset-9 {
  color: var(--blue-300);
}

.line {
  height: 1px;
  width: -moz-available;
  width: -webkit-fill-available;
  background-color: white;
  opacity: 0.25;
  margin: 2.5rem 0;
}

.statistics {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 1.5rem;
}

.distance,
.travel-time {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 0.75rem;
}

.text-preset-7 {
  color: var(--blue-300);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.5;
}
</style>
