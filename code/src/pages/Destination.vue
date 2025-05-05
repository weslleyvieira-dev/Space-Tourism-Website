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
main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8.5rem;
  height: 100vh;
  resize: none;
  box-sizing: border-box;
  overflow-y: overlay;
  overflow-x: hidden;
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

@media (max-width: 1024px) {
  main {
    padding-top: 6rem;
  }

  .content-container {
    padding: 2.5rem;
    width: 100%;
  }

  .text-preset-5 {
    font-size: 1.25rem;
  }

  .content {
    flex-direction: column;
  }

  .content picture img {
    width: 18.75rem;
    height: 18.75rem;
    margin: 2.625rem;
  }

  .content-explanation {
    padding: 0.7rem 5.4rem;
  }

  .destination-tabs {
    justify-content: center;
  }

  .text-preset-2 {
    font-size: 5rem;
    text-align: center;
  }

  .text-preset-9 {
    font-size: 1rem;
    text-align: center;
    color: var(--blue-300);
  }

  .line {
    margin: 1.5rem 0;
  }

  .distance,
  .travel-time {
    text-align: center;
  }
}

@media (max-width: 767px) {
  main {
    padding-top: 5.5rem;
  }

  .content-container {
    padding: 1.5rem;
  }

  .text-preset-5 {
    font-size: 1rem;
    letter-spacing: 0.15rem;
    text-align: center;
  }

  .content {
    width: auto;
    height: auto;
  }

  .content picture img {
    width: 9.375rem;
    height: 9.375rem;
    margin: 1.656rem;
  }

  .content-explanation {
    width: 100%;
    padding: 0;
  }

  .destination-tabs {
    margin: 0 0 1.5rem;
  }

  .text-preset-2 {
    font-size: 3.5rem;
  }

  .text-preset-9 {
    font-size: 0.938rem;
  }

  .statistics {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
