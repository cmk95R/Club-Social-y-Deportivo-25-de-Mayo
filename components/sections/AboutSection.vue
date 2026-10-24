<template>
  <section id="about" class="py-24 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-16 reveal" ref="headerRef">
        <span class="text-xs font-heading font-extrabold tracking-widest text-primary-600 uppercase bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
          Club Social y Deportivo 25 de Mayo · Martínez
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl text-gray-900">
          Pasión y Salud en el Agua
        </h2>
        <div class="w-20 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mt-4 mb-6 rounded-full reveal-bar" />
        <p class="section-subtitle max-w-3xl mx-auto reveal-sub text-gray-600 leading-relaxed text-base sm:text-lg">
          Fundado en 1905, el <strong class="text-primary-700 font-semibold">Club 25 de Mayo de Martínez</strong> es una institución histórica de San Isidro. Nuestro natatorio ofrece un espacio climatizado, seguro y familiar donde aprender a nadar, entrenar o disfrutar de la pileta libre junto a profesores dedicados y guardavidas permanentes.
        </p>
      </div>

      <!-- Feature highlight cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div class="p-6 rounded-2xl bg-gradient-to-b from-sky-50/60 to-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center mb-4 shadow-sm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-lg text-gray-800 mb-2">Climatización Constante</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Agua a 29°-31°C durante todo el año y vestuarios totalmente acondicionados para que disfrutes de nadar en cualquier época, sin sufrir el frío de invierno.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-gradient-to-b from-sky-50/60 to-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center mb-4 shadow-sm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-lg text-gray-800 mb-2">Seguridad y Cuidados Médicos</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Guardavidas matriculados presentes en cada turno, control diario de niveles de cloro y pH, y servicio de revisación médica obligatoria en el propio club.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-gradient-to-b from-sky-50/60 to-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center mb-4 shadow-sm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5a4 4 0 11-8 0 4 4 0 018 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-lg text-gray-800 mb-2">El Club de Tu Barrio</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Ubicados en Rodríguez Peña 941, Martínez. Un espacio con ambiente de pertenencia donde los vecinos se conocen, los chicos hacen amigos y la familia comparte.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const headerRef = ref(null)
useIntersectionObserver(headerRef, ([{ isIntersecting }]) => {
  if (isIntersecting) headerRef.value?.classList.add('visible')
}, { threshold: 0.2 })

</script>
