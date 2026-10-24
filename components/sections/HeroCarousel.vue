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
            class="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out"
            :style="`background-image: url('${slide.image}'); filter: blur(6px);`"
          />
          <!-- Aquatic atmospheric gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/15 to-primary-800/20" />
          <div class="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-black/26" />

          <!-- Capa de blur y tinte azul sobre toda la imagen -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary-950/60 via-primary-900/35 to-primary-700/10"
            aria-hidden="true"
          />

          <div class="relative z-10 h-full flex items-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 w-full pt-16">
              <div class="max-w-2xl">
                
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
                  <NuxtLink to="/#services" class="btn-primary !rounded-lg !bg-primary-600 hover:!bg-primary-700 text-white shadow-lg shadow-primary-600/30">
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
    image: '/images/nata/00.png',
    
    title: 'Natatorio Club 25 de Mayo',
    subtitle: 'Pileta climatizada todo el año en Martínez. Clases para todas las edades, pileta libre y actividades acuáticas en un cálido ambiente familiar.',
    cta: 'Ver Actividades Acuáticas',
  },
  {
    image: '/images/nata/44.png',
    title: 'Aprender, Crecer y Disfrutar en el Agua',
    subtitle: 'Profesores universitarios y guardavidas permanentes. Grupos divididos por niveles desde escuelita infantil hasta jóvenes y adultos.',
    cta: 'Conocer Niveles y Edades',
  },
  {
    image: '/images/nata/000.png',
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
