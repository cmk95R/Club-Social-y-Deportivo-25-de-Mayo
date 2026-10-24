<template>
  <section class="relative overflow-hidden border-y border-white/10 bg-deep-950 py-4" aria-label="Servicios e instalaciones del natatorio">
    <h2 class="sr-only">Servicios e instalaciones del natatorio</h2>

    <div class="mask-fade-x overflow-hidden">
      <div class="marquee-track flex w-max animate-marquee items-center gap-10 pr-10">
        <template v-for="copy in 2" :key="copy">
          <div
            v-for="item in items"
            :key="`${copy}-${item.label}`"
            class="flex shrink-0 items-center gap-2.5"
            :aria-hidden="copy === 2 ? 'true' : undefined"
          >
            <component :is="item.icon" class="h-3.5 w-3.5 text-aqua-300/80" :stroke-width="1.8" aria-hidden="true" />
            <span class="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
              {{ item.label }}
            </span>
            <span class="ml-7 h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Accessibility,
  Baby,
  Check,
  Droplets,
  MapPin,
  ShieldCheck,
  ThermometerSun,
  WavesLadder,
} from '@lucide/vue'

const items = [
  { label: 'Agua climatizada 29–31 °C', icon: ThermometerSun },
  { label: 'Guardavidas matriculados', icon: ShieldCheck },
  { label: 'Vestuarios calefaccionados', icon: WavesLadder },
  { label: 'Andariveles por ritmo', icon: Check },
  { label: 'Control diario de agua', icon: Droplets },
  { label: 'Revisación médica en sede', icon: Accessibility },
  { label: 'Desde los 4 años', icon: Baby },
  { label: 'Rodríguez Peña 941, Martínez', icon: MapPin },
]
</script>
