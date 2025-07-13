<template>
  <div
    class="relative h-screen overflow-hidden flex flex-col items-center justify-start md:justify-center"
  >
    <!-- Split Background -->
    <div class="absolute inset-0 flex">
      <div class="w-1/3 bg-pink-200 h-full"></div>
      <div class="w-2/3 bg-white h-full"></div>
    </div>

    <!-- Header -->
    <header
      class="relative z-20 w-full flex justify-between items-center px-4 md:px-8 py-2 md:py-0"
    >
      <div class="text-2xl font-bold text-pink-600 flex items-center gap-2">
        <span class="">SG</span>
      </div>
      <nav class="hidden md:flex gap-10 text-gray-700 font-medium">
        <RouterLink
          v-for="navItem in navigation"
          :key="navItem.path"
          :to="navItem.path"
          class="hover:text-pink-600 transition"
          active-class="text-pink-700 font-bold"
          :exact="navItem.exact"
        >
          {{ navItem.name }}
        </RouterLink>
      </nav>
      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-gray-700 hover:text-pink-600 transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </header>

    <!-- Overlay Card (Rectangle, only top-left and bottom-right rounded) -->
    <main class="relative z-20 flex flex-col items-center w-full px-2 mt-2 md:mt-16">
      <div class="relative w-full max-w-4xl flex flex-col items-center">
        <!-- Card -->
        <div
          class="relative w-full border-[0.5px] border-white bg-pink-100/80 backdrop-blur-sm flex flex-col md:flex-row items-center justify-center px-2 md:px-12 py-4 md:py-10 animate-fade-in-up rounded-tl-[140px] rounded-br-[140px]"
        >
          <!-- Profile Image (overlapping left side) -->
          <div class="flex justify-center items-center w-full md:w-auto mb-4 md:mb-0">
            <div
              class="md:absolute md:static md:-left-8 md:-left-20 md:top-1/2 md:top-auto md:-translate-y-1/2 md:translate-y-0 z-20"
            >
              <div
                class="rounded-full border-12 border-white shadow-lg overflow-hidden w-28 h-28 md:w-[260px] md:h-[260px] bg-pink-400 flex items-center justify-center mx-auto"
              >
                <img
                  src="../assets/sunita.jpg"
                  alt="Profile"
                  class="object-cover w-24 h-24 md:w-[250px] md:h-[250px] rounded-full"
                />
              </div>
            </div>
          </div>
          <!-- Info Section -->
          <div
            class="flex flex-col justify-center items-center md:items-start w-full md:pl-8 text-center md:text-left z-10"
          >
            <h1 class="text-2xl md:text-5xl font-bold mb-2">
              I'm <span class="text-pink-600">Sunita Gurau</span><br />
              Frontend Developer
            </h1>
            <p class="text-gray-600 text-base md:text-lg mb-4 md:mb-6 max-w-lg mx-auto md:mx-0">
              Draft is a revolutionary mobile app built to help you manage your business easily and
              save your money.
            </p>
            <div
              class="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 md:mb-8 justify-center md:justify-start"
            >
              <button
                class="bg-pink-500 text-white px-5 py-2 md:px-6 md:py-3 rounded-xl font-semibold shadow hover:bg-pink-700 transition flex items-center gap-2 justify-center"
              >
                See Projects
                <svg
                  class="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14M13 18l6-6-6-6" />
                </svg>
              </button>
              <a
                href="/SunitaGurau-CV-SG.pdf"
                target="_blank"
                rel="noopener"
                class="text-pink-600 font-semibold flex items-center justify-center hover:text-pink-700 transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>
          <!-- Blurred Circle Decoration -->
          <div
            class="absolute right-4 bottom-4 md:right-12 md:bottom-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-pink-200 opacity-40 blur-2xl z-0"
          ></div>
        </div>
      </div>

      <!-- Skill Badges -->
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 justify-center mt-4 md:mt-10 animate-fade-in-up delay-200 max-w-4xl mx-auto"
      >
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center bg-pink-100 bg-opacity-80 rounded-xl px-4 md:px-8 py-3 md:py-4 shadow-md"
        >
          <span
            :class="skill.bgColor"
            class="text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-lg md:text-xl font-bold mb-1"
          >
            <span v-if="skill.icon" v-html="skill.icon"></span>
            <span v-else>{{ skill.text }}</span>
          </span>
          <span class="text-gray-800 text-xs md:text-base font-medium text-center">{{
            skill.name
          }}</span>
        </div>
      </div>
    </main>
  </div>

  <!-- Mobile Navigation Menu - Outside main container -->
  <div
    v-show="isMobileMenuOpen"
    class="block md:hidden fixed top-0 left-0 w-full h-full bg-white z-50"
  >
    <div class="flex flex-col items-center justify-center h-full space-y-8 p-8">
      <RouterLink
        v-for="navItem in navigation"
        :key="navItem.path"
        :to="navItem.path"
        @click="closeMobileMenu"
        class="text-2xl font-medium text-gray-700 hover:text-pink-600 transition-colors py-4"
        active-class="text-pink-700 font-bold"
        :exact="navItem.exact"
      >
        {{ navItem.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// Reactive skills data
const skills = ref([
  {
    name: 'JavaScript',
    bgColor: 'bg-yellow-400',
    icon: `<svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#F7DF1E" />
      <text x="7" y="22" font-size="16" font-family="monospace" fill="#222">JS</text>
    </svg>`,
  },
  {
    name: 'Vue 3',
    bgColor: 'bg-green-500',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12L12 2L22 12L12 22L2 12Z" fill="#42b883" />
      <path d="M12 22L2 12H7L12 17L17 12H22L12 22Z" fill="#35495e" />
    </svg>`,
  },
  {
    name: 'React',
    bgColor: 'bg-blue-400',
    icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <ellipse cx="11" cy="11" rx="10" ry="4" stroke="#61DAFB" stroke-width="2" />
        <ellipse cx="11" cy="11" rx="4" ry="10" stroke="#61DAFB" stroke-width="2" />
        <ellipse cx="11" cy="11" rx="10" ry="4" transform="rotate(60 11 11)" stroke="#61DAFB" stroke-width="2" />
        <ellipse cx="11" cy="11" rx="10" ry="4" transform="rotate(120 11 11)" stroke="#61DAFB" stroke-width="2" />
        <circle cx="11" cy="11" r="2.5" fill="#61DAFB" />
      </g>
    </svg>`,
  },
  {
    name: 'Git',
    bgColor: 'bg-red-600',
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#F05133" />
      <path d="M5 15L10 5L15 15H5Z" fill="#fff" />
    </svg>`,
  },
  {
    name: 'Pinia',
    bgColor: 'bg-yellow-500',
    text: 'Pi',
  },
  {
    name: 'Vuex',
    bgColor: 'bg-blue-500',
    text: 'Vx',
  },
])

// Navigation data
const navigation = ref([
  { name: 'Home', path: '/', exact: true },
  { name: 'Projects', path: '/projects', exact: false },
  { name: 'About', path: '/about', exact: false },
  { name: 'Content', path: '/content', exact: false },
])

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  console.log('Toggle mobile menu clicked, current state:', isMobileMenuOpen.value)
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  console.log('New state:', isMobileMenuOpen.value)
}

const closeMobileMenu = () => {
  console.log('Closing mobile menu')
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-in-out both;
}

.delay-200 {
  animation-delay: 0.2s;
}
</style>
