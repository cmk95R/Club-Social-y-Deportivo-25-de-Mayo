<template>
  <section id="services" class="py-24 bg-sky-50/40 relative overflow-hidden">
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-20 -left-20 w-80 h-80 bg-sky-200 rounded-full blur-3xl opacity-40" />
      <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-20 reveal" ref="headerRef">
        <span class="text-xs font-heading font-extrabold tracking-widest text-primary-600 uppercase bg-white px-3.5 py-1.5 rounded-full border border-sky-200 shadow-sm">
          Propuestas Acuáticas 365 Días
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl text-gray-900">
          Nuestras Actividades en la Pileta
        </h2>
        <div class="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-primary-600 mx-auto mt-4 rounded-full reveal-bar" />
        <p class="section-subtitle max-w-2xl mx-auto mt-5 reveal-sub text-gray-600">
          Propuestas pensadas para cada etapa de la vida. Desde los primeros pasos en el agua hasta entrenamiento máster, pileta libre y clases recreativas.
        </p>
      </div>

      <div class="flex flex-col gap-12 md:gap-16">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          :ref="el => serviceRefs[i] = el"
          :class="[
            'service-card grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch group/card bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-sky-100/80',
            i % 2 === 0 ? 'reveal-left' : 'reveal-right',
          ]"
          :style="`transition-delay: ${i * 80}ms`"
        >
          <div
            :class="['service-image relative overflow-hidden rounded-2xl shadow-md border border-gray-100', i % 2 !== 0 ? 'md:order-2' : '']"
            style="min-height: 280px"
          >
            <img
              :src="service.image"
              :alt="service.title"
              loading="lazy"
              class="service-img absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-950/60 via-primary-900/20 to-transparent transition-opacity duration-500 group-hover/card:opacity-40" />

            <div class="shimmer absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out" />

            <div class="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/95 text-primary-800 font-heading font-extrabold text-xs shadow-md ring-1 ring-sky-200">
                0{{ i + 1 }} · {{ service.badge }}
              </span>
            </div>

            <div class="absolute bottom-4 right-4 z-10 transition-all duration-500 group-hover/card:scale-110">
              <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm text-primary-600 shadow-md ring-1 ring-sky-100" v-html="service.icon" />
            </div>
          </div>

          <div
            :class="[
              'service-content p-4 sm:p-6 lg:p-8 flex flex-col justify-center relative',
              i % 2 !== 0 ? 'md:order-1' : '',
            ]"
          >
            <span class="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-primary-500 rounded-r-full transition-all duration-500 group-hover/card:h-2/3" />

            <div class="flex items-center gap-3 mb-4">
              <span class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sky-50 text-primary-600 ring-1 ring-sky-200 transition-all duration-500 group-hover/card:bg-primary-600 group-hover/card:text-white" v-html="service.icon" />
              <h3 class="font-heading font-bold text-xl sm:text-2xl text-gray-900 group-hover/card:text-primary-700 transition-colors duration-300">
                {{ service.title }}
              </h3>
            </div>

            <p class="text-sm text-gray-600 mb-5 leading-relaxed">
              {{ service.description }}
            </p>

            <ul class="space-y-3 mb-6">
              <li
                v-for="(item, j) in service.items"
                :key="item"
                class="service-item flex gap-3 text-gray-700 text-sm leading-relaxed"
                :style="`transition-delay: ${j * 80 + 150}ms`"
              >
                <span class="check-bullet flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-sky-100 text-primary-600 inline-flex items-center justify-center transition-all duration-300 group-hover/card:bg-primary-600 group-hover/card:text-white">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div>
              <NuxtLink
                to="/#contact"
                class="inline-flex items-center gap-2 text-xs font-heading font-bold text-primary-600 hover:text-primary-800 uppercase tracking-wider group-hover/card:translate-x-1 transition-all"
              >
                Consultar cupos de esta actividad
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const headerRef = ref(null)
const serviceRefs = ref([])

useIntersectionObserver(headerRef, ([{ isIntersecting }]) => {
  if (isIntersecting) headerRef.value?.classList.add('visible')
}, { threshold: 0.2 })

onMounted(() => {
  serviceRefs.value.forEach((el) => {
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible')
        el.querySelectorAll('.service-item').forEach((it) => it.classList.add('visible'))
        observer.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(el)
  })
})

const iconKids = '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>'
const iconAdults = '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>'
const iconFree = '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
const iconAqua = '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"/></svg>'
const iconBaby = '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>'
const iconColonia = '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>'

const services = [
  {
    title: 'Escuela de Natación Infantil (4 a 12 años)',
    badge: 'Infantiles y Juveniles',
    image: '/images/natatorio/escuela.jpg',
    icon: iconKids,
    description: 'Enseñanza lúdica y progresiva para que los chicos adquieran seguridad, dominen las técnicas de nado y disfruten del agua en un entorno de contención y compañerismo.',
    items: [
      'Ambientación y confianza en el medio acuático sin presiones.',
      'Enseñanza técnica de los 4 estilos oficiales: crol, espalda, pecho y mariposa.',
      'Grupos divididos por niveles pedagógicos y edades con cupos cuidados.',
      'Profesores universitarios especializados y muestras anuales de natación.',
    ],
  },
  {
    title: 'Natación Adultos y Perfeccionamiento',
    badge: 'Principiantes a Avanzados',
    image: '/images/natatorio/adultos.jpg',
    icon: iconAdults,
    description: 'Clases orientadas a mejorar la condición física, aprender desde cero o perfeccionar la técnica de brazada y respiración para nadar con mayor eficiencia y menos fatiga.',
    items: [
      'Metodología adaptada para adultos que desean aprender a nadar o perder el miedo.',
      'Corrección biomecánica y optimización de patada, respiración y ritmo.',
      'Entrenamientos aeróbicos que cuidan la espalda y fortalecen el tren superior.',
      'Planes especiales de preparación para triatlón, máster o desafíos de aguas abiertas.',
    ],
  },
  {
    title: 'Pileta Libre (Nado Libre por Turnos)',
    badge: 'Horarios Flexibles',
    image: '/images/natatorio/libre.jpg',
    icon: iconFree,
    description: 'Espacio pensado para quienes prefieren nadar a su propio ritmo. Contamos con andariveles ordenados por velocidad para garantizar una experiencia cómoda y placentera.',
    items: [
      'Andariveles señalizados para nado suave, medio y rápido.',
      'Amplia disponibilidad horaria: turnos por la mañana, mediodía, tarde y noche.',
      'Ideal para liberar tensiones laborales, despejar la mente y mejorar la capacidad pulmonar.',
      'Abonos mensuales accesibles, paquetes de clases semanales o cuponeras.',
    ],
  },
  {
    title: 'Aquagym y Gimnasia Acuática',
    badge: 'Salud y Vitalidad',
    image: '/images/natatorio/aquagym.jpg',
    icon: iconAqua,
    description: 'La actividad perfecta para mantenerse en forma sin impacto en las articulaciones. Clases enérgicas y divertidas con música, diseñadas para todas las edades.',
    items: [
      'Impacto articular nulo: recomendado para proteger rodillas, caderas y columna.',
      'Uso de mancuernas acuáticas, flotadores y bandas de resistencia en el agua.',
      'Estimula la circulación sanguínea, mejora la movilidad y tonifica el cuerpo.',
      'Ambiente alegre, cálido y sumamente amigable para compartir entre vecinos.',
    ],
  },
  {
    title: 'Matronatación (6 meses a 3 años)',
    badge: 'Estimulación Temprana',
    image: '/images/natatorio/matronatacion.jpg',
    icon: iconBaby,
    description: 'Una experiencia única de estimulación psicomotriz y conexión afectiva en el agua entre el bebé y su mamá o papá, guiada por especialistas en infancia acuática.',
    items: [
      'Estimulación sensorial temprana, equilibrio y desarrollo motor en el agua.',
      'Agua con temperatura controlada permanentemente a 30°-31°C.',
      'Fortalece los vínculos afectivos y la confianza del pequeño en el entorno acuático.',
      'Metodología respetuosa de los tiempos y necesidades de cada bebé.',
    ],
  },
  {
    title: 'Temporada de Pileta y Colonia Deportiva',
    badge: 'Vacaciones en el Club',
    image: '/images/natatorio/colonia.jpg',
    icon: iconColonia,
    description: 'En los recesos de verano e invierno, el natatorio se llena de alegría con actividades especiales, juegos en el agua y aprendizaje intensivo para chicos.',
    items: [
      'Talleres diarios de natación combinados con juegos cooperativos en el agua.',
      'Coordinación de profesores y guardavidas permanentes del Club 25 de Mayo.',
      'Instalaciones seguras y vestuarios calefaccionados para máxima tranquilidad.',
      'Beneficios y descuentos por hermanos y aranceles preferenciales para socios.',
    ],
  },
]
</script>

<style scoped>
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

.reveal-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.8s ease, transform 0.8s ease; }
.reveal-left.visible { opacity: 1; transform: translateX(0); }

.reveal-right { opacity: 0; transform: translateX(40px); transition: opacity 0.8s ease, transform 0.8s ease; }
.reveal-right.visible { opacity: 1; transform: translateX(0); }

.reveal-bar { transform: scaleX(0); transform-origin: center; transition: transform 0.6s ease; }
.reveal.visible .reveal-bar { transform: scaleX(1); }

.reveal-sub { opacity: 0; transform: translateY(10px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible .reveal-sub { opacity: 1; transform: translateY(0); }

.service-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.service-card:hover {
  transform: translateY(-4px);
}

.service-img {
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.service-card:hover .service-img {
  transform: scale(1.06);
}

.shimmer {
  background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
  pointer-events: none;
}

.service-item {
  opacity: 0;
  transform: translateX(-15px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.service-item.visible {
  opacity: 1;
  transform: translateX(0);
}
.service-card:hover .service-item { transform: translateX(4px); }

.check-bullet {
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}
.service-card:hover .check-bullet {
  transform: scale(1.1);
}
</style>