<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <main>
    <div class="hero-container">
      <div class="hero">
        <div class="texts">
          <p class="text-preset-5">So, you want to travel to</p>
          <h1 class="text-preset-1">Space</h1>
          <p class="text-preset-9">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div class="button-container">
          <router-link to="/destination" class="nav-link">
            <button class="text-preset-4">Explore</button>
          </router-link>
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
  padding: 16.5rem 10.25rem 8rem;
  height: 100vh;
  resize: none;
  box-sizing: border-box;
  overflow-y: overlay;
  overflow-x: hidden;
}

.hero-container {
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 100%;
}

.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  width: 100%;
  gap: 1.875rem;
}

.texts {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1.5rem;
}

.text-preset-9 {
  color: var(--blue-300);
}

.button-container {
  display: flex;
  justify-content: end;
  width: 50%;
}

button {
  position: relative;
  background-color: white;
  border: none;
  width: 17rem;
  height: 17rem;
  border-radius: 50%;
  transition: box-shadow 0.4s ease, color 0.4s ease;
}

button:hover {
  cursor: pointer;
  box-shadow: 0 0 0 5.5rem rgba(255, 255, 255, 0.1);
}

.text-preset-4 {
  color: var(--blue-900);
}

.text-preset-4:hover {
  color: rgb(11, 13, 23, 0.5);
}

@media (max-width: 1024px) {
  main {
    height: auto;
    padding: 14rem 2.5rem 8rem;
  }

  .hero-container {
    height: auto;
    align-items: center;
    padding: 0 5.5rem;
  }

  .hero {
    flex-direction: column;
    gap: 4rem;
  }

  .texts {
    width: 100%;
    text-align: center;
  }

  .text-preset-9 {
    font-size: 1rem;
  }

  .button-container {
    justify-content: center;
  }
}

@media (max-width: 767px) {
  main {
    padding: 7rem 1.5rem 1.5rem;
  }

  .hero {
    gap: 0;
  }

  .text-preset-5 {
    font-size: 1rem;
    letter-spacing: 0.15rem;
  }

  .text-preset-1 {
    font-size: 5rem;
  }

  .text-preset-9 {
    font-size: 0.938rem;
  }

  .button-container {
    padding: 7.4rem 5.7rem;
  }

  button {
    height: 9rem;
    width: 9rem;
  }

  .text-preset-4 {
    font-size: 1.125rem;
  }
}
</style>
