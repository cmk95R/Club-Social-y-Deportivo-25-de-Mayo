<template>
  <section id="benefits" class="relative py-24 bg-gradient-to-b from-white to-sky-50/50 overflow-hidden">
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30" />
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-30" />
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-16 reveal" ref="headerRef">
        <span class="text-xs font-heading font-extrabold tracking-widest text-primary-600 uppercase bg-sky-100/70 px-3.5 py-1.5 rounded-full border border-sky-200">
          Por Qué Elegirnos
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl text-gray-900">
          Beneficios de Nadar en Nuestro Club
        </h2>
        <div class="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-primary-600 mx-auto mt-4 rounded-full reveal-bar" />
        <p class="section-subtitle max-w-2xl mx-auto mt-5 reveal-sub text-gray-600">
          La natación es la disciplina más completa para la salud. En el Club 25 de Mayo te brindamos una experiencia cuidada, cálida y profesional.
        </p>
      </div>

      <div ref="gridRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <article
          v-for="(b, i) in benefits"
          :key="b.title"
          class="reveal-card text-center relative bg-white p-6 sm:p-8 rounded-3xl border border-sky-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
          :style="`transition-delay: ${i * 100}ms`"
        >
          <div class="w-20 h-20 rounded-2xl bg-sky-50 border border-sky-200 mx-auto flex items-center justify-center transition-all duration-500 group hover:bg-primary-600 hover:border-primary-600 hover:scale-105 shadow-sm">
            <div class="w-10 h-10 text-primary-600 flex items-center justify-center transition-colors duration-500 group-hover:text-white" v-html="b.icon" />
          </div>

          <h3 class="mt-6 text-lg font-heading font-bold text-gray-900 tracking-tight">{{ b.title }}</h3>

          <ul class="mt-4 space-y-2 text-xs sm:text-sm text-gray-600">
            <li v-for="item in b.items" :key="item" class="leading-relaxed flex items-center justify-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0"></span>
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const headerRef = ref(null)
const gridRef = ref(null)

useIntersectionObserver(headerRef, ([{ isIntersecting }]) => {
  if (isIntersecting) headerRef.value?.classList.add('visible')
})
useIntersectionObserver(gridRef, ([{ isIntersecting }]) => {
  if (isIntersecting) gridRef.value?.classList.add('cards-visible')
})

const iconHealth = '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>'
const iconTemp = '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/></svg>'
const iconShield = '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-7.5-6.75h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18.75V5.25A2.25 2.25 0 015.25 3z"/></svg>'
const iconClub = '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>'

const benefits = [
  {
    title: 'Salud y Bienestar',
    icon: iconHealth,
    items: ['Cero impacto en rodillas y columna', 'Fortalecimiento cardiovascular', 'Alivia contracturas y estrés'],
  },
  {
    title: 'Agua Climatizada',
    icon: iconTemp,
    items: ['29° a 31°C los 365 días del año', 'Ambiente cálido en invierno', 'Vestuarios con calefacción central'],
  },
  {
    title: 'Seguridad y Sanidad',
    icon: iconShield,
    items: ['Guardavidas matriculados siempre', 'Controles diarios de cloro y pH', 'Revisación médica en el club'],
  },
  {
    title: 'Comunidad de Barrio',
    icon: iconClub,
    items: ['Club Social y Deportivo de Martínez', 'Aranceles accesibles y familiares', 'Profesores con calidad humana'],
  },
]
</script>

<style scoped>
.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.5, 0, 0, 1); }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-bar { transform: scaleX(0); transform-origin: center; transition: transform 0.6s ease; }
.reveal.visible .reveal-bar { transform: scaleX(1); }
.reveal-sub { opacity: 0; transform: translateY(10px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible .reveal-sub { opacity: 1; transform: translateY(0); }
.reveal-card { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.5, 0, 0, 1); }
.cards-visible .reveal-card { opacity: 1; transform: translateY(0); }
</style>
