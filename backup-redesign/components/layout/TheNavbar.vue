<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3 group" aria-label="Club 25 de Mayo Natatorio Martínez">
        <!-- Shield / Emblem -->
        <span class="relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 shadow-lg ring-2 ring-white/30 transition-transform duration-300 group-hover:scale-105">
          <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <!-- Swimmer & wave icon -->
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M2 12c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M2 17c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8 9 3 2-2 3"/>
          </svg>
          <span class="absolute -bottom-1 -right-1 text-[9px] font-extrabold bg-amber-400 text-slate-900 px-1 rounded-sm shadow-sm">1905</span>
        </span>
        <div class="flex flex-col">
          <span :class="['font-heading font-extrabold text-base sm:text-lg tracking-tight leading-tight transition-colors duration-300', scrolled ? 'text-gray-900' : 'text-white']">
            Club 25 de Mayo
          </span>
          <span :class="['text-[11px] font-semibold tracking-wider uppercase transition-colors duration-300', scrolled ? 'text-primary-600' : 'text-primary-200']">
            Natatorio Martínez
          </span>
        </div>
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-7">
        <NuxtLink
          v-for="item in navItems"
          :key="item.id"
          :to="item.to"
          :class="[
            'font-heading font-semibold text-xs tracking-wider uppercase transition-colors duration-200 hover:text-primary-500',
            scrolled ? 'text-gray-700' : 'text-white/95'
          ]"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink
          to="/#contact"
          :class="[
            'px-5 py-2 font-heading font-bold text-xs tracking-wider uppercase transition-all duration-300 rounded-lg shadow-sm',
            scrolled
              ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-primary-600/30'
              : 'bg-white text-primary-800 hover:bg-primary-50 shadow-black/20'
          ]"
        >
          Consultar / Sede
        </NuxtLink>
      </nav>

      <button
        @click="mobileOpen = !mobileOpen"
        :class="['lg:hidden p-2 rounded-lg transition-colors', scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10']"
        aria-label="Menú"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="lg:hidden bg-white/98 backdrop-blur-md shadow-2xl border-t border-gray-100">
        <nav class="flex flex-col px-6 py-5 gap-3">
          <NuxtLink
            v-for="item in navItems"
            :key="item.id"
            :to="item.to"
            @click="mobileOpen = false"
            class="font-heading font-semibold text-sm tracking-wider uppercase text-gray-700 hover:text-primary-600 py-2 border-b border-gray-100"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            @click="mobileOpen = false"
            class="btn-primary mt-2 justify-center rounded-lg"
          >
            Consultar / Ubicación
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { id: 'home', label: 'Inicio', to: '/' },
  { id: 'about', label: 'La Pileta', to: '/#about' },
  { id: 'services', label: 'Actividades', to: '/#services' },
  { id: 'horarios', label: 'Horarios', to: '/#horarios' },
  { id: 'benefits', label: 'Beneficios', to: '/#benefits' },
  { id: 'news', label: 'Novedades', to: '/#news' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>