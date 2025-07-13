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
          Get in <span class="text-pink-600">Touch</span>
        </h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Let's discuss your next project or just say hello. I'm always open to new opportunities
          and collaborations.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <section class="space-y-8 h-fit">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>

          <!-- Contact Cards -->
          <div class="space-y-4">
            <div
              v-for="(contact, index) in contactInfo"
              :key="contact.id"
              class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105 hover:-translate-y-2 animate-fade-in-up will-change-transform"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center"
                >
                  <svg
                    v-if="contact.icon === 'email'"
                    class="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <svg
                    v-else-if="contact.icon === 'linkedin'"
                    class="w-6 h-6 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                  <svg
                    v-else-if="contact.icon === 'location'"
                    class="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <svg
                    v-else-if="contact.icon === 'github'"
                    class="w-6 h-6 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-800 mb-1">{{ contact.title }}</h3>
                  <a
                    v-if="contact.link"
                    :href="contact.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-pink-600 hover:text-pink-700 font-medium transition-colors"
                  >
                    {{ contact.value }}
                  </a>
                  <p v-else class="text-gray-600">{{ contact.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Form -->
        <section
          class="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 animate-fade-in-up will-change-transform h-fit"
          style="animationdelay: 0.2s"
        >
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Send Message</h2>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2"
                  >First Name</label
                >
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2"
                  >Last Name</label
                >
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2"
                >Subject</label
              >
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="1"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>
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

// Contact information from CV
const contactInfo = ref([
  {
    id: 1,
    title: 'Email',
    value: 'sunitagurau.1999@gmail.com',
    link: 'mailto:sunitagurau.1999@gmail.com',
    icon: 'email',
  },
  {
    id: 2,
    title: 'LinkedIn',
    value: 'linkedin.com/in/sunita-gurau',
    link: 'https://linkedin.com/in/sunita-gurau',
    icon: 'linkedin',
  },
  {
    id: 3,
    title: 'Location',
    value: 'Nepal',
    link: null,
    icon: 'location',
  },
  {
    id: 4,
    title: 'GitHub',
    value: 'github.com/sunita-gurau',
    link: 'https://github.com/sunita-gurau',
    icon: 'github',
  },
])

// Contact form
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form.value)

  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  }

  isSubmitting.value = false

  // Show success message (you can implement a toast notification here)
  alert("Thank you for your message! I'll get back to you soon.")
}
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

/* Form focus styles */
input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
}
</style>
