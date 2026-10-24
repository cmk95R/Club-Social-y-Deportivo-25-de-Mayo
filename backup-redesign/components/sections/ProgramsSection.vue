<template>
  <section id="programas" class="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
    <div class="container-x">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div v-reveal class="max-w-3xl">
          <span class="eyebrow text-deep-700">
            <span class="eyebrow-dot" />
            Programas y actividades
          </span>
          <h2 class="display-2 mt-5 text-deep-950">
            Cinco formas de
            <span class="serif-accent text-deep-700">entrar al agua.</span>
          </h2>
        </div>

        <div v-reveal="{ delay: 100 }" class="max-w-md lg:text-right">
          <p class="text-sm leading-relaxed text-deep-900/70 sm:text-base">
            Desde los primeros flotadores hasta el entrenamiento de rendimiento. Cada grupo tiene
            su nivel, su ritmo y un docente que acompaña el proceso.
          </p>
          <NuxtLink to="/#horarios" class="link-arrow mt-5 text-deep-700 hover:text-aqua-700 lg:justify-end">
            Ver la grilla completa
            <ArrowRight class="h-4 w-4" :stroke-width="2" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:mt-16 lg:grid-cols-12">
        <article
          v-for="(program, index) in programs"
          :key="program.id"
          v-reveal="{ delay: index * 70 }"
          :class="[
            'program-card group relative isolate flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 sm:p-7',
            program.size === 'large' ? 'lg:col-span-7 lg:min-h-[32rem]' : '',
            program.size === 'medium' ? 'lg:col-span-5 lg:min-h-[32rem]' : '',
            program.size === 'small' ? 'lg:col-span-4 lg:min-h-[24rem]' : '',
            program.theme === 'light'
              ? 'bg-gradient-to-br from-aqua-300 via-aqua-400 to-aqua-600 text-deep-950'
              : 'bg-deep-950 text-white',
          ]"
        >
          <template v-if="program.image">
            <img
              :src="program.image"
              :alt="program.imageAlt"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
              class="program-media absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-deep-950 via-deep-950/45 to-deep-950/10" aria-hidden="true" />
            <div class="absolute inset-0 -z-10 bg-deep-950/20 transition-colors duration-500 group-hover:bg-deep-950/5" aria-hidden="true" />
          </template>

          <template v-else>
            <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
              <div class="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-deep-950/10" />
              <div class="absolute -right-8 -top-10 h-44 w-44 rounded-full border border-deep-950/15" />
              <div class="absolute -bottom-14 -left-10 h-52 w-52 rounded-full bg-white/20 blur-2xl" />
              <svg class="absolute inset-x-0 bottom-0 h-28 w-full text-deep-950/15" viewBox="0 0 400 80" fill="none" preserveAspectRatio="none">
                <path d="M0 42c40 0 40-18 80-18s40 18 80 18 40-18 80-18 40 18 80 18 40-18 80-18" stroke="currentColor" stroke-width="1.5" />
                <path d="M0 58c40 0 40-18 80-18s40 18 80 18 40-18 80-18 40 18 80 18 40-18 80-18" stroke="currentColor" stroke-width="1.5" />
              </svg>
            </div>
          </template>

          <div class="flex items-start justify-between gap-4">
            <div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-deep-950/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md" :class="program.theme === 'light' ? '!border-deep-950/15 !bg-white/35 !text-deep-950' : 'text-white/80'">
              <component :is="program.icon" class="h-3.5 w-3.5" :stroke-width="2" aria-hidden="true" />
              {{ program.tag }}
            </div>
            <span
              class="font-heading text-xs font-bold tracking-[0.2em]"
              :class="program.theme === 'light' ? 'text-deep-950/70' : 'text-white/55'"
            >
              0{{ index + 1 }}
            </span>
          </div>

          <div class="mt-auto pt-16">
            <p
              class="text-[10px] font-bold uppercase tracking-[0.22em]"
              :class="program.theme === 'light' ? 'text-deep-950/75' : 'text-aqua-300/80'"
            >
              {{ program.kicker }}
            </p>
            <h3
              class="mt-2 max-w-[20ch] font-heading font-extrabold tracking-tight"
              :class="[
                program.size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[1.75rem]',
                program.theme === 'light' ? 'text-deep-950' : 'text-white',
              ]"
            >
              {{ program.title }}
            </h3>
            <p
              class="mt-3 max-w-md text-[13px] leading-relaxed sm:text-sm"
              :class="program.theme === 'light' ? 'text-deep-950/70' : 'text-white/65'"
            >
              {{ program.description }}
            </p>

            <div
              class="mt-6 flex flex-wrap items-end justify-between gap-4 border-t pt-4"
              :class="program.theme === 'light' ? 'border-deep-950/15' : 'border-white/15'"
            >
              <dl class="flex flex-wrap gap-x-6 gap-y-3">
                <div v-for="meta in program.meta" :key="meta.label">
                  <dt
                    class="text-[9px] font-bold uppercase tracking-[0.18em]"
                    :class="program.theme === 'light' ? 'text-deep-950/75' : 'text-white/55'"
                  >
                    {{ meta.label }}
                  </dt>
                  <dd class="mt-0.5 text-xs font-bold">{{ meta.value }}</dd>
                </div>
                <div>
                  <dt
                    class="text-[9px] font-bold uppercase tracking-[0.18em]"
                    :class="program.theme === 'light' ? 'text-deep-950/75' : 'text-white/55'"
                  >
                    Intensidad
                  </dt>
                  <dd class="mt-1 flex items-center gap-1">
                    <span class="sr-only">Intensidad {{ program.intensity }} de 3</span>
                    <span
                      v-for="bar in 3"
                      :key="bar"
                      aria-hidden="true"
                      class="h-1.5 w-4 rounded-full"
                      :class="[
                        bar <= program.intensity
                          ? program.theme === 'light'
                            ? 'bg-deep-950'
                            : 'bg-aqua-300'
                          : program.theme === 'light'
                            ? 'bg-deep-950/20'
                            : 'bg-white/20',
                      ]"
                    />
                  </dd>
                </div>
              </dl>

              <NuxtLink
                to="/#contacto"
                class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 group-hover:gap-3"
                :class="program.theme === 'light' ? 'text-deep-950' : 'text-white'"
              >
                Consultar
                <span
                  class="grid h-8 w-8 place-items-center rounded-full border transition-all duration-300"
                  :class="program.theme === 'light' ? 'border-deep-950/20 group-hover:bg-deep-950 group-hover:text-aqua-300' : 'border-white/20 group-hover:bg-aqua-400 group-hover:text-deep-950'"
                >
                  <ArrowUpRight class="h-3.5 w-3.5" :stroke-width="2.2" aria-hidden="true" />
                </span>
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <div v-reveal class="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-deep-950/[0.08] bg-foam px-6 py-5 sm:flex-row sm:items-center">
        <p class="text-sm text-deep-900/70">
          <span class="font-heading font-bold text-deep-950">¿No sabés qué nivel te corresponde?</span>
          Contanos tu edad y experiencia y te orientamos sin compromiso.
        </p>
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="link-arrow shrink-0 text-deep-700 hover:text-aqua-700">
          <MessageCircle class="h-4 w-4" :stroke-width="2" aria-hidden="true" />
          Hablar con secretaría
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Dumbbell,
  HeartPulse,
  MessageCircle,
  Trophy,
  WavesLadder,
} from '@lucide/vue'
import { whatsappUrl } from '~/data/site'

type ProgramSize = 'large' | 'medium' | 'small'
type ProgramTheme = 'dark' | 'light'

const programs = [
  {
    id: 'escuela',
    tag: 'Escuela infantil',
    kicker: '4 a 12 años',
    title: 'Primeras brazadas, confianza para toda la vida.',
    description:
      'Ambientación, juego y técnica progresiva. Grupos por nivel con cupos cuidados y muestras anuales de natación.',
    image: '/images/opt/card-kids.jpg',
    imageAlt: 'Chicos en la escuela de natación del Club 25 de Mayo',
    icon: Baby,
    size: 'large' as ProgramSize,
    theme: 'dark' as ProgramTheme,
    intensity: 2,
    meta: [
      { label: 'Edad', value: '4–12 años' },
      { label: 'Objetivo', value: 'Aprender y disfrutar' },
    ],
  },
  {
    id: 'adultos',
    tag: 'Adultos',
    kicker: 'Desde cero o perfeccionamiento',
    title: 'Nadar mejor, moverse sin dolor.',
    description:
      'Técnica de brazada y respiración, corrección postural y entrenamientos que cuidan la espalda.',
    image: '/images/opt/card-adults.jpg',
    imageAlt: 'Nadador entrenando en la pileta climatizada',
    icon: Dumbbell,
    size: 'medium' as ProgramSize,
    theme: 'dark' as ProgramTheme,
    intensity: 2,
    meta: [
      { label: 'Edad', value: '+16 años' },
      { label: 'Objetivo', value: 'Técnica y salud' },
    ],
  },
  {
    id: 'libre',
    tag: 'Pileta libre',
    kicker: 'Tu ritmo, tu horario',
    title: 'Andariveles por velocidad.',
    description:
      'Nado libre por turnos de mañana, mediodía y noche. Abonos mensuales o cuponeras.',
    image: '/images/opt/card-libre.jpg',
    imageAlt: 'Andariveles separados por ritmo en la pileta',
    icon: WavesLadder,
    size: 'small' as ProgramSize,
    theme: 'dark' as ProgramTheme,
    intensity: 1,
    meta: [
      { label: 'Edad', value: 'Libre' },
      { label: 'Objetivo', value: 'Ritmo propio' },
    ],
  },
  {
    id: 'aquagym',
    tag: 'Aquagym',
    kicker: 'Movimiento sin impacto',
    title: 'Entrenar sin castigar las articulaciones.',
    description:
      'Música, mancuernas acuáticas y trabajo cardiovascular en un ambiente cálido y distendido.',
    image: null,
    imageAlt: '',
    icon: HeartPulse,
    size: 'small' as ProgramSize,
    theme: 'light' as ProgramTheme,
    intensity: 2,
    meta: [
      { label: 'Edad', value: '+16 años' },
      { label: 'Objetivo', value: 'Movilidad' },
    ],
  },
  {
    id: 'competencia',
    tag: 'Alta competencia',
    kicker: 'Rendimiento',
    title: 'Entrenamiento para competir.',
    description:
      'Trabajo técnico, series y planificación para nadadores que buscan su mejor versión en el agua.',
    image: '/images/opt/card-colonia.jpg',
    imageAlt: 'Nadador de competencia entrenando en la pileta',
    icon: Trophy,
    size: 'small' as ProgramSize,
    theme: 'dark' as ProgramTheme,
    intensity: 3,
    meta: [
      { label: 'Edad', value: 'Juveniles y adultos' },
      { label: 'Objetivo', value: 'Rendimiento' },
    ],
  },
]
</script>

<style scoped>
.program-media {
  transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.program-card:hover .program-media {
  transform: scale(1.06);
}

@media (prefers-reduced-motion: reduce) {
  .program-card:hover .program-media {
    transform: none;
  }
}
</style>
