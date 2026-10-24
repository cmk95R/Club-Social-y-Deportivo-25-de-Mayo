<template>
  <section class="py-7 bg-sky-50/70 overflow-hidden border-y border-sky-100">
    <div class="max-w-7xl mx-auto px-4 mb-3 text-center reveal" ref="titleRef">
      <p class="text-[11px] font-heading font-extrabold uppercase tracking-[0.25em] text-primary-600">
        Instalaciones y Servicios del Natatorio · Club 25 de Mayo (Martínez)
      </p>
    </div>

    <div class="relative">
      <div class="flex gap-8 items-center logos-track">
        <div
          v-for="(badge, i) in [...badges, ...badges]"
          :key="`${badge.text}-${i}`"
          class="flex-shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-sky-200/70 shadow-sm"
        >
          <span class="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0" v-html="badge.icon" />
          <span class="font-heading font-bold text-xs sm:text-sm text-gray-800 tracking-tight whitespace-nowrap">
            {{ badge.text }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const titleRef = ref(null)
const { stop } = useIntersectionObserver(titleRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    titleRef.value?.classList.add('visible')
    stop()
  }
})

const iconWave = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2 12c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1M2 17c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1"/></svg>'
const iconTemp = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>'
const iconShield = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>'
const iconGrad = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'
const iconCheck = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>'
const iconPin = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>'

const badges = [
  { text: 'Agua Climatizada 29° a 31°C', icon: iconTemp },
  { text: 'Guardavidas y Docentes Matriculados', icon: iconShield },
  { text: 'Vestuarios Calefaccionados', icon: iconWave },
  { text: 'Andariveles Separados por Ritmo', icon: iconCheck },
  { text: 'Clases para Bebés, Niños y Adultos', icon: iconGrad },
  { text: 'Revisación Médica en Sede', icon: iconShield },
  { text: 'Rodríguez Peña 941 (Martínez)', icon: iconPin },
  { text: 'Agua Cristalina con Control Diario', icon: iconWave },
]
</script>

<style scoped>
.logos-track {
  animation: logoScroll 32s linear infinite;
  width: max-content;
}
.logos-track:hover {
  animation-play-state: paused;
}
@keyframes logoScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>