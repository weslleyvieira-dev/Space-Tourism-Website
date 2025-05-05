<script setup>
import { ref, computed, onMounted } from "vue";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isLoading = ref(true);

const backgrounds = {
  Home: {
    desktop: "/assets/home/background-home-desktop.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    mobile: "/assets/home/background-home-mobile.jpg",
  },
  Destination: {
    desktop: "/assets/destination/background-destination-desktop.jpg",
    tablet: "/assets/destination/background-destination-tablet.jpg",
    mobile: "/assets/destination/background-destination-mobile.jpg",
  },
  Crew: {
    desktop: "/assets/crew/background-crew-desktop.jpg",
    tablet: "/assets/crew/background-crew-tablet.jpg",
    mobile: "/assets/crew/background-crew-mobile.jpg",
  },
  Technology: {
    desktop: "/assets/technology/background-technology-desktop.jpg",
    tablet: "/assets/technology/background-technology-tablet.jpg",
    mobile: "/assets/technology/background-technology-mobile.jpg",
  },
};

const currentBackground = computed(() => {
  return backgrounds[route.name] || backgrounds.Home;
});

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<template>
  <div v-if="isLoading" class="loading-overlay">
    <img
      :src="`/assets/shared/loading.gif?timestamp=${Date.now()}`"
      class="loading-gif"
      alt="Loading"
    />
  </div>
  <div v-else class="app-background">
    <picture>
      <source media="(min-width: 1024px)" :srcset="currentBackground.desktop" />
      <source media="(max-width: 1024px)" :srcset="currentBackground.tablet" />
      <source media="(max-width: 767px)" :srcset="currentBackground.mobile" />
      <transition name="bg-fade" mode="out-in">
        <img
          :src="currentBackground.desktop"
          alt="Background Image"
          class="background-image"
          :key="currentBackground.desktop"
        />
      </transition>
    </picture>
    <Header />
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped>
.app-background {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.background-image {
  width: 100dvw;
  height: 100dvh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
}

.bg-fade-enter-active,
.bg-fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease;
}

.bg-fade-enter-from,
.bg-fade-leave-to {
  opacity: 0.95;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.loading-overlay {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.loading-gif {
  width: 10rem;
  height: 10rem;
}
</style>
