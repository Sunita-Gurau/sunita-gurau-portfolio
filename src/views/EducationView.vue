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
          <span class="text-pink-600">Education</span> & Certifications
        </h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          My academic background and professional certifications that have shaped my journey in web
          development.
        </p>
      </div>

      <!-- Education and Certifications Container -->
      <div class="md:grid md:grid-cols-2 md:gap-12 md:items-start">
        <!-- Education Section -->
        <section class="mb-16 md:mb-0">
          <div class="max-w-4xl md:max-w-none mx-auto">
            <div class="relative">
              <!-- Timeline line -->
              <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-200"></div>

              <div class="space-y-8">
                <div
                  v-for="(education, index) in educationData"
                  :key="education.id"
                  class="relative flex items-start gap-6 animate-fade-in-up will-change-transform"
                  :style="{ animationDelay: `${index * 0.2}s` }"
                >
                  <!-- Timeline dot -->
                  <div
                    class="flex-shrink-0 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                  >
                    <span class="text-xl">{{ education.icon }}</span>
                  </div>

                  <!-- Content card -->
                  <div
                    class="flex-1 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105 hover:-translate-y-1"
                  >
                    <div class="flex items-center justify-between mb-3">
                      <h3 class="text-xl font-bold text-gray-800">{{ education.degree }}</h3>
                      <span
                        class="text-sm text-pink-600 font-semibold bg-pink-50 px-3 py-1 rounded-full"
                      >
                        {{ education.duration }}
                      </span>
                    </div>
                    <p class="text-pink-600 font-semibold mb-2">{{ education.institution }}</p>
                    <p class="text-gray-500 text-sm">{{ education.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Certifications Section with Creative Display -->
        <section>
          <!-- Creative 3D Carousel Container -->
          <div class="relative max-w-6xl md:max-w-none mx-auto">
            <!-- 3D Carousel Track -->
            <div
              class="relative h-96 overflow-hidden"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
            >
              <div
                class="flex transition-all duration-1000 ease-in-out"
                :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
              >
                <div
                  v-for="(cert, index) in certifications"
                  :key="cert.id"
                  class="flex-shrink-0 w-full px-4"
                >
                  <div class="relative h-full flex items-center justify-center">
                    <!-- 3D Certificate Card -->
                    <div
                      class="relative w-full max-w-sm transform transition-all duration-800 ease-in-out hover:scale-110 hover:-rotate-2 will-change-transform"
                      :class="
                        index === currentSlide ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                      "
                    >
                      <!-- Card Background with Gradient -->
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-pink-50 rounded-2xl shadow-2xl transform rotate-3"
                      ></div>
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-transparent to-pink-100/20 rounded-2xl"
                      ></div>

                      <!-- Main Card Content -->
                      <div
                        class="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-100/50"
                      >
                        <!-- Certificate Icon with Floating Effect -->
                        <div class="relative mb-6">
                          <div
                            class="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-300 rounded-full blur-xl opacity-30 animate-pulse"
                          ></div>
                          <div
                            class="relative w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-lg"
                          >
                            <span class="text-2xl">{{ cert.icon }}</span>
                          </div>
                        </div>

                        <!-- Certificate Details -->
                        <div class="text-center space-y-3">
                          <h3 class="text-lg font-bold text-gray-800 line-clamp-2 leading-tight">
                            {{ cert.name }}
                          </h3>
                          <div
                            class="inline-flex items-center gap-2 bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold"
                          >
                            <span class="w-2 h-2 bg-pink-500 rounded-full"></span>
                            {{ cert.issuer }}
                          </div>
                          <p class="text-gray-600 text-xs font-medium">{{ cert.date }}</p>
                          <p class="text-gray-500 text-xs line-clamp-3 leading-relaxed">
                            {{ cert.description }}
                          </p>

                          <!-- Interactive View Button -->
                          <a
                            v-if="cert.link"
                            :href="cert.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-semibold rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                          >
                            <span>View Certificate</span>
                            <svg
                              class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                          </a>
                        </div>

                        <!-- Decorative Elements -->
                        <div
                          class="absolute top-2 right-2 w-8 h-8 bg-pink-100 rounded-full opacity-50"
                        ></div>
                        <div
                          class="absolute bottom-2 left-2 w-6 h-6 bg-pink-200 rounded-full opacity-30"
                        ></div>
                      </div>

                      <!-- Floating Particles -->
                      <div
                        class="absolute -top-2 -right-2 w-4 h-4 bg-pink-300 rounded-full opacity-60 animate-bounce"
                      ></div>
                      <div
                        class="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-pulse"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Creative Slider Indicators -->
            <div class="flex justify-center mt-8 space-x-3">
              <button
                v-for="(_, index) in totalSlides"
                :key="index"
                @click="goToSlide(index)"
                class="relative group"
              >
                <div
                  class="w-4 h-4 rounded-full transition-all duration-300 transform group-hover:scale-125"
                  :class="
                    index === currentSlide
                      ? 'bg-pink-600 shadow-lg shadow-pink-300'
                      : 'bg-gray-300 hover:bg-gray-400'
                  "
                ></div>
                <div
                  v-if="index === currentSlide"
                  class="absolute inset-0 w-4 h-4 rounded-full bg-pink-400 animate-ping opacity-30"
                ></div>
              </button>
            </div>
          </div>
        </section>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'

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

// Slider state
const currentSlide = ref(0)
const slideWidth = ref(100)
const autoPlayInterval = ref<number | null>(null)

// Computed properties for slider - always show one at a time
const totalSlides = computed(() => certifications.value.length)
const maxSlides = computed(() => totalSlides.value - 1)

// Slider functions
const nextSlide = () => {
  if (currentSlide.value < maxSlides.value) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Auto-play functionality
const startAutoPlay = () => {
  autoPlayInterval.value = window.setInterval(() => {
    nextSlide()
  }, 4000) // Change slide every 4 seconds
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

// Pause auto-play on hover
const handleMouseEnter = () => {
  stopAutoPlay()
}

const handleMouseLeave = () => {
  startAutoPlay()
}

onMounted(() => {
  slideWidth.value = 100
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})

// Education data from CV
const educationData = ref([
  {
    id: 1,
    degree: 'B.Sc. (Hons) Information Technology',
    institution: 'Lord Buddha Education Foundation',
    duration: '2018 - 2022',
    icon: '🎓',
  },
  {
    id: 2,
    degree: 'Science (Biology)',
    institution: 'MadhyaBindu Multiple Campus',
    duration: '2016 - 2018',
    icon: '📚',
  },
  {
    id: 3,
    degree: 'SLC (School Leaving Certificate)',
    institution: 'NAWALPUR ACADEMY',
    duration: '2016',
    icon: '📚',
  },
])

const certifications = ref([
  {
    id: 1,
    name: 'AWS for Beginners: First step to start your Cloud Computing career',
    issuer: 'Simplilearn',
    date: '2024',
    description: 'Comprehensive introduction to AWS cloud computing fundamentals and services.',
    link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjE4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjczNjA0MF8xNzE4NjA3MjAwLnBuZyIsInVzZXJuYW1lIjoiU3VuaXRhIGd1cmF1In0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6001%2FAWS-for-Beginners%3A-First-step-to-start-your-Cloud-Computing-career%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1248866618698452932&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1kstyNDLyczL1k%2FVzw91T%2FYINfMr9U4CAAGJvx8lAAAA',
    icon: '☁️',
  },
  {
    id: 2,
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2024',
    description:
      'Certification in creating responsive web designs using HTML, CSS, and modern web development practices.',
    link: 'https://www.freecodecamp.org/certification/Sunita-Gurau/responsive-web-design',
    icon: '🌐',
  },
  {
    id: 3,
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2024',
    description:
      'Advanced JavaScript programming including algorithms, data structures, and ES6 features.',
    link: 'https://www.linkedin.com/in/sunita-gurau/details/certifications/1718174662951/single-media-viewer/?profileId=ACoAADkeQzQBEmqpniKkd2uw2pXlcxeozy9csTA',
    icon: '⚡',
  },
])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
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

/* Custom scrollbar for slider */
.overflow-hidden::-webkit-scrollbar {
  display: none;
}

.overflow-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
