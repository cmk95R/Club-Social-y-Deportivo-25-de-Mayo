<template>
  <section id="requisitos" class="relative overflow-hidden bg-sand py-24 sm:py-28 lg:py-32">
    <div class="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true">
      <div class="absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full border border-deep-950/[0.06]" />
      <div class="absolute -right-10 -top-10 h-[18rem] w-[18rem] rounded-full border border-deep-950/[0.08]" />
    </div>

    <div class="container-x relative">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-7">
          <div v-reveal>
            <span class="eyebrow text-deep-700">
              <span class="eyebrow-dot" />
              Requisitos y apto médico
            </span>
            <h2 class="display-2 mt-5 max-w-[15ch] text-deep-950">
              Empezar es
              <span class="serif-accent text-deep-700">simple.</span>
            </h2>
            <p class="lede mt-5 max-w-xl">
              Cuatro pasos para sumarte al natatorio. Si tenés dudas, secretaría te acompaña en
              cada instancia.
            </p>
          </div>

          <ol class="mt-10 border-t border-deep-950/10">
            <li
              v-for="(step, index) in steps"
              :key="step.title"
              v-reveal="{ delay: index * 80 }"
              class="group grid grid-cols-[3.25rem_1fr] gap-4 border-b border-deep-950/10 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
            >
              <div class="relative">
                <span class="font-serif text-3xl italic leading-none text-deep-950/60 transition-colors duration-500 group-hover:text-aqua-700 sm:text-4xl">
                  0{{ index + 1 }}
                </span>
              </div>
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="font-heading text-lg font-bold tracking-tight text-deep-950 sm:text-xl">
                    {{ step.title }}
                  </h3>
                  <p class="mt-2 max-w-lg text-sm leading-relaxed text-deep-900/70">
                    {{ step.text }}
                  </p>
                </div>
                <component
                  :is="step.icon"
                  class="mt-1 hidden h-5 w-5 shrink-0 text-deep-950/60 transition-colors duration-500 group-hover:text-deep-700 sm:block"
                  :stroke-width="1.6"
                  aria-hidden="true"
                />
              </div>
            </li>
          </ol>

          <div v-reveal class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/#contacto" class="btn-dark group">
              Empezar la inscripción
              <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </NuxtLink>
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-outline">
              <MessageCircle class="h-4 w-4" aria-hidden="true" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div v-reveal="{ delay: 120 }" class="relative overflow-hidden rounded-[2rem] bg-deep-950 p-7 text-white shadow-water sm:p-8">
            <div class="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-aqua-300/15" aria-hidden="true" />
            <div class="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-aqua-300/20" aria-hidden="true" />

            <span class="relative grid h-12 w-12 place-items-center rounded-2xl bg-aqua-400 text-deep-950">
              <HeartPulse class="h-6 w-6" :stroke-width="1.8" aria-hidden="true" />
            </span>

            <h3 class="mt-6 font-heading text-2xl font-extrabold tracking-tight">
              Apto médico al día
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-white/60">
              La revisación es obligatoria para todos los alumnos. El club ofrece atención médica
              en sede en días determinados; también podés presentar un certificado de un
              profesional externo.
            </p>

            <ul class="mt-6 space-y-3 border-t border-white/10 pt-6">
              <li v-for="item in checklist" :key="item" class="flex items-start gap-3 text-sm text-white/70">
                <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-aqua-400/15 text-aqua-300">
                  <Check class="h-3 w-3" :stroke-width="3" aria-hidden="true" />
                </span>
                {{ item }}
              </li>
            </ul>

            <div class="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-aqua-300/80">
                Importante
              </p>
              <p class="mt-1.5 text-xs leading-relaxed text-white/55">
                La vigencia y el formato del certificado se confirman en secretaría antes de
                abonar la cuota. Los cupos se reservan al completar la inscripción.
              </p>
            </div>

            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="link-arrow mt-6 text-aqua-300 hover:text-white"
            >
              Reservar revisación
              <ArrowRight class="h-4 w-4" :stroke-width="2" aria-hidden="true" />
            </a>
          </div>

          <div v-reveal="{ delay: 180 }" class="mt-4 flex items-center gap-4 rounded-3xl border border-deep-950/10 bg-white/60 p-5">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-deep-950/[0.06] text-deep-700">
              <CalendarCheck class="h-5 w-5" :stroke-width="1.8" aria-hidden="true" />
            </span>
            <div>
              <p class="font-heading text-xs font-bold text-deep-950">Secretaría</p>
              <p class="mt-0.5 text-[11px] text-deep-900/70">
                Lun a vie de 08:00 a 21:30 · Sáb de 08:30 a 13:30
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  ClipboardCheck,
  FileCheck,
  HeartPulse,
  MessageCircle,
  Stethoscope,
  UserRound,
} from '@lucide/vue'
import { whatsappUrl } from '~/data/site'

const steps = [
  {
    title: 'Elegí tu programa',
    text: 'Escuela, adultos, pileta libre, aquagym o competencia. Te orientamos según edad, experiencia y objetivos.',
    icon: ClipboardCheck,
  },
  {
    title: 'Reservá tu revisación',
    text: 'Consultá por los días de atención médica en sede o presentá un certificado de tu profesional.',
    icon: Stethoscope,
  },
  {
    title: 'Presentá el apto médico',
    text: 'El certificado debe estar vigente y a nombre del alumno. Secretaría revisa el formato antes de inscribirte.',
    icon: FileCheck,
  },
  {
    title: 'Confirmá tu lugar',
    text: 'Completá la inscripción, elegí tu turno y aboná la cuota. Listo: te esperamos en la pileta.',
    icon: UserRound,
  },
]

const checklist = [
  'Apto médico vigente y firmado.',
  'DNI del alumno (fotocopia o digital).',
  'Datos de contacto de un adulto responsable.',
  'Malla, gorra y antiparras para la primera clase.',
]
</script>
