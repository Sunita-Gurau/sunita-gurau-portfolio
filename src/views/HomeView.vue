<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <div
      class="relative min-h-screen overflow-visible flex flex-col items-center justify-start md:justify-center"
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
        <RouterLink
          to="/"
          class="text-2xl md:text-5xl font-bold text-pink-600 flex items-center gap-2 hover:text-pink-700 transition-colors cursor-pointer"
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

      <!-- Overlay Card (Rectangle, only top-left and bottom-right rounded) -->
      <main
        class="relative z-20 flex flex-col items-center w-full px-2 mt-2 md:mt-16 pb-8 md:pb-16"
      >
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
                    src="/sg.png"
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
                Passionate frontend developer with 2+ years of experience crafting modern web
                applications. Specialized in Vue.js, React, and responsive design. Available for
                remote opportunities and excited to bring creative solutions to innovative projects.
              </p>
              <div
                class="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 md:mb-8 justify-center md:justify-start"
              >
                <RouterLink
                  to="/projects"
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
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </RouterLink>
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
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 justify-center mt-4 md:mt-10 animate-fade-in-up delay-200 max-w-4xl mx-auto"
        >
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="relative flex flex-col items-center bg-pink-100/80 backdrop-blur-md rounded-2xl pt-2 pb-4 px-2 md:px-4 min-w-[120px] min-h-[80px] shadow-md"
          >
            <!-- Icon Circle -->
            <div class="absolute -top-6 flex justify-center w-full">
              <div
                :class="[
                  'flex items-center justify-center w-12 h-12 rounded-full border-8 border-white shadow-lg overflow-hidden',
                  skill.bg,
                ]"
              >
                <span v-if="skill.icon" v-html="skill.icon"></span>
              </div>
            </div>
            <!-- Label -->
            <span class="mt-6 text-gray-800 text-sm md:text-base font-medium text-center">{{
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
  console.log('Toggle mobile menu clicked, current state:', isMobileMenuOpen.value)
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  console.log('New state:', isMobileMenuOpen.value)
}

const closeMobileMenu = () => {
  console.log('Closing mobile menu')
  isMobileMenuOpen.value = false
}

// Reactive skills data
const skills = ref([
  {
    name: 'JavaScript',
    icon: `<svg viewBox="0 0 630 630" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M423 492c13 21 30 36 60 36 25 0 41-12 41-29 0-20-16-27-44-39l-15-6c-43-18-71-41-71-89 0-44 34-78 87-78 38 0 65 13 84 47l-46 30c-10-18-21-25-38-25-17 0-28 11-28 25 0 18 11 25 37 36l15 6c51 22 79 44 79 93 0 53-42 82-98 82-55 0-90-26-107-60zm-209 5c9 16 17 29 37 29 19 0 31-7 31-36V288h58v202c0 60-35 87-86 87-46 0-73-24-87-54z" fill="#222"/></svg>`,
    bg: 'bg-[#f7df1e]',
  },
  {
    name: 'Vue',
    icon: `<svg width="24" height="24" viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg"><polygon fill="#41b883" points="130.88,87.09 52.35,226.69 0,226.69 130.88,0 261.76,226.69 209.41,226.69"/><polygon fill="#34495e" points="130.88,87.09 87.09,226.69 174.67,226.69"/></svg>`,
    bg: 'bg-[#41b883]',
  },
  {
    name: 'React',
    icon: `<svg width="24" height="24" viewBox="0 0 841.9 595.3" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="40"><ellipse cx="420.9" cy="296.5" rx="400" ry="180"/><ellipse cx="420.9" cy="296.5" rx="400" ry="180" transform="rotate(60 420.9 296.5)"/><ellipse cx="420.9" cy="296.5" rx="400" ry="180" transform="rotate(120 420.9 296.5)"/></g><circle cx="420.9" cy="296.5" r="50" fill="#fff"/></svg>`,
    bg: 'bg-[#61dafb]',
  },
  {
    name: 'Git',
    icon: `<svg width="24" height="24" viewBox="0 0 97 97" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M92.71 44.408L52.592 4.29a5.09 5.09 0 0 0-7.197 0l-7.13 7.13 9.13 9.13a7.065 7.065 0 0 1 8.98 8.98l8.77 8.77a7.065 7.065 0 1 1-4.285 4.285l-8.77-8.77v23.065a7.065 7.065 0 1 1-5 0V33.845a7.065 7.065 0 0 1-3.98-9.13l-9.13-9.13-24.29 24.29a5.09 5.09 0 0 0 0 7.197l40.118 40.118a5.09 5.09 0 0 0 7.197 0l40.118-40.118a5.09 5.09 0 0 0 0-7.197z"/></svg>`,
    bg: 'bg-[#F05133]',
  },
  {
    name: 'Pinia',
    icon: `<svg width="24" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="32" rx="10" ry="10" fill="#fff"/></svg>`,
    bg: 'bg-[#ffe066]',
  },
  {
    name: 'Vuex',
    icon: `<svg width="24" height="24" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><polygon fill="#41b883" points="20,30 10,10 0,30"/><polygon fill="#34495e" points="40,30 30,10 20,30"/></svg>`,
    bg: 'bg-[#34495e]',
  },
])

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

// Scroll to projects section
const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects-section')
  if (projectsSection) {
    projectsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// Experience data from CV
const experiences = ref([
  {
    id: 1,
    company: 'ConvergeStack Pvt. Ltd.',
    position: 'Application Developer I',
    duration: 'July 2023 - Present',
    location: 'Sankhamul Kathmandu',
    projects: [
      {
        title: 'Attorney Management System (AMS)',
        description: 'A comprehensive system for managing attorney cases and client information.',
        responsibilities: [
          'Designing and implementing a user-friendly interface',
          'API integration',
          'Successfully deployed projects using AWS Amplify',
          'Integrated Storybook onto AWS S3 platform with well-crafted components',
          'Implemented strong user authentication using MSAL library',
          'Exploring problem solving approaches',
          'Requirement gathering and research on frontend technologies',
        ],
        technologies: [
          'HTML',
          'Tailwind CSS',
          'AWS Amplify',
          'AWS S3',
          'Vee Validate',
          'vueform-multiselect',
          'Vue.js',
          'MSAL Library',
          'Chart.js',
          'Typo.js Spellchecker',
          'date-fns',
        ],
      },
    ],
  },
  {
    id: 2,
    company: 'Globally Nepal',
    position: 'Associate Software Engineer',
    duration: 'Aug 2022 - June 2023',
    location: 'Kumaripati Lalitpur',
    projects: [
      {
        title: 'Agentcis',
        description:
          'CRM software for education and migration consultants worldwide to manage their business efficiency.',
        responsibilities: [
          'Implementing wireframe to html page',
          'API integration',
          'Debug and troubleshoot',
          'Bugs fixes and code refactor',
          'Research on frontend technologies',
        ],
        technologies: [
          'HTML',
          'Semantic UI',
          'SCSS',
          'Vuex',
          'D3.js',
          'Docker',
          'Vue.js',
          'PHP',
          'Laravel',
        ],
      },
    ],
  },
  {
    id: 3,
    company: 'Globally Nepal',
    position: 'Software Engineer Intern',
    duration: 'May 2022 - July 2022',
    location: 'Kumaripati Lalitpur',
    projects: [
      {
        title: 'Employee Record Handling System',
        description:
          'Complete employee management system with dashboard, CRUD operations, search, filtering, and export functionality.',
        responsibilities: [
          'Designing and implementing a user-friendly interface for dashboard, adding, editing, profile viewing, searching, filtering, exporting and deleting employee records',
          'API integration',
          'Exploring problem solving approaches',
          'Requirement gathering and research on frontend technologies',
        ],
        technologies: [
          'HTML',
          'Tailwind CSS',
          'Docker',
          'Vee Validate',
          'vueform-multiselect',
          'Vue.js',
        ],
      },
    ],
  },
])

// Education data from CV
const educationData = ref([
  {
    id: 1,
    degree: 'BACHELOR DEGREE',
    institution: 'LORD BUDDHA EDUCATION FOUNDATION',
    year: '2022',
    icon: '🎓',
    details: ['Stream: B.Sc. (Hons).IT'],
  },
  {
    id: 2,
    degree: 'HIGH SCHOOL',
    institution: 'MADHYABINDU MULTIPLE CAMPUS',
    year: '2018',
    icon: '🏫',
    details: ['Stream: Science (Biology)'],
  },
  {
    id: 3,
    degree: 'SLC',
    institution: 'NAWALPUR ACADEMY',
    year: '2016',
    icon: '📚',
    details: ['Major: Mathematics'],
  },
])

// Certifications from CV
const certifications = ref([
  {
    id: 1,
    name: 'AWS for Beginners',
    issuer: 'Simplilearn',
  },
  {
    id: 2,
    name: 'React JS Tutorial',
    issuer: 'LinkedIn Learning',
  },
  {
    id: 3,
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
  },
])

// Contact information from CV
const contactInfo = ref([
  {
    type: 'email',
    label: 'Email',
    value: 'sunitagurau.1999@gmail.com',
    icon: '📧',
    action: 'mailto:sunitagurau.1999@gmail.com',
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+977-9818448321',
    icon: '📱',
    action: 'tel:+977-9818448321',
  },
  {
    type: 'location',
    label: 'Location',
    value: 'Nakhipot-14, Lalitpur',
    icon: '📍',
    action: null,
  },
  {
    type: 'github',
    label: 'GitHub',
    value: 'github.com/Sunita-Gurau',
    icon: '💻',
    action: 'https://github.com/Sunita-Gurau',
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sunita-gurau',
    icon: '🔗',
    action: 'https://linkedin.com/in/sunita-gurau',
  },
])

// Technical skills summary
const technicalSkills = ref([
  {
    category: 'Frontend',
    technologies: ['Vue.js', 'React', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Tailwind', 'Bootstrap'],
  },
  {
    category: 'Tools & Others',
    technologies: ['Git', 'Docker', 'Jira', 'Postman', 'Agile', 'AWS'],
  },
])

// Contact form
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Handle contact click
const handleContactClick = (contact: { action: string | null }) => {
  if (contact.action) {
    window.open(contact.action, '_blank')
  }
}

// Handle contact form submission
const handleContactSubmit = () => {
  // Here you would typically send the form data to your backend
  // For now, we'll just log it and show an alert
  console.log('Contact form submitted:', contactForm.value)
  alert('Thank you for your message! I will get back to you soon.')

  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
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
</style>
