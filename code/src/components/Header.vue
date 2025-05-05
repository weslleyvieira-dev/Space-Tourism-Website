<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="logo">
        <template v-if="route.name === 'Home'">
          <img
            src="/assets/shared/logo.svg"
            alt="Space Tourism Website Logo"
          />
        </template>
        <template v-else>
          <router-link to="/" class="nav-link">
            <img
              src="/assets/shared/logo.svg"
              alt="Space Tourism Website Logo"
            />
          </router-link>
        </template>
        <div class="line"></div>
      </div>
      <div class="menu-icon" @click="toggleMenu">
        <img
          src="/assets/shared/icon-hamburger.svg"
          alt="Menu Icon"
        />
      </div>
      <div class="pages" :class="{ 'menu-open': isMenuOpen }">
        <ul class="nav-links" :class="{ 'menu-open': isMenuOpen }">
          <img
            src="/assets/shared/icon-close.svg"
            alt="Close Icon"
            v-on:click="toggleMenu"
            class="close-icon"
          />
          <router-link to="/" v-on:click="toggleMenu" class="nav-link">
            <li :class="{ active: route.name === 'Home' }">
              <p class="text-preset-8">
                <strong class="text-preset-8">00</strong> HOME
              </p>
            </li>
          </router-link>
          <router-link
            to="/destination"
            v-on:click="toggleMenu"
            class="nav-link"
          >
            <li :class="{ active: route.name === 'Destination' }">
              <p class="text-preset-8">
                <strong class="text-preset-8">01</strong> DESTINATION
              </p>
            </li>
          </router-link>
          <router-link to="/crew" v-on:click="toggleMenu" class="nav-link">
            <li :class="{ active: route.name === 'Crew' }">
              <p class="text-preset-8">
                <strong class="text-preset-8">02</strong> CREW
              </p>
            </li>
          </router-link>
          <router-link
            to="/technology"
            v-on:click="toggleMenu"
            class="nav-link"
          >
            <li :class="{ active: route.name === 'Technology' }">
              <p class="text-preset-8">
                <strong class="text-preset-8">03</strong> TECHNOLOGY
              </p>
            </li>
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: fixed;
  margin-top: 2.5rem;
  left: 0;
  width: -webkit-fill-available;
  width: -moz-available;
  z-index: 1;
}

.logo {
  display: flex;
  align-items: center;
  width: clamp(20%, 46rem, 52%);
  height: 3rem;
  padding: 0;
  padding-left: 4rem;
  resize: none;
  box-sizing: border-box;
  gap: 4rem;
  position: relative;
  z-index: 2;
  margin-right: -2rem;
}

.logo img {
  display: block;
  width: 3rem;
  height: 3rem;
}

.menu-icon, .close-icon {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 3;
}

.menu-icon img, .close-icon img {
  width: 1.5rem;
  height: 1.5rem;
}

.line {
  height: 1px;
  width: -moz-available;
  width: -webkit-fill-available;
  background-color: white;
  opacity: 0.25;
}

.pages {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 6rem;
  width: clamp(50%, 46rem, 80%);
  padding: 0 4rem;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255, 0.05);
  backdrop-filter: blur(10rem);
}

.nav-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 3rem;
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.nav-links li {
  display: flex;
  align-items: center;
  height: 100%;
  width: max-content;
  box-sizing: border-box;
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.5s ease-in-out;
  cursor: pointer;
}

.nav-links li:hover {
  border-bottom-color: rgb(255, 255, 255, 0.5);
}

.nav-links li.active {
  border-bottom-color: white;
}

.nav-link {
  height: 100%;
  text-decoration: none;
}

.nav-links li p {
  text-decoration: none;
}

.nav-links li p strong {
  font-weight: bold;
  padding-right: 0.75rem;
}

@media (max-width: 1023px) {
  .navbar {
    top: 0;
  }

  .logo {
    width: 16%;
    padding: 0 2.5rem;
    margin-right: 0;
    gap: 0;
  }

  .line {
    display: none;
  }

  .pages {
    width: 84%;
    padding: 0 2.5rem 0 5.5rem;
    resize: none;
  }

  .nav-links {
    padding-left: 0%;
  }

  .nav-links li p strong {
    padding-right: 0.5rem;
  }
}

@media (max-width: 767px) {
  .navbar {
    top: 0;
    padding: 1.5rem;
  }

  .logo {
    width: auto;
    padding: 0;
  }

  .logo img {
    width: 2.5rem;
    height: 2.5rem;
  }

  .menu-icon {
    display: block;
  }

  .close-icon {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    padding: 2rem 1.5rem;
    align-self: end;
  }

  .pages {
    visibility: hidden;
    display: flex;
    justify-content: start;
    align-items: start;
    height: 100vh;
    width: 68vw;
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    padding: 0;
    padding-left: 2rem;
    background-color: rgb(11, 13, 23, 0.15);
    transition: all 1s ease;
    transform: translateX(100%);
  }

  .pages.menu-open {
    visibility: visible;
    transform: translateX(0);
  }

  .nav-links {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    height: auto;
    width: 100%;
  }

  .nav-link {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-links li {
    width: 100%;
    border-bottom: none;
    border-right: 3px solid transparent;
  }

  .nav-links li.active {
    border-right-color: white;
  }
}
</style>
