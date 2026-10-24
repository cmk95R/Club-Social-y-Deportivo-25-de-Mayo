<template>
  <section id="beneficios" class="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
    <div class="container-x">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-7">
          <div v-reveal>
            <span class="eyebrow text-deep-700">
              <span class="eyebrow-dot" />
              Por qué nadar
            </span>
            <h2 class="display-2 mt-5 max-w-[17ch] text-deep-950">
              El ejercicio que tu cuerpo
              <span class="serif-accent text-deep-700">puede sostener.</span>
            </h2>
            <p class="lede mt-5 max-w-xl">
              La natación combina trabajo cardiovascular, fuerza y movilidad con un impacto mínimo
              en las articulaciones. Un hábito que acompaña todas las etapas de la vida.
            </p>
          </div>

          <div class="mt-10 border-t border-deep-950/10">
            <article
              v-for="(benefit, index) in benefits"
              :key="benefit.title"
              v-reveal="{ delay: index * 70 }"
              class="group grid grid-cols-[2.75rem_1fr] gap-4 border-b border-deep-950/10 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
            >
              <span class="grid h-10 w-10 place-items-center rounded-full bg-foam text-deep-700 transition-colors duration-500 group-hover:bg-aqua-400 group-hover:text-deep-950 sm:h-11 sm:w-11">
                <component :is="benefit.icon" class="h-5 w-5" :stroke-width="1.8" aria-hidden="true" />
              </span>
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="font-heading text-base font-bold tracking-tight text-deep-950">
                    {{ benefit.title }}
                  </h3>
                  <p class="mt-1.5 max-w-xl text-sm leading-relaxed text-deep-900/70">
                    {{ benefit.text }}
                  </p>
                </div>
                <span class="mt-1 font-heading text-[10px] font-bold tracking-[0.18em] text-deep-950/60">
                  0{{ index + 1 }}
                </span>
              </div>
            </article>
          </div>
        </div>

        <div v-reveal="{ delay: 120 }" class="lg:col-span-5">
          <div class="relative h-full min-h-[26rem] overflow-hidden rounded-[2rem] bg-deep-900">
            <img
              src="/images/opt/card-aqua.jpg"
              alt="Nadador entrenando en el agua templada del natatorio"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/20 to-deep-950/10" aria-hidden="true" />

            <div class="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <span class="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-deep-950/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/75 backdrop-blur-md">
                <WavesLadder class="h-3.5 w-3.5 text-aqua-300" :stroke-width="2" aria-hidden="true" />
                Agua templada
              </span>

              <div class="mt-20">
                <p class="max-w-sm font-serif text-2xl italic leading-snug text-white sm:text-[1.9rem]">
                  Nadar es el ejercicio que se adapta a cada cuerpo, cada edad y cada objetivo.
                </p>
                <p class="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-aqua-300/80">
                  La pileta como punto de encuentro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Activity, Dumbbell, HeartPulse, Users, WavesLadder } from '@lucide/vue'

const benefits = [
  {
    title: 'Bajo impacto articular',
    text: 'El agua sostiene el cuerpo y reduce la carga sobre rodillas, caderas y columna.',
    icon: HeartPulse,
  },
  {
    title: 'Trabajo cardiovascular',
    text: 'Un entrenamiento completo que mejora la capacidad pulmonar y la resistencia.',
    icon: Activity,
  },
  {
    title: 'Fuerza y movilidad',
    text: 'Cada brazada activa tren superior, core y piernas con resistencia natural.',
    icon: Dumbbell,
  },
  {
    title: 'Un hábito compartido',
    text: 'Clases en grupo y un club de barrio que sostiene la constancia en el tiempo.',
    icon: Users,
  },
]
</script>
