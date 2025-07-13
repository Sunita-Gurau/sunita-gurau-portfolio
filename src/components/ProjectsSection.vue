<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-white">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Projects data from CV
const projects = ref([
  {
    id: 1,
    title: 'Attorney Management System',
    description:
      'A comprehensive system for managing attorney cases and client information. Features include user authentication, dashboard analytics, and document management.',
    technologies: ['Vue.js', 'Tailwind CSS', 'AWS Amplify', 'AWS S3', 'MSAL Library', 'Chart.js'],
    liveDemo: 'https://ams.convergestack.com',
    github: '',
    icon: '⚖️',
  },
  {
    id: 2,
    title: 'Agentcis CRM',
    description:
      'CRM software for education and migration consultants worldwide to manage their business efficiency. Includes client management, reporting, and workflow automation.',
    technologies: ['Vue.js', 'Semantic UI', 'SCSS', 'Vuex', 'D3.js', 'Docker', 'Laravel'],
    liveDemo: 'https://agentcis.globallynepal.com',
    github: '',
    icon: '📊',
  },
  {
    id: 3,
    title: 'Employee Record Handling System',
    description:
      'Complete employee management system with dashboard, CRUD operations, search, filtering, and export functionality.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Docker', 'Vee Validate'],
    liveDemo: 'https://employee-system-demo.example.com',
    github: 'https://github.com/Sunita-Gurau/employee-record-system',
    icon: '👥',
  },
  {
    id: 4,
    title: 'Movie Listing Website',
    description: 'A responsive movie listing website with search and filtering capabilities.',
    technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://yts-movies-sunita.netlify.app',
    github: 'https://github.com/Sunita-Gurau/movie-listing-website',
    icon: '🎬',
  },
  {
    id: 5,
    title: 'Hamburger Menu',
    description:
      'Interactive hamburger menu component with smooth animations and responsive design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://humburger-menu.netlify.app',
    github: 'https://github.com/Sunita-Gurau/hamburger-menu',
    icon: '🍔',
  },
  {
    id: 6,
    title: 'TODO List',
    description:
      'Feature-rich todo application with task management, categories, and local storage.',
    technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://todo-list-sunita.netlify.app',
    github: 'https://github.com/Sunita-Gurau/todo-list-app',
    icon: '✅',
  },
  {
    id: 7,
    title: 'Twiscode',
    description: 'A coding platform or development tool interface.',
    technologies: ['Vue.js', 'HTML', 'CSS'],
    liveDemo: 'https://twiscode.netlify.app',
    github: 'https://github.com/Sunita-Gurau/twiscode',
    icon: '💻',
  },
  {
    id: 8,
    title: 'Blog Website',
    description: 'A modern blog website with responsive design and content management.',
    technologies: ['Vue.js', 'HTML', 'CSS'],
    liveDemo: 'https://blog-websites.netlify.app',
    github: 'https://github.com/Sunita-Gurau/blog-website',
    icon: '📝',
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
