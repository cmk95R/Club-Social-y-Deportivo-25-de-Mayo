<template>
  <section id="horarios" class="relative overflow-hidden bg-deep-950 py-24 text-white sm:py-28 lg:py-32">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-aqua-500/10 blur-3xl" />
      <div class="absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-deep-600/20 blur-3xl" />
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>

    <div class="container-x relative">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div v-reveal class="max-w-2xl">
          <span class="eyebrow text-aqua-300/80">
            <span class="eyebrow-dot" />
            Horarios y disponibilidad
          </span>
          <h2 class="display-2 mt-5 text-white">
            Encontrá tu
            <span class="serif-accent text-aqua-300">momento en el agua.</span>
          </h2>
        </div>

        <div v-reveal="{ delay: 100 }" class="max-w-sm lg:text-right">
          <p class="text-sm leading-relaxed text-white/55">
            Filtrá por disciplina o por día. Los cupos se actualizan por temporada y se confirman
            en secretaría.
          </p>
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="link-arrow mt-4 text-aqua-300 hover:text-white lg:justify-end">
            <MessageCircle class="h-4 w-4" :stroke-width="2" aria-hidden="true" />
            Consultar disponibilidad
          </a>
        </div>
      </div>

      <div v-reveal="{ delay: 120 }" class="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm sm:p-5">
        <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div class="-mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div class="flex w-max items-center gap-1.5 rounded-full border border-white/10 bg-deep-950/60 p-1.5">
              <button
                v-for="discipline in disciplines"
                :key="discipline.id"
                type="button"
                :aria-pressed="activeDiscipline === discipline.id"
                class="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300"
                :class="
                  activeDiscipline === discipline.id
                    ? 'bg-aqua-400 text-deep-950 shadow-[0_8px_24px_-12px_rgba(34,211,238,0.9)]'
                    : 'text-white/55 hover:bg-white/[0.06] hover:text-white'
                "
                @click="activeDiscipline = discipline.id"
              >
                <component :is="discipline.icon" class="h-3.5 w-3.5" :stroke-width="2" aria-hidden="true" />
                {{ discipline.label }}
              </button>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filtrar por día">
            <button
              type="button"
              :aria-pressed="activeDay === 'all'"
              class="rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors duration-200"
              :class="
                activeDay === 'all'
                  ? 'border-aqua-300/60 bg-aqua-300/10 text-aqua-200'
                  : 'border-white/10 text-white/55 hover:border-white/25 hover:text-white/80'
              "
              @click="activeDay = 'all'"
            >
              Todos
            </button>
            <button
              v-for="day in days"
              :key="day.id"
              type="button"
              :aria-pressed="activeDay === day.id"
              class="grid h-8 w-9 place-items-center rounded-full border text-[10px] font-bold uppercase tracking-[0.08em] transition-colors duration-200"
              :class="
                activeDay === day.id
                  ? 'border-aqua-300/60 bg-aqua-300/10 text-aqua-200'
                  : 'border-white/10 text-white/55 hover:border-white/25 hover:text-white/80'
              "
              @click="activeDay = day.id"
            >
              {{ day.short }}
            </button>
          </div>
        </div>

        <div class="mt-4 flex items-center justify-between gap-4 border-t border-white/10 pt-3.5">
          <p class="text-[11px] text-white/55" aria-live="polite">
            {{ filteredSlots.length }}
            {{ filteredSlots.length === 1 ? 'horario disponible' : 'horarios disponibles' }}
          </p>
          <button
            v-if="activeDiscipline !== 'all' || activeDay !== 'all'"
            type="button"
            class="text-[10px] font-bold uppercase tracking-[0.16em] text-aqua-300/80 transition-colors hover:text-aqua-200"
            @click="resetFilters"
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      <div class="mt-5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025]" v-reveal="{ delay: 160 }">
        <div class="hidden grid-cols-12 gap-4 border-b border-white/10 bg-white/[0.03] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55 lg:grid">
          <span class="col-span-3">Horario</span>
          <span class="col-span-4">Actividad</span>
          <span class="col-span-2">Nivel / edad</span>
          <span class="col-span-2">Días</span>
          <span class="col-span-1 text-right">Cupos</span>
        </div>

        <TransitionGroup tag="div" name="schedule" class="divide-y divide-white/[0.07]">
          <div
            v-for="slot in filteredSlots"
            :key="slot.id"
            class="group grid grid-cols-1 gap-3 px-5 py-4 transition-colors duration-300 hover:bg-white/[0.04] sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-4"
          >
            <div class="flex items-center gap-2.5 lg:col-span-3">
              <Clock class="h-3.5 w-3.5 shrink-0 text-aqua-300/70" :stroke-width="2" aria-hidden="true" />
              <span class="font-heading text-base font-bold tracking-tight text-white">
                {{ slot.start }}
                <span class="text-white/55">–</span>
                {{ slot.end }}
              </span>
            </div>

            <div class="lg:col-span-4">
              <div class="flex flex-wrap items-center gap-2">
                <span
                  class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em]"
                  :class="disciplineMeta[slot.discipline].badge"
                >
                  <component :is="disciplineMeta[slot.discipline].icon" class="h-2.5 w-2.5" :stroke-width="2.5" aria-hidden="true" />
                  {{ disciplineMeta[slot.discipline].label }}
                </span>
                <span class="text-sm font-semibold text-white/85">{{ slot.title }}</span>
              </div>
            </div>

            <div class="flex items-center gap-4 lg:col-span-2">
              <span class="text-xs text-white/55">{{ slot.level }}</span>
            </div>

            <div class="flex flex-wrap items-center gap-1 lg:col-span-2">
              <span
                v-for="day in slot.days"
                :key="day"
                class="grid h-6 w-6 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-[9px] font-bold uppercase text-white/55"
              >
                {{ day }}
              </span>
            </div>

            <div class="flex items-center justify-between gap-3 lg:col-span-1 lg:justify-end">
              <span
                class="text-[10px] font-semibold uppercase tracking-wide"
                :class="slot.spots === 'Cupos limitados' ? 'text-amber-300/80' : 'text-emerald-300/80'"
              >
                {{ slot.spots }}
              </span>
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-aqua-300/50 hover:bg-aqua-400 hover:text-deep-950"
                :aria-label="`Consultar por ${slot.title} de ${slot.start}`"
              >
                <ArrowUpRight class="h-3.5 w-3.5" :stroke-width="2" aria-hidden="true" />
              </a>
            </div>
          </div>
        </TransitionGroup>

        <div v-if="filteredSlots.length === 0" class="px-6 py-14 text-center">
          <p class="font-heading text-lg font-bold text-white">No hay horarios con ese filtro.</p>
          <p class="mt-2 text-sm text-white/60">Probá con otro día o consultanos por WhatsApp.</p>
          <button type="button" class="btn-ghost mt-6" @click="resetFilters">Ver todos los horarios</button>
        </div>
      </div>

      <div class="mt-4 flex flex-col gap-2 text-[11px] leading-relaxed text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p class="inline-flex items-start gap-2">
          <Info class="mt-0.5 h-3.5 w-3.5 shrink-0" :stroke-width="2" aria-hidden="true" />
          Grilla orientativa. Los horarios, niveles y cupos se confirman en secretaría al inscribirte.
        </p>
        <p>Última actualización: temporada en curso</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowUpRight,
  Baby,
  Clock,
  Dumbbell,
  HeartPulse,
  Info,
  Layers,
  MessageCircle,
  Trophy,
  WavesLadder,
} from '@lucide/vue'
import { whatsappUrl } from '~/data/site'

type DisciplineId = 'escuela' | 'adultos' | 'libre' | 'aquagym' | 'competencia'

const disciplines = [
  { id: 'all', label: 'Todo', icon: Layers },
  { id: 'escuela', label: 'Escuela', icon: Baby },
  { id: 'adultos', label: 'Adultos', icon: Dumbbell },
  { id: 'libre', label: 'Pileta libre', icon: WavesLadder },
  { id: 'aquagym', label: 'Aquagym', icon: HeartPulse },
  { id: 'competencia', label: 'Competencia', icon: Trophy },
] as const

const disciplineMeta: Record<
  DisciplineId,
  { label: string; icon: typeof Baby; badge: string }
> = {
  escuela: { label: 'Escuela', icon: Baby, badge: 'bg-sky-400/15 text-sky-200' },
  adultos: { label: 'Adultos', icon: Dumbbell, badge: 'bg-aqua-400/15 text-aqua-200' },
  libre: { label: 'Libre', icon: WavesLadder, badge: 'bg-teal-400/15 text-teal-200' },
  aquagym: { label: 'Aquagym', icon: HeartPulse, badge: 'bg-cyan-400/15 text-cyan-200' },
  competencia: { label: 'Competencia', icon: Trophy, badge: 'bg-indigo-400/15 text-indigo-200' },
}

const days = [
  { id: 'lun', short: 'Lun' },
  { id: 'mar', short: 'Mar' },
  { id: 'mie', short: 'Mié' },
  { id: 'jue', short: 'Jue' },
  { id: 'vie', short: 'Vie' },
  { id: 'sab', short: 'Sáb' },
] as const

const slots = [
  {
    id: 'esc-1',
    discipline: 'escuela' as DisciplineId,
    title: 'Escuelita · Iniciación',
    start: '17:00',
    end: '17:45',
    level: '4–6 años',
    days: ['Lun', 'Mié'],
    spots: 'Cupos limitados',
  },
  {
    id: 'esc-2',
    discipline: 'escuela' as DisciplineId,
    title: 'Escuela · Nivel 2',
    start: '17:00',
    end: '17:45',
    level: '7–9 años',
    days: ['Mar', 'Jue'],
    spots: 'Disponible',
  },
  {
    id: 'esc-3',
    discipline: 'escuela' as DisciplineId,
    title: 'Escuela · Nivel 3',
    start: '18:00',
    end: '19:00',
    level: '10–12 años',
    days: ['Lun', 'Mié'],
    spots: 'Disponible',
  },
  {
    id: 'esc-4',
    discipline: 'escuela' as DisciplineId,
    title: 'Escuela · Grupo integrado',
    start: '10:00',
    end: '11:00',
    level: '4–12 años',
    days: ['Sáb'],
    spots: 'Cupos limitados',
  },
  {
    id: 'adu-1',
    discipline: 'adultos' as DisciplineId,
    title: 'Adultos · Iniciación',
    start: '07:30',
    end: '08:30',
    level: '+16 años',
    days: ['Lun', 'Mié', 'Vie'],
    spots: 'Disponible',
  },
  {
    id: 'adu-2',
    discipline: 'adultos' as DisciplineId,
    title: 'Adultos · Perfeccionamiento',
    start: '19:00',
    end: '20:00',
    level: '+16 años',
    days: ['Mar', 'Jue'],
    spots: 'Cupos limitados',
  },
  {
    id: 'adu-3',
    discipline: 'adultos' as DisciplineId,
    title: 'Adultos · Técnica',
    start: '09:00',
    end: '10:00',
    level: '+16 años',
    days: ['Sáb'],
    spots: 'Disponible',
  },
  {
    id: 'lib-1',
    discipline: 'libre' as DisciplineId,
    title: 'Pileta libre · Andariveles',
    start: '07:00',
    end: '21:30',
    level: 'Todos los niveles',
    days: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
    spots: 'Disponible',
  },
  {
    id: 'lib-2',
    discipline: 'libre' as DisciplineId,
    title: 'Pileta libre · Fin de semana',
    start: '08:30',
    end: '14:00',
    level: 'Todos los niveles',
    days: ['Sáb'],
    spots: 'Disponible',
  },
  {
    id: 'aqu-1',
    discipline: 'aquagym' as DisciplineId,
    title: 'Aquagym · Salud',
    start: '09:00',
    end: '09:50',
    level: '+16 años',
    days: ['Lun', 'Mié', 'Vie'],
    spots: 'Cupos limitados',
  },
  {
    id: 'aqu-2',
    discipline: 'aquagym' as DisciplineId,
    title: 'Aquagym · Nocturno',
    start: '19:30',
    end: '20:20',
    level: '+16 años',
    days: ['Mar', 'Jue'],
    spots: 'Disponible',
  },
  {
    id: 'com-1',
    discipline: 'competencia' as DisciplineId,
    title: 'Alta competencia · Series',
    start: '18:00',
    end: '20:00',
    level: 'Juveniles y adultos',
    days: ['Lun', 'Mié', 'Vie'],
    spots: 'Cupos limitados',
  },
  {
    id: 'com-2',
    discipline: 'competencia' as DisciplineId,
    title: 'Alta competencia · Técnica',
    start: '08:00',
    end: '09:30',
    level: 'Juveniles y adultos',
    days: ['Sáb'],
    spots: 'Cupos limitados',
  },
]

const activeDiscipline = ref<'all' | DisciplineId>('all')
const activeDay = ref<'all' | (typeof days)[number]['id']>('all')

const dayLabelMap: Record<string, string> = {
  lun: 'Lun',
  mar: 'Mar',
  mie: 'Mié',
  jue: 'Jue',
  vie: 'Vie',
  sab: 'Sáb',
}

const filteredSlots = computed(() =>
  slots.filter((slot) => {
    const matchDiscipline =
      activeDiscipline.value === 'all' || slot.discipline === activeDiscipline.value
    const matchDay =
      activeDay.value === 'all' ||
      slot.days.includes(dayLabelMap[activeDay.value] ?? '')
    return matchDiscipline && matchDay
  }),
)

function resetFilters() {
  activeDiscipline.value = 'all'
  activeDay.value = 'all'
}
</script>

<style scoped>
.schedule-move,
.schedule-enter-active,
.schedule-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.schedule-enter-from,
.schedule-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.schedule-leave-active {
  position: absolute;
  inset-inline: 0;
}
</style>
