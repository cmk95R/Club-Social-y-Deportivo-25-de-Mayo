<template>
  <section id="horarios" class="relative py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-sky-950 text-white overflow-hidden">
    <!-- Decorative background glow and water pattern -->
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none opacity-20">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-14 reveal" ref="el">
        <span class="text-xs font-heading font-extrabold tracking-widest text-sky-300 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
          Planificá Tu Semana en el Agua
        </span>
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-4 mb-4">
          Horarios de Pileta y Requisitos de Ingreso
        </h2>
        <div class="w-16 h-1 bg-sky-400 mx-auto rounded-full mb-5" />
        <p class="text-sky-100 text-base max-w-2xl mx-auto leading-relaxed">
          Elegí el horario que mejor se adapte a tu rutina. Disponemos de amplia franja horaria de lunes a sábados en nuestra sede de Rodríguez Peña 941, Martínez.
        </p>
      </div>

      <!-- Schedule cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        <div
          v-for="shift in shifts"
          :key="shift.name"
          class="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-sky-400/20 text-sky-300 mb-4 ring-1 ring-sky-300/30">
            <span class="w-5 h-5" v-html="shift.icon" />
          </div>
          <h3 class="font-heading font-bold text-lg text-white mb-1">{{ shift.name }}</h3>
          <p class="text-sky-300 text-sm font-semibold mb-4">{{ shift.hours }}</p>
          <ul class="space-y-2 text-xs text-sky-100/90 leading-relaxed">
            <li v-for="act in shift.activities" :key="act" class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              {{ act }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Requirements banner -->
      <div class="bg-white/95 text-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 text-xs font-heading font-extrabold text-primary-700 uppercase tracking-wider mb-2">
            <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Requisitos Obligatorios para Nadar
          </div>
          <h3 class="font-heading font-extrabold text-xl sm:text-2xl text-gray-900 mb-3">
            ¿Qué necesitás para comenzar?
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-600">
            <div class="flex items-start gap-2">
              <span class="text-primary-600 font-bold">1.</span>
              <span><strong>Apto médico:</strong> Certificado de salud emitido por profesional médico matriculado.</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-primary-600 font-bold">2.</span>
              <span><strong>Revisación médica:</strong> Control médico obligatorio de micosis y pediculosis en el club.</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-primary-600 font-bold">3.</span>
              <span><strong>Indumentaria:</strong> Malla o traje de baño reglamentario, gorro de natación y ojotas.</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-primary-600 font-bold">4.</span>
              <span><strong>Credencial de socio:</strong> Foto carnet o DNI para emitir tu carnet de natatorio.</span>
            </div>
          </div>
        </div>

        <div class="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
          <NuxtLink
            to="/#contact"
            class="px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 text-center shadow-lg shadow-primary-600/30 hover:-translate-y-0.5"
          >
            Consultar Aranceles y Cupos
          </NuxtLink>
          <a
            href="https://wa.me/5491147333719?text=Hola!%20Quisiera%20consultar%20por%20actividades%20y%20aranceles%20de%20la%20pileta%20del%20Club%2025%20de%20Mayo"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 hover:-translate-y-0.5"
          >
            <svg class="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
            </svg>
            WhatsApp Secretaría
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const el = ref(null)
useIntersectionObserver(el, ([{ isIntersecting }]) => {
  if (isIntersecting) el.value?.classList.add('visible')
}, { threshold: 0.2 })

const iconSun = '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>'
const iconMid = '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
const iconMoon = '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/></svg>'
const iconSat = '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>'

const shifts = [
  {
    name: 'Turno Mañana',
    hours: '07:30 a 12:00 hs',
    icon: iconSun,
    activities: [
      'Pileta libre matutina',
      'Clases de natación adultos',
      'Entrenamiento aeróbico',
      'Andariveles rápidos y medios',
    ],
  },
  {
    name: 'Turno Mediodía / Tarde',
    hours: '12:00 a 17:00 hs',
    icon: iconMid,
    activities: [
      'Pileta libre mediodía',
      'Clases de Aquagym',
      'Matronatación (bebés)',
      'Natación terapéutica',
    ],
  },
  {
    name: 'Turno Vespertino / Noche',
    hours: '17:00 a 21:30 hs',
    icon: iconMoon,
    activities: [
      'Escuelita de natación infantil',
      'Grupos juveniles y cadetes',
      'Natación adultos post-laboral',
      'Pileta libre nocturna',
    ],
  },
  {
    name: 'Sábados',
    hours: '08:30 a 14:00 hs',
    icon: iconSat,
    activities: [
      'Pileta libre familiar',
      'Escuelita de iniciación',
      'Perfeccionamiento de estilos',
      'Revisación médica en sede',
    ],
  },
]
</script>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>