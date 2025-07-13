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
          Work <span class="text-pink-600">Experience</span>
        </h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          My professional journey in software development, showcasing my growth and contributions
          across different roles and projects.
        </p>
      </div>

      <!-- Experience Timeline -->
      <section class="max-w-6xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-pink-200 transform -translate-x-1/2"
          ></div>

          <div class="space-y-12">
            <div
              v-for="(experience, index) in workExperience"
              :key="experience.id"
              class="relative animate-fade-in-up will-change-transform"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <!-- Timeline dot -->
              <div
                class="absolute left-1/2 top-0 w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 transform -translate-x-1/2"
              >
                <span class="text-lg md:text-xl">{{ experience.icon }}</span>
              </div>

              <!-- Experience card -->
              <div
                class="w-full max-w-sm bg-pink-50 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-pink-100 hover:scale-105 hover:-translate-y-1 mx-4 md:mx-0"
                :class="[index % 2 === 0 ? 'md:mr-auto md:ml-30' : 'md:ml-auto md:mr-30']"
                style="
                  width: calc(100% - 2rem);
                  @media (min-width: 768px) {
                    width: calc(50% - 0.5rem);
                  }
                "
              >
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-lg font-bold text-gray-800">{{ experience.position }}</h3>
                  <span
                    class="text-xs text-pink-600 font-semibold bg-pink-50 px-2 py-1 rounded-full"
                  >
                    {{ experience.duration }}
                  </span>
                </div>
                <p class="text-pink-600 font-semibold mb-1">{{ experience.company }}</p>
                <p class="text-gray-600 mb-3">{{ experience.location }}</p>

                <!-- Project details -->
                <div
                  v-for="project in experience.projects"
                  :key="project.title"
                  class="mb-4 last:mb-0"
                >
                  <h4 class="font-semibold text-gray-800 mb-2 text-base">{{ project.title }}</h4>
                  <p class="text-gray-500 text-sm leading-relaxed">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

// Work experience data from CV (without technologies)
const workExperience = ref([
  {
    id: 1,
    company: 'Globally Nepal',
    position: 'Software Engineer',
    duration: 'Feb 2024 - Present',
    location: 'Kumaripati Lalitpur',
    icon: '💼',
    projects: [
      {
        title: 'Agentcis',
        description:
          'CRM software for education and migration consultants worldwide to manage their business efficiency.',
      },
    ],
  },
  {
    id: 2,
    company: 'ConvergeStack Pvt. Ltd.',
    position: 'Application Developer I',
    duration: 'July 2023 - Jan 2025',
    location: 'Sankhamul Kathmandu',
    icon: '💼',
    projects: [
      {
        title: 'Attorney Management System (AMS)',
        description: 'A comprehensive system for managing attorney cases and client information.',
      },
    ],
  },
  {
    id: 3,
    company: 'Globally Nepal',
    position: 'Associate Software Engineer',
    duration: 'Aug 2022 - June 2023',
    location: 'Kumaripati Lalitpur',
    icon: '🚀',
    projects: [
      {
        title: 'Agentcis',
        description:
          'CRM software for education and migration consultants worldwide to manage their business efficiency.',
      },
    ],
  },
  {
    id: 4,
    company: 'Globally Nepal',
    position: 'Software Engineer Intern',
    duration: 'May 2022 - July 2022',
    location: 'Kumaripati Lalitpur',
    icon: '🎯',
    projects: [
      {
        title: 'Employee Record Handling System',
        description:
          'Complete employee management system with dashboard, CRUD operations, search, filtering, and export functionality.',
      },
    ],
  },
])
</script>

<style scoped>
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
</style>
