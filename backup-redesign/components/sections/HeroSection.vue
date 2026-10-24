<template>
  <section id="inicio" class="relative isolate min-h-[100svh] overflow-hidden bg-deep-950">
    <div class="absolute inset-0 -z-10" aria-hidden="true">
      <img
        v-for="(scene, index) in scenes"
        :key="scene.src"
        :src="scene.src"
        :alt="scene.alt"
        width="2200"
        height="1238"
        :loading="index === 0 ? 'eager' : 'lazy'"
        :fetchpriority="index === 0 ? 'high' : 'auto'"
        decoding="async"
        class="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1600ms] ease-spring"
        :class="index === active ? 'scale-105 opacity-100' : 'scale-100 opacity-0'"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-deep-950 via-deep-950/80 to-deep-950/25" />
      <div class="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/10 to-deep-950/70" />
      <div class="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_45%,transparent_20%,rgba(4,22,31,0.55)_100%)]" />
    </div>

    <div
      class="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(60%_60%_at_70%_40%,rgba(34,211,238,0.14),transparent_70%)]"
      aria-hidden="true"
    />
    <ClientOnly>
      <LazyWaterCanvas
        v-if="showCanvas"
        class="pointer-events-none absolute inset-0 z-[1] opacity-80"
      />
    </ClientOnly>

    <div class="relative z-10 flex min-h-[100svh] flex-col">
      <div class="container-x flex flex-1 items-center pb-14 pt-32 sm:pt-36 lg:pb-20">
        <div class="grid w-full items-end gap-12 lg:grid-cols-12">
          <div class="lg:col-span-8 xl:col-span-7">
            <div class="hero-in inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-2 pl-2.5 pr-4 backdrop-blur-md">
              <span class="relative grid h-5 w-5 place-items-center">
                <span class="absolute h-2 w-2 rounded-full bg-aqua-400" />
                <span class="absolute h-2 w-2 animate-pulse-ring rounded-full bg-aqua-400/70" />
              </span>
              <span class="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                Inscripciones abiertas
              </span>
              <span class="hidden h-3 w-px bg-white/20 sm:block" />
              <span class="hidden text-[11px] font-semibold text-white/60 sm:block">
                Escuela · Pileta libre
              </span>
            </div>

            <h1 class="hero-in display-1 mt-7 max-w-[13ch] text-white" style="--hero-delay: 80ms">
              Nadar bien
              <span class="serif-accent block text-aqua-300">se siente.</span>
            </h1>

            <p
              class="hero-in mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
              style="--hero-delay: 160ms"
            >
              Pileta climatizada durante todo el año, escuela para todas las edades y nado libre
              en el corazón de Martínez. Agua a 30 °C, guardavidas permanentes y más de 120 años
              de historia deportiva.
            </p>

            <div class="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style="--hero-delay: 240ms">
              <NuxtLink to="/#contacto" class="btn-primary group w-full sm:w-auto">
                Inscribite online
                <ArrowUpRight
                  class="h-4 w-4 transition-transform duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  :stroke-width="2.4"
                  aria-hidden="true"
                />
              </NuxtLink>
              <NuxtLink to="/#horarios" class="btn-ghost group w-full sm:w-auto">
                <CalendarDays class="h-4 w-4 text-aqua-300" aria-hidden="true" />
                Consultar horarios
              </NuxtLink>
            </div>

            <ul class="hero-in mt-9 flex flex-wrap gap-2.5" style="--hero-delay: 320ms">
              <li
                v-for="badge in badges"
                :key="badge.label"
                class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-deep-950/30 px-3 py-1.5 text-[11px] font-semibold text-white/70 backdrop-blur-sm"
              >
                <component :is="badge.icon" class="h-3.5 w-3.5 text-aqua-300" :stroke-width="2" aria-hidden="true" />
                {{ badge.label }}
              </li>
            </ul>
          </div>

          <div class="hidden justify-end pb-2 lg:col-span-4 lg:flex xl:col-span-5">
            <a href="#pileta" class="group relative grid h-44 w-44 place-items-center">
              <span class="sr-only">Conocer el natatorio</span>
              <svg viewBox="0 0 200 200" class="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
                <defs>
                  <path
                    id="hero-seal-path"
                    d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
                  />
                </defs>
                <text class="fill-white/45 text-[9.5px] font-semibold uppercase">
                  <textPath href="#hero-seal-path" startOffset="0">
                    Club 25 de Mayo · Natatorio Martínez · Desde 1905 ·
                  </textPath>
                </text>
              </svg>
              <span class="grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-white/[0.06] text-white backdrop-blur-md transition-all duration-500 ease-spring group-hover:scale-105 group-hover:border-aqua-300/60 group-hover:bg-aqua-400/10">
                <WavesLadder class="h-7 w-7 text-aqua-300" :stroke-width="1.6" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div class="relative border-t border-white/10">
        <div class="container-x">
          <dl class="grid grid-cols-2 lg:grid-cols-4">
            <div
              v-for="(stat, index) in stats"
              :key="stat.label"
              class="flex items-baseline gap-1.5 py-5 sm:gap-2 sm:py-6"
              :class="[
                index % 2 === 1 ? 'border-l border-white/10 pl-5 sm:pl-6' : '',
                index > 1 ? 'border-t border-white/10 lg:border-t-0' : '',
                index > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : '',
                index === 0 ? 'pr-5' : '',
              ]"
            >
              <dt class="sr-only">{{ stat.label }}</dt>
              <dd class="flex flex-col">
                <span class="font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {{ stat.value }}<span class="text-aqua-300">{{ stat.suffix }}</span>
                </span>
                <span class="mt-1 max-w-[16ch] text-[11px] leading-snug text-white/55">
                  {{ stat.label }}
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="container-x flex items-center justify-between gap-6 pb-7 pt-5">
        <a href="#pileta" class="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white/80">
          <ArrowDown class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          Descubrí el natatorio
        </a>

        <div class="flex items-center gap-2" role="tablist" aria-label="Imágenes del natatorio">
          <button
            v-for="(scene, index) in scenes"
            :key="scene.src"
            type="button"
            role="tab"
            :aria-selected="index === active"
            :aria-label="`Ver imagen ${index + 1}`"
            class="h-1 rounded-full transition-all duration-500 ease-spring"
            :class="index === active ? 'w-8 bg-aqua-300' : 'w-3 bg-white/25 hover:bg-white/50'"
            @click="setActive(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Droplets,
  ShieldCheck,
  ThermometerSun,
  WavesLadder,
} from '@lucide/vue'
import { stats } from '~/data/site'

const scenes = [
  {
    src: '/images/opt/hero-1.jpg',
    alt: 'Vista general de la pileta climatizada del Club 25 de Mayo en Martínez',
  },
  {
    src: '/images/opt/hero-2.jpg',
    alt: 'Andariveles y agua cristalina de la pileta del natatorio',
  },
  {
    src: '/images/opt/hero-3.jpg',
    alt: 'Chicos disfrutando de la escuela de natación en el agua',
  },
]

const badges = [
  { label: 'Pileta climatizada 29–31 °C', icon: ThermometerSun },
  { label: 'Agua tratada y controlada', icon: Droplets },
  { label: 'Guardavidas permanentes', icon: ShieldCheck },
]

const active = ref(0)
const showCanvas = ref(false)
let timer: ReturnType<typeof setInterval> | null = null
let canvasTimer: ReturnType<typeof setTimeout> | null = null

function setActive(index: number) {
  active.value = index
}

function startSlideshow() {
  stopSlideshow()
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    active.value = (active.value + 1) % scenes.length
  }, 6800)
}

function stopSlideshow() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function handleVisibility() {
  if (document.hidden) stopSlideshow()
  else startSlideshow()
}

onMounted(() => {
  startSlideshow()
  canvasTimer = setTimeout(() => {
    showCanvas.value = true
  }, 600)
  document.addEventListener('visibilitychange', handleVisibility)
})

onBeforeUnmount(() => {
  stopSlideshow()
  if (canvasTimer) clearTimeout(canvasTimer)
  document.removeEventListener('visibilitychange', handleVisibility)
})
</script>

<style scoped>
.hero-in {
  opacity: 0;
  transform: translate3d(0, 22px, 0);
  animation: heroRise 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--hero-delay, 0ms);
}

@keyframes heroRise {
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-in {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
