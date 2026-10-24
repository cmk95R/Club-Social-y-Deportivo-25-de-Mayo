<template>
  <section id="instalaciones" class="relative overflow-hidden bg-foam py-24 sm:py-28 lg:py-32">
    <div class="pointer-events-none absolute inset-0 bg-grid-faint bg-[length:72px_72px] opacity-30" aria-hidden="true" />
    <div class="pointer-events-none absolute -right-32 top-24 h-[26rem] w-[26rem] rounded-full bg-aqua-200/40 blur-3xl" aria-hidden="true" />

    <div class="container-x relative">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div v-reveal class="max-w-2xl">
          <span class="eyebrow text-deep-700">
            <span class="eyebrow-dot" />
            Instalaciones y calidad de agua
          </span>
          <h2 class="display-2 mt-5 text-deep-950">
            Todo lo que no se ve,
            <span class="serif-accent block text-deep-700">también se cuida.</span>
          </h2>
        </div>
        <p v-reveal="{ delay: 100 }" class="max-w-sm text-sm leading-relaxed text-deep-900/70 lg:pb-1 lg:text-right">
          Vestuarios, climatización, andariveles y control sanitario. Un natatorio pensado para
          que solo tengas que ocuparte de nadar.
        </p>
      </div>

      <div class="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
        <div v-reveal class="lg:col-span-7">
          <div class="relative overflow-hidden rounded-[2rem] bg-deep-900 shadow-water">
            <Transition name="gallery" mode="out-in">
              <img
                :key="activeImage.src"
                :src="activeImage.src"
                :alt="activeImage.alt"
                width="1600"
                height="1000"
                loading="lazy"
                decoding="async"
                class="aspect-[16/11] w-full object-cover"
              />
            </Transition>

            <div class="absolute inset-0 bg-gradient-to-t from-deep-950/85 via-deep-950/10 to-transparent" aria-hidden="true" />

            <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7">
              <div class="max-w-sm">
                <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-aqua-300/90">
                  {{ activeImage.kicker }}
                </p>
                <p class="mt-1.5 font-heading text-lg font-bold leading-tight text-white sm:text-xl">
                  {{ activeImage.caption }}
                </p>
              </div>

              <div class="flex shrink-0 items-center gap-2">
                <span class="mr-1 font-heading text-[10px] font-bold tracking-[0.18em] text-white/60">
                  0{{ activeIndex + 1 }} / 0{{ images.length }}
                </span>
                <button
                  type="button"
                  class="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-deep-950/30 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-deep-950"
                  aria-label="Imagen anterior"
                  @click="prevImage"
                >
                  <ArrowLeft class="h-4 w-4" :stroke-width="2" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  class="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-deep-950/30 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-deep-950"
                  aria-label="Imagen siguiente"
                  @click="nextImage"
                >
                  <ArrowRight class="h-4 w-4" :stroke-width="2" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div class="mt-3 grid grid-cols-5 gap-2.5 sm:gap-3">
            <button
              v-for="(image, index) in images"
              :key="image.src"
              type="button"
              :aria-pressed="index === activeIndex"
              :aria-label="`Ver: ${image.caption}`"
              class="group relative overflow-hidden rounded-xl border-2 transition-all duration-300"
              :class="index === activeIndex ? 'border-aqua-500' : 'border-transparent opacity-70 hover:opacity-100'"
              @click="activeIndex = index"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                width="1600"
                height="1000"
                loading="lazy"
                decoding="async"
                class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </div>

          <ul class="mt-5 flex flex-wrap gap-2">
            <li
              v-for="feature in features"
              :key="feature.label"
              class="inline-flex items-center gap-2 rounded-full border border-deep-950/10 bg-white px-3.5 py-2 text-[11px] font-semibold text-deep-900/70"
            >
              <component :is="feature.icon" class="h-3.5 w-3.5 text-deep-700" :stroke-width="2" aria-hidden="true" />
              {{ feature.label }}
            </li>
          </ul>
        </div>

        <div v-reveal="{ delay: 120 }" class="lg:col-span-5">
          <div class="overflow-hidden rounded-[2rem] bg-deep-950 p-7 text-white shadow-water sm:p-8">
            <div class="flex items-start justify-between gap-4">
              <div>
                <span class="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-200">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Control diario
                </span>
                <h3 class="mt-5 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                  El agua, primero.
                </h3>
              </div>
              <Droplets class="h-7 w-7 shrink-0 text-aqua-300/70" :stroke-width="1.5" aria-hidden="true" />
            </div>

            <p class="mt-3 text-sm leading-relaxed text-white/55">
              Medimos y ajustamos los parámetros del agua todos los días. Estos son los rangos de
              referencia del natatorio.
            </p>

            <div class="mt-7 divide-y divide-white/10 border-y border-white/10">
              <div
                v-for="item in poolQuality"
                :key="item.label"
                class="flex items-center justify-between gap-4 py-3.5"
              >
                <div>
                  <p class="text-xs font-semibold text-white/75">{{ item.label }}</p>
                  <p class="mt-0.5 text-[10px] text-white/55">{{ item.detail }}</p>
                </div>
                <span class="shrink-0 font-heading text-sm font-bold tracking-tight text-aqua-300">
                  {{ item.value }}
                </span>
              </div>
            </div>

            <p class="mt-4 text-[10px] leading-relaxed text-white/55">
              Valores de referencia del protocolo de mantenimiento. El parte diario se consulta en
              secretaría.
            </p>

            <NuxtLink to="/#requisitos" class="link-arrow mt-6 text-aqua-300 hover:text-white">
              Ver requisitos de ingreso
              <ArrowRight class="h-4 w-4" :stroke-width="2" aria-hidden="true" />
            </NuxtLink>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-3">
            <div
              v-for="item in highlights"
              :key="item.label"
              class="rounded-2xl border border-deep-950/[0.08] bg-white/70 p-4 backdrop-blur-sm"
            >
              <component :is="item.icon" class="h-4 w-4 text-deep-700" :stroke-width="1.8" aria-hidden="true" />
              <p class="mt-2 font-heading text-xs font-bold text-deep-950">{{ item.label }}</p>
              <p class="mt-0.5 text-[10px] leading-snug text-deep-900/70">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Droplets,
  Lock,
  ShowerHead,
  ThermometerSun,
  Users,
} from '@lucide/vue'
import { poolQuality } from '~/data/site'

const images = [
  {
    src: '/images/opt/facility-1.jpg',
    alt: 'Vista general de la pileta cubierta y climatizada',
    kicker: 'Pileta cubierta',
    caption: '25 metros y seis andariveles con profundidad progresiva.',
  },
  {
    src: '/images/opt/facility-2.jpg',
    alt: 'Agua y andariveles de la pileta del natatorio',
    kicker: 'Vaso climatizado',
    caption: 'Agua entre 29 y 31 °C durante todo el año.',
  },
  {
    src: '/images/opt/facility-3.jpg',
    alt: 'Nadador entrenando técnica en la pileta',
    kicker: 'Entrenamiento',
    caption: 'Andariveles por ritmo y espacio para corregir técnica.',
  },
  {
    src: '/images/opt/facility-4.jpg',
    alt: 'Acceso del club sobre la calle Rodríguez Peña',
    kicker: 'Acceso',
    caption: 'Ingreso sobre Rodríguez Peña 941, Martínez.',
  },
  {
    src: '/images/opt/facility-5.jpg',
    alt: 'Chicos compartiendo la clase de natación en el agua',
    kicker: 'Escuela y comunidad',
    caption: 'Grupos reducidos y acompañamiento docente cercano.',
  },
]

const features = [
  { label: 'Vestuarios calefaccionados', icon: ThermometerSun },
  { label: 'Duchas y lockers', icon: ShowerHead },
  { label: 'Guardavidas en cada turno', icon: Users },
]

const highlights = [
  { label: 'Vestuarios', detail: 'Climatizados y con duchas', icon: ThermometerSun },
  { label: 'Seguridad', detail: 'Guardavidas matriculados', icon: Users },
  { label: 'Acceso', detail: 'Rodríguez Peña 941', icon: Lock },
  { label: 'Ambiente', detail: 'Familiar y de barrio', icon: Droplets },
]

const activeIndex = ref(0)
const activeImage = computed(() => images[activeIndex.value] ?? images[0]!)

function prevImage() {
  activeIndex.value = (activeIndex.value - 1 + images.length) % images.length
}

function nextImage() {
  activeIndex.value = (activeIndex.value + 1) % images.length
}
</script>

<style scoped>
.gallery-enter-active,
.gallery-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.gallery-enter-from {
  opacity: 0;
  transform: scale(1.02);
}

.gallery-leave-to {
  opacity: 0;
  transform: scale(0.99);
}
</style>
