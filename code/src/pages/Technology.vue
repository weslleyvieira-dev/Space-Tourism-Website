<script setup>
import { ref } from "vue";
import techData from "../data.json";

const tech = ref(techData.technology);
const selectedIndex = ref(0);
const currentTech = ref(tech.value[selectedIndex.value]);

function selectTech(index) {
  selectedIndex.value = index;
  currentTech.value = tech.value[index];
}
</script>

<template>
  <main>
    <div class="tech-container">
      <p class="text-preset-5">
        <strong class="text-preset-5">03</strong>Space Launch 101
      </p>
      <div class="content">
        <div class="content-explanation">
          <div class="pagination">
            <ul class="pagination-techs">
              <li
                v-for="(item, index) in tech"
                :key="item.name"
                :class="{ active: index === selectedIndex }"
                @click="selectTech(index)"
              >
                <button class="pagination-options text-preset-4">
                  {{ index + 1 }}
                </button>
              </li>
            </ul>
          </div>
          <transition name="fade" mode="out-in">
            <div :key="selectedIndex" class="explanation">
              <h2 class="text-preset-4">The Terminology...</h2>
              <h1 class="text-preset-3">{{ currentTech.name }}</h1>
              <p class="text-preset-9">{{ currentTech.description }}</p>
            </div>
          </transition>
        </div>
        <transition name="fade" mode="out-in">
          <picture :key="selectedIndex">
            <source
              media="(min-width: 1024px)"
              :srcset="currentTech.images.portrait"
            />
            <source
              media="(max-width: 1024px)"
              :srcset="currentTech.images.landscape"
            />
            <img
              :src="currentTech.images.portrait"
              :alt="currentTech.name"
              class="tech-image"
            />
          </picture>
        </transition>
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

.tech-container {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 3rem 10.25rem;
  height: 100%;
  width: 100%;
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

.content-explanation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4rem;
  flex: 1;
  resize: none;
  box-sizing: border-box;
}

.explanation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.text-preset-4 {
  opacity: 0.5;
  margin-bottom: 1rem;
}

.text-preset-9 {
  margin-top: 1.5rem;
  color: var(--blue-300);
}

.pagination {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pagination-techs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 0;
  margin: 0;
  list-style: none;
}

.pagination-options {
  width: 5rem;
  height: 5rem;
  border: none;
  border-radius: 50%;
  transition: border-color 1s ease;
  opacity: 1;
  margin-bottom: 0;
  background-color: transparent;
  border: 1px solid rgb(255, 255, 255, 0.25);
}

.pagination-options:hover {
  border: 1px solid rgb(255, 255, 255, 1);
  cursor: pointer;
}

.active .pagination-options {
  background-color: white;
  color: var(--blue-900);
}

.content picture {
  display: flex;
  justify-content: end;
}

.tech-image {
  height: 600px;
  width: 608px;
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

  .tech-container {
    padding: 2.5rem;
    width: 100%;
  }

  .text-preset-5 {
    font-size: 1.25rem;
  }

  .content {
    flex-direction: column-reverse;
  }

  .content picture {
    align-items: center;
  }

  .tech-image {
    width: 100dvw;
    height: 100%;
    margin-top: 4rem;
    object-fit: cover;
  }

  .content-explanation {
    flex-direction: column;
    gap: 2.5rem;
  }

  .pagination {
    margin: 2rem 0 0;
  }

  .pagination-techs {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  .pagination-options {
    font-size: 1.5rem;
    width: 3.5rem;
    height: 3.5rem;
  }

  .explanation {
    text-align: center;
    margin: 0 5.5rem;
  }

  .explanation .text-preset-4 {
    font-size: 1.5rem;
  }

  .explanation .text-preset-3 {
    font-size: 2.5rem;
  }

  .explanation .text-preset-9 {
    font-size: 1rem;
    margin-top: 1rem;
    width: 95%;
  }
}

@media (max-width: 767px) {
  main {
    height: auto;
    padding-top: 5.5rem;
  }

  .tech-container {
    padding: 1.5rem;
    width: 100%;
  }

  .text-preset-5 {
    font-size: 1rem;
    letter-spacing: 0.15rem;
    text-align: center;
  }

  .tech-image {
    height: 16.125rem;
  }

  .pagination {
    margin: 0;
  }

  .pagination-options {
    font-size: 1.125rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  .explanation {
    margin: 0;
  }

  .explanation .text-preset-4 {
    font-size: 1.125rem;
  }

  .explanation .text-preset-3 {
    font-size: 1.5rem;
  }

  .explanation .text-preset-9 {
    font-size: 0.938rem;
    margin-top: 1rem;
    width: 100%;
  }
}
</style>
