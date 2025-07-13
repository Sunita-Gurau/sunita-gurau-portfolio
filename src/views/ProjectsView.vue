<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-white">
    <!-- Header -->
    <header class="relative z-20 w-full flex justify-between items-center px-4 md:px-8 py-4">
      <RouterLink
        to="/"
        class="text-2xl font-bold text-pink-600 flex items-center gap-2 hover:text-pink-700 transition-colors cursor-pointer"
      >
        <span class="">SG</span>
      </RouterLink>
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

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          My <span class="text-pink-600">Projects</span>
        </h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          A collection of projects showcasing my skills in Vue.js, modern web development, and user
          experience design.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="bg-white rounded-xl shadow-md overflow-visible hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105 hover:-translate-y-2 animate-fade-in-up will-change-transform"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Project Image -->
          <div
            class="h-32 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center overflow-hidden group"
          >
            <div
              class="text-4xl text-pink-400 opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"
            >
              {{ project.icon }}
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-4 overflow-visible">
            <h3 class="text-lg font-bold text-gray-700 mb-2 line-clamp-2">{{ project.title }}</h3>
            <p class="text-gray-500 text-xs mb-3 line-clamp-2">{{ project.description }}</p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-1 mb-3">
              <span
                v-for="tech in project.technologies.slice(0, 3)"
                :key="tech"
                class="px-2 py-1 bg-pink-50 text-pink-600 text-xs rounded-full font-medium hover:bg-pink-100 hover:scale-110 transition-all duration-200 will-change-transform"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.technologies.length > 3"
                class="relative group px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-full font-medium cursor-help hover:bg-gray-100 hover:scale-110 transition-all duration-200 will-change-transform"
              >
                +{{ project.technologies.length - 3 }}

                <!-- Hover Tooltip for remaining technologies -->
                <div
                  class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-pink-100 text-pink-800 text-xs rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 min-w-max max-w-48"
                >
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="tech in project.technologies.slice(3)"
                      :key="tech"
                      class="px-2 py-1 bg-pink-200 text-pink-700 rounded-full"
                    >
                      {{ tech }}
                    </span>
                  </div>
                  <div
                    class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-pink-100"
                  ></div>
                </div>
              </span>
            </div>

            <!-- Project Links -->
            <div class="flex gap-2">
              <a
                v-if="project.liveDemo"
                :href="project.liveDemo"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 bg-pink-400 text-white text-center py-1.5 px-3 rounded-lg font-medium hover:bg-pink-500 hover:scale-105 transition-all duration-200 text-xs will-change-transform"
              >
                Live Demo
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 bg-gray-50 text-gray-600 text-center py-1.5 px-3 rounded-lg font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-200 text-xs will-change-transform"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Mobile Navigation Menu -->
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
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// Navigation data
const navigation = ref([
  { name: 'Home', path: '/', exact: true },
  { name: 'Projects', path: '/projects', exact: false },
  { name: 'Experience', path: '/experience', exact: false },
  { name: 'Education', path: '/education', exact: false },
  { name: 'Contact', path: '/contact', exact: false },
])

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const projects = ref([
  {
    id: 1,
    title: 'Attorney Management System',
    description:
      'A comprehensive system for managing attorney cases and client information. Features include user authentication, dashboard analytics, and document management.',
    technologies: ['Vue.js', 'Tailwind CSS', 'AWS Amplify', 'AWS S3', 'MSAL Library', 'Chart.js'],
    liveDemo: '',
    github: '',
    icon: '⚖️',
  },
  {
    id: 2,
    title: 'Agentcis CRM',
    description:
      'CRM software for education and migration consultants worldwide to manage their business efficiency. Includes client management, reporting, and workflow automation.',
    technologies: ['Vue.js', 'Semantic UI', 'SCSS', 'Vuex', 'D3.js', 'Docker', 'Laravel'],
    liveDemo: '',
    github: '',
    icon: '📊',
  },
  {
    id: 3,
    title: 'Employee Record Handling System',
    description:
      'Complete employee management system with dashboard, CRUD operations, search, filtering, and export functionality.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Docker', 'Vee Validate'],
    liveDemo: '',
    github: '',
    icon: '👥',
  },
  {
    id: 4,
    title: 'Movie Listing Website',
    description: 'A responsive movie listing website with search and filtering capabilities.',
    technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://yts-movies-sunita.netlify.app',
    github: 'https://github.com/Sunita-Gurau/Movie-app',
    icon: '🎬',
  },
  {
    id: 5,
    title: 'JoBins',
    description:
      'Interactive hamburger menu component with smooth animations and responsive design.',
    technologies: ['vue3', 'tailwindcss', 'JavaScript', 'vuex', 'axios'],
    liveDemo: 'https://jobinss.netlify.app/dashboard',
    github: 'https://github.com/Sunita-Gurau/JoBins',
    icon: '💻',
  },
  {
    id: 6,
    title: 'PokeDex',
    description:
      'Pokedex is a frontend-only application that lists all Pokémon and their details. The app is designed for users to explore Pokémon in an intuitive, interactive way.',
    technologies: ['Vue 3', 'Pinia', 'Tailwind CSS', 'JavaScript'],
    liveDemo: 'https://pokeexplorerr.netlify.app/pokemon',
    github: 'https://github.com/Sunita-Gurau/PokeExplorer',
    icon: '🐱',
  },
])
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

/* Optimize text rendering */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* Card hover effects */
.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
