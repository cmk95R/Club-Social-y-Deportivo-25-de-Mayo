<template>
  <section id="home" class="relative h-screen min-h-[620px] overflow-hidden">
    <div class="swiper hero-swiper h-full">
      <div class="swiper-wrapper">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="swiper-slide relative"
        >
          <div
            class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out scale-105"
            :style="`background-image: url('${slide.image}')`"
          />
          <!-- Aquatic atmospheric gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/75 to-primary-800/40" />
          <div class="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-black/30" />

          <div class="relative z-10 h-full flex items-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 w-full pt-16">
              <div class="max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-6">
                  <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  {{ slide.tag }}
                </div>
                <h1
                  class="font-heading font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl leading-tight mb-6 opacity-0"
                  :class="{ 'animate-fade-up': activeIndex === i }"
                  style="animation-delay: 0.2s; animation-fill-mode: forwards"
                >
                  {{ slide.title }}
                </h1>
                <p
                  class="text-primary-100 text-base sm:text-lg mb-8 leading-relaxed opacity-0 max-w-xl"
                  :class="{ 'animate-fade-up': activeIndex === i }"
                  style="animation-delay: 0.4s; animation-fill-mode: forwards"
                >
                  {{ slide.subtitle }}
                </p>
                <div
                  class="flex flex-wrap items-center gap-4 opacity-0"
                  :class="{ 'animate-fade-up': activeIndex === i }"
                  style="animation-delay: 0.6s; animation-fill-mode: forwards"
                >
                  <NuxtLink to="/#services" class="btn-primary !rounded-lg !bg-sky-500 hover:!bg-sky-400 text-white shadow-lg shadow-sky-500/30">
                    {{ slide.cta }}
                  </NuxtLink>
                  <NuxtLink to="/#contact" class="btn-outline !rounded-lg">
                    Contactar Secretaría
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-pagination !bottom-8" />
      <div class="swiper-button-prev !text-white !w-10 !h-10 after:!text-base !rounded-full backdrop-blur-md !bg-white/20 hover:!bg-white/40 transition-all" />
      <div class="swiper-button-next !text-white !w-10 !h-10 after:!text-base !rounded-full backdrop-blur-md !bg-white/20 hover:!bg-white/40 transition-all" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const activeIndex = ref(0)
let swiperInstance = null

const slides = [
  {
    image: '/images/natatorio/hero1.jpg',
    tag: 'Martínez · San Isidro',
    title: 'Natatorio Club 25 de Mayo',
    subtitle: 'Pileta climatizada todo el año en Martínez. Clases para todas las edades, pileta libre y actividades acuáticas en un cálido ambiente familiar.',
    cta: 'Ver Actividades Acuáticas',
  },
  {
    image: '/images/natatorio/hero2.jpg',
    tag: 'Escuela de Natación',
    title: 'Aprender, Crecer y Disfrutar en el Agua',
    subtitle: 'Profesores universitarios y guardavidas permanentes. Grupos divididos por niveles desde bebés y escuelita infantil hasta adultos.',
    cta: 'Conocer Niveles y Edades',
  },
  {
    image: '/images/natatorio/hero3.jpg',
    tag: 'Salud y Entrenamiento',
    title: 'Pileta Libre y Rendimiento Físico',
    subtitle: 'Andariveles organizados por velocidad y horarios flexibles de mañana, tarde y noche para entrenar o relajarte a tu propio ritmo.',
    cta: 'Consultar Horarios y Turnos',
  },
]

onMounted(() => {
  swiperInstance = new Swiper('.hero-swiper', {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    effect: 'fade',
    loop: true,
    autoplay: { delay: 4500, disableOnInteraction: false },
    speed: 1000,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: (swiper) => {
        activeIndex.value = swiper.realIndex
      },
    },
  })
})

onUnmounted(() => swiperInstance?.destroy())
</script>