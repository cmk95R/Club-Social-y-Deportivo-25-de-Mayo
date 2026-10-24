<template>
  <section id="pileta" class="relative overflow-hidden bg-foam py-24 sm:py-28 lg:py-36">
    <div class="pointer-events-none absolute inset-0 bg-grid-faint bg-[length:72px_72px] opacity-40" aria-hidden="true" />
    <div class="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-aqua-200/30 blur-3xl" aria-hidden="true" />

    <div class="container-x relative">
      <div class="grid items-end gap-10 lg:grid-cols-12">
        <div v-reveal class="lg:col-span-7">
          <span class="eyebrow text-deep-700">
            <span class="eyebrow-dot" />
            La pileta · Martínez
          </span>
          <h2 class="display-2 mt-5 max-w-[16ch] text-deep-950">
            Un club con historia.
            <span class="serif-accent block text-deep-700">Agua que se cuida hoy.</span>
          </h2>
        </div>

        <div v-reveal="{ delay: 120 }" class="lg:col-span-5">
          <p class="lede max-w-xl">
            Desde 1905 el Club 25 de Mayo es parte de la vida de Martínez. Nuestro natatorio
            combina una pileta climatizada de 25 metros con una enseñanza cercana, protocolos
            claros de sanidad y un equipo que conoce a cada familia por su nombre.
          </p>
          <NuxtLink to="/#programas" class="link-arrow mt-6 text-deep-700 hover:text-aqua-700">
            Conocé los programas
            <ArrowRight class="h-4 w-4" :stroke-width="2" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>

      <div class="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12">
        <div v-reveal class="lg:col-span-6">
          <div class="relative">
            <div class="relative overflow-hidden rounded-[2rem] bg-deep-900 shadow-water">
              <img
                src="/images/opt/facility-2.jpg"
                alt="Pileta climatizada de 25 metros con andariveles del Natatorio 25 de Mayo"
                width="1600"
                height="1000"
                loading="lazy"
                decoding="async"
                class="aspect-[4/3] w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-deep-950/70 via-transparent to-transparent" aria-hidden="true" />

              <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-aqua-300/90">
                    Pileta cubierta
                  </p>
                  <p class="mt-1 font-heading text-lg font-bold text-white sm:text-xl">
                    25 m · 6 andariveles
                  </p>
                </div>
                <span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white/80 backdrop-blur-md">
                  <MapPin class="h-3 w-3" aria-hidden="true" />
                  Martínez
                </span>
              </div>
            </div>

            <div class="absolute -left-4 -top-6 hidden h-28 w-28 place-items-center rounded-full bg-deep-950 text-center text-white ring-8 ring-foam sm:grid">
              <div>
                <p class="font-serif text-3xl italic leading-none text-aqua-300">1905</p>
                <p class="mt-1 text-[7px] font-bold uppercase leading-tight tracking-[0.2em] text-white/60">
                  Club 25<br />de Mayo
                </p>
              </div>
            </div>

            <div class="absolute -right-3 -top-4 hidden w-36 overflow-hidden rounded-2xl border-4 border-foam shadow-xl sm:block lg:-right-6">
              <img
                src="/images/opt/facility-4.jpg"
                alt="Acceso sobre Rodríguez Peña del Club 25 de Mayo"
                width="700"
                height="700"
                loading="lazy"
                decoding="async"
                class="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div class="grid gap-3.5 sm:grid-cols-2 lg:col-span-6 lg:content-center">
          <article
            v-for="(pillar, index) in pillars"
            :key="pillar.title"
            v-reveal="{ delay: 80 + index * 70 }"
            class="group relative overflow-hidden rounded-3xl border border-deep-950/[0.07] bg-white/70 p-5 backdrop-blur-sm transition-all duration-500 ease-spring hover:-translate-y-1 hover:border-aqua-300/60 hover:bg-white hover:shadow-[0_24px_60px_-32px_rgba(4,22,31,0.35)] sm:p-6"
          >
            <div class="flex items-start justify-between">
              <span class="grid h-11 w-11 place-items-center rounded-2xl bg-deep-950 text-aqua-300 transition-colors duration-500 group-hover:bg-aqua-400 group-hover:text-deep-950">
                <component :is="pillar.icon" class="h-5 w-5" :stroke-width="1.8" aria-hidden="true" />
              </span>
              <span class="font-heading text-[10px] font-bold tracking-[0.2em] text-deep-950/60">
                0{{ index + 1 }}
              </span>
            </div>

            <h3 class="mt-6 font-heading text-base font-bold tracking-tight text-deep-950">
              {{ pillar.title }}
            </h3>
            <p class="mt-2 text-[13px] leading-relaxed text-deep-900/70">
              {{ pillar.text }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Droplets, MapPin, ShieldCheck, ThermometerSun, Users } from '@lucide/vue'

const pillars = [
  {
    title: 'Climatización constante',
    text: 'Agua entre 29 y 31 °C y vestuarios calefaccionados para nadar cómodo en invierno y verano.',
    icon: ThermometerSun,
  },
  {
    title: 'Agua tratada a diario',
    text: 'Control de pH, cloro libre y recambio continuo. Un protocolo que se revisa todos los días.',
    icon: Droplets,
  },
  {
    title: 'Seguridad en cada turno',
    text: 'Guardavidas matriculados y docentes universitarios acompañan cada clase y cada nado libre.',
    icon: ShieldCheck,
  },
  {
    title: 'Comunidad de barrio',
    text: 'Un espacio donde los chicos hacen amigos, las familias se encuentran y nadie queda afuera.',
    icon: Users,
  },
]
</script>
