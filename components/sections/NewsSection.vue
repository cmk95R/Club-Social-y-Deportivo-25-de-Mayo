<template>
  <section id="news" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-14 reveal" ref="headerRef">
        <span class="text-xs font-heading font-extrabold tracking-widest text-primary-600 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
          Novedades y Comunicados
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl text-gray-900">
          Avisos del Natatorio
        </h2>
        <div class="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-primary-600 mx-auto mt-4 rounded-full reveal-bar" />
        <p class="section-subtitle max-w-2xl mx-auto mt-5 reveal-sub text-gray-600">
          Mantenete informado sobre fechas de inscripción, revisación médica, nuevos turnos y consejos del equipo de profesores.
        </p>
      </div>

      <div ref="gridRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
        <article
          v-for="(post, i) in posts"
          :key="post.title"
          class="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-primary-950"
          :style="`transition-delay: ${i * 80}ms`"
        >
          <img
            :src="post.image"
            :alt="post.title"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-90"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

          <span class="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-sky-500/90 text-white backdrop-blur-sm shadow-sm">
            {{ post.tag }}
          </span>

          <div class="absolute inset-x-0 bottom-0 p-5 z-10">
            <p class="text-white font-heading font-bold text-base leading-snug mb-2 group-hover:text-sky-200 transition-colors">
              {{ post.title }}
            </p>
            <p class="text-white/80 text-xs leading-relaxed line-clamp-3">
              {{ post.excerpt }}
            </p>
          </div>
        </article>
      </div>

      <div class="text-center mt-12 reveal" ref="ctaRef">
        <NuxtLink
          to="/#contact"
          class="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-600 text-primary-700 font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-primary-600 hover:text-white hover:shadow-lg"
        >
          Consultar en Secretaría
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const headerRef = ref(null)
const gridRef = ref(null)
const ctaRef = ref(null)

useIntersectionObserver(headerRef, ([{ isIntersecting }]) => {
  if (isIntersecting) headerRef.value?.classList.add('visible')
}, { threshold: 0.2 })
useIntersectionObserver(gridRef, ([{ isIntersecting }]) => {
  if (isIntersecting) gridRef.value?.classList.add('visible')
}, { threshold: 0.1 })
useIntersectionObserver(ctaRef, ([{ isIntersecting }]) => {
  if (isIntersecting) ctaRef.value?.classList.add('visible')
}, { threshold: 0.2 })

const posts = [
  {
    image: '/images/nata/Screenshot_3.jpg',
    tag: 'Temporada',
    title: 'Inscripciones Abiertas en el Natatorio',
    excerpt: 'Comenzó la inscripción para escuelita de natación infantil, clases de adultos y pases de pileta libre. ¡Asegurá tu lugar!',
  },
  {
    image: '/images/nata/4.jpg',
    tag: 'Turnos',
    title: 'Nuevos Horarios de Pileta Libre y Aquagym',
    excerpt: 'Sumamos más turnos por la mañana y al mediodía para que entrenes con andariveles ordenados y total comodidad.',
  },
  {
    image: '/images/nata/12.jpg',
    tag: 'Médico en Sede',
    title: 'Revisación Médica Obligatoria en el Club',
    excerpt: 'Atención médica en secretaría los martes, jueves y sábados para tramitar tu certificado y apto médico de pileta.',
  },
  {
    image: '/images/nata/55.jpg',
    tag: 'Salud Acuática',
    title: 'Natación y Alivio del Dolor de Espalda',
    excerpt: 'Conocé cómo el ejercicio en agua a temperatura templada favorece la descompresión lumbar y fortalece la musculatura.',
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
</style>
