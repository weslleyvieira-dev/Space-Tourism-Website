<script setup>
import { ref } from "vue";
import crewData from "../data.json";

const crew = ref(crewData.crew);
const selectedIndex = ref(0);
const currentMember = ref(crew.value[selectedIndex.value]);

function selectMember(index) {
  selectedIndex.value = index;
  currentMember.value = crew.value[index];
}
</script>

<template>
  <main>
    <div class="crew-container">
      <p class="text-preset-5">
        <strong class="text-preset-5">02</strong>Meet Your Crew
      </p>
      <div class="content">
        <div class="content-explanation">
          <transition name="fade" mode="out-in">
            <div :key="selectedIndex" class="explanation">
              <h2 class="text-preset-4">{{ currentMember.role }}</h2>
              <h1 class="text-preset-3">{{ currentMember.name }}</h1>
              <p class="text-preset-9">{{ currentMember.bio }}</p>
            </div>
          </transition>
          <div class="pagination">
            <ul class="crew-members">
              <li
                v-for="(member, index) in crew"
                :key="member.name"
                :class="{ active: index === selectedIndex }"
                @click="selectMember(index)"
              ></li>
            </ul>
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <picture :key="selectedIndex">
            <source
              media="(min-width: 1024px)"
              :srcset="currentMember.images.png"
            />
            <source
              media="(max-width: 1024px)"
              :srcset="currentMember.images.webp"
            />
            <img
              :src="currentMember.images.png"
              :alt="currentMember.name"
              class="crew-image"
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

.crew-container {
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

.content-explanation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;
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
  margin-bottom: 3rem;
}

.crew-members {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.crew-members li {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.17;
}

.crew-members li:hover {
  cursor: pointer;
  opacity: 0.5;
}

.crew-members li.active {
  opacity: 1;
}

.content picture {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.crew-image {
  max-width: 540px;
  -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  -webkit-mask-repeat: no-repeat;
  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  mask-repeat: no-repeat;
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

  .crew-container {
    padding: 2.5rem;
    width: 100%;
  }

  .text-preset-5 {
    font-size: 1.25rem;
  }

  .content {
    flex-direction: column;
  }

  .content-explanation {
    text-align: center;
    padding: 2.5rem 5.5rem 0;
  }

  .text-preset-4 {
    font-size: 1.5rem;
  }

  .text-preset-3 {
    font-size: 2.5rem;
  }

  .text-preset-9 {
    font-size: 1rem;
  }

  .pagination {
    align-self: center;
    margin: 2.5rem 0 2rem;
  }

  .crew-image {
    height: 35rem;
  }

  .crew-members {
    gap: 1rem;
  }

  .crew-members li {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 767px) {
  main {
    padding-top: 5.5rem;
  }

  .crew-container {
    padding: 1.5rem;
  }

  .text-preset-5 {
    font-size: 1rem;
    letter-spacing: 0.15rem;
    text-align: center;
  }

  .content-explanation {
    width: 100%;
    padding: 2.5rem 0 0;
  }

  .text-preset-4 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  .text-preset-3 {
    font-size: 1.5rem;
  }

  .text-preset-9 {
    font-size: 0.94rem;
  }

  .pagination {
    margin: 3.5rem 0 0;
  }

  .crew-image {
    height: 21.25rem;
  }
}
</style>
