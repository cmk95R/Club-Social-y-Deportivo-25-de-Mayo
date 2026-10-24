<template>
  <section id="contact" class="relative py-20 flex items-center overflow-hidden bg-fixed"
    style="background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 15%, #1e356b 95%, #111d38 100%);">
    <div aria-hidden="true" class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute inset-0 opacity-25"
        style="background-image: radial-gradient(circle at 20% 30%, rgba(106,146,220,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(40,77,157,0.3) 0%, transparent 45%);" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
      <div class="text-center mb-16 reveal" ref="headerRef">
        <span class="text-xs font-heading font-extrabold tracking-widest text-primary-600 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
          Sede y Secretaría
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl text-gray-900">
          Contacto y Ubicación del Natatorio
        </h2>
        <div class="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-primary-600 mx-auto mt-4 rounded-full reveal-bar" />
        <p class="section-subtitle max-w-md mx-auto mt-5 reveal-sub text-gray-600">
          Vení a conocer la pileta o consultanos por vacantes, turnos y aranceles actuales.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <!-- Location and Direct Info Card -->
        <div class="reveal-left w-full h-full" ref="mapRef">
          <div class="rounded-3xl overflow-hidden shadow-xl border border-sky-100 bg-white relative p-8 sm:p-10 flex flex-col justify-between h-full">
            <div class="absolute top-0 right-0 w-48 h-48 bg-sky-50 rounded-bl-full -z-0 opacity-70" />

            <div class="relative z-10">
              <!-- Real club entrance photo -->
              <div class="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-sky-100 shadow-sm">
                <img
                  src="/images/nata/12.jpg"
                  alt="Sede Club Social y Deportivo 25 de Mayo Martínez"
                  class="w-full h-full object-cover object-center"
                />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-950/85 backdrop-blur-sm text-white text-[11px] font-heading font-extrabold uppercase tracking-wider shadow-sm">
                  Sede Rodríguez Peña 941
                </span>
              </div>

              <div class="inline-flex items-center gap-3 mb-6">
                <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 text-white shadow-md shadow-primary-600/30">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-heading font-extrabold text-lg text-gray-900">Club Social y Deportivo 25 de Mayo</h3>
                  <p class="text-xs font-semibold text-primary-600 uppercase tracking-wider">Martínez · San Isidro</p>
                </div>
              </div>

              <div class="space-y-5 text-gray-700 text-sm">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-sky-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"/>
                    </svg>
                  </div>
                  <div>
                    <strong class="text-gray-900 block font-heading">Dirección de la Sede:</strong>
                    <span>Rodríguez Peña 941, Martínez (B1640HBS), Provincia de Buenos Aires.</span>
                    <p class="text-xs text-gray-500 mt-1">A pocas cuadras de Av. Santa Fe y centro comercial de Martínez.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-sky-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                  </div>
                  <div>
                    <strong class="text-gray-900 block font-heading">Teléfonos de Contacto:</strong>
                    <span>(011) 4733-3719 · (011) 4792-7007</span>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-sky-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <strong class="text-gray-900 block font-heading">Horarios de Secretaría:</strong>
                    <span>Lunes a Viernes: 08:00 a 21:30 hs</span><br />
                    <span>Sábados: 08:30 a 13:30 hs</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="https://maps.google.com/?q=Club+Social+y+Deportivo+25+de+Mayo+Rodriguez+Pena+941+Martinez"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-primary-700 font-heading font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.314c-.317-.159-.69-.159-1.006 0L3.622 5.75c-.381.19-.622.58-.622 1.006v11.937c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.997 2.499c.317.159.69.159 1.006 0z"/>
                </svg>
                Ver en Google Maps
              </a>
              <a
                href="https://wa.me/5491147333719?text=Hola!%20Quisiera%20consultar%20por%20la%20pileta%20del%20Club%2025%20de%20Mayo"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <svg class="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
                </svg>
                WhatsApp Directo
              </a>
            </div>
          </div>
        </div>

        <!-- Consultation Form -->
        <div class="reveal-right w-full" ref="formRef">
          <form @submit.prevent="handleSubmit" novalidate class="flex flex-col gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-sky-100 shadow-xl">
            <h3 class="font-heading font-extrabold text-xl text-gray-900 mb-1">
              Consulta de Vacantes y Aranceles
            </h3>
            <p class="text-xs text-gray-500 mb-2">Completá el formulario y la secretaría del club te responderá a la brevedad.</p>

            <div>
              <input
                v-model="form.name"
                type="text"
                placeholder="Nombre y apellido *"
                :class="['w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-sky-50/40 text-gray-900 placeholder-gray-400 text-sm shadow-sm transition-all duration-200 outline-none focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100', errors.name ? 'border-red-400 focus:border-red-400' : '']"
              />
              <p v-if="errors.name" class="text-red-500 text-xs mt-1 font-medium">{{ errors.name }}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="Teléfono / WhatsApp *"
                  :class="['w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-sky-50/40 text-gray-900 placeholder-gray-400 text-sm shadow-sm transition-all duration-200 outline-none focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100', errors.phone ? 'border-red-400 focus:border-red-400' : '']"
                />
                <p v-if="errors.phone" class="text-red-500 text-xs mt-1 font-medium">{{ errors.phone }}</p>
              </div>

              <div>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Correo electrónico *"
                  :class="['w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-sky-50/40 text-gray-900 placeholder-gray-400 text-sm shadow-sm transition-all duration-200 outline-none focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100', errors.email ? 'border-red-400 focus:border-red-400' : '']"
                />
                <p v-if="errors.email" class="text-red-500 text-xs mt-1 font-medium">{{ errors.email }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <select
                  v-model="form.activity"
                  class="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-sky-50/40 text-gray-700 text-sm shadow-sm transition-all duration-200 outline-none focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                >
                  <option value="">Actividad de interés...</option>
                  <option value="Escuela de Natación Infantil">Escuela Natación Infantil (4 a 12)</option>
                  <option value="Natación Adultos">Natación Adultos</option>
                  <option value="Pileta Libre">Pileta Libre</option>
                  <option value="Aquagym">Aquagym / Gimnasia Acuática</option>
                  <option value="Colonia y Temporada">Colonia de Verano / Temporada</option>
                  <option value="Otras consultas">Otras consultas</option>
                </select>
              </div>

              <div>
                <select
                  v-model="form.shift"
                  class="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-sky-50/40 text-gray-700 text-sm shadow-sm transition-all duration-200 outline-none focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                >
                  <option value="">Turno de preferencia...</option>
                  <option value="Mañana (07:30 a 12:00)">Mañana (07:30 a 12:00)</option>
                  <option value="Mediodía (12:00 a 17:00)">Mediodía (12:00 a 17:00)</option>
                  <option value="Tarde/Noche (17:00 a 21:30)">Tarde/Noche (17:00 a 21:30)</option>
                  <option value="Sábados">Sábados (08:30 a 14:00)</option>
                  <option value="Indistinto">Indistinto</option>
                </select>
              </div>
            </div>

            <div>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Escribí tu mensaje o consulta (edad del alumno, nivel previo, etc.) *"
                :class="['w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-sky-50/40 text-gray-900 placeholder-gray-400 text-sm shadow-sm transition-all duration-200 outline-none focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 resize-none', errors.message ? 'border-red-400 focus:border-red-400' : '']"
              />
              <p v-if="errors.message" class="text-red-500 text-xs mt-1 font-medium">{{ errors.message }}</p>
            </div>

            <div class="flex justify-end mt-2">
              <button
                type="submit"
                :disabled="sending"
                class="bg-primary-600 hover:bg-primary-700 text-white font-heading font-bold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/30 uppercase tracking-wider text-xs md:text-sm flex items-center justify-center min-w-[160px]"
              >
                <span v-if="!sending">Enviar Consulta</span>
                <span v-else class="flex items-center gap-2">
                  <svg class="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Enviando...
                </span>
              </button>
            </div>

            <Transition name="feedback">
              <div
                v-if="feedback"
                :class="['mt-4 px-4 py-3 rounded-xl text-sm text-center font-medium shadow-sm', feedback.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200']"
              >
                {{ feedback.message }}
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import emailjs from '@emailjs/browser'

const config = useRuntimeConfig().public.emailjs

const headerRef = ref(null)
const formRef = ref(null)
const mapRef = ref(null)

useIntersectionObserver(headerRef, ([{ isIntersecting }]) => {
  if (isIntersecting) headerRef.value?.classList.add('visible')
})
useIntersectionObserver(formRef, ([{ isIntersecting }]) => {
  if (isIntersecting) formRef.value?.classList.add('visible')
}, { threshold: 0.1 })
useIntersectionObserver(mapRef, ([{ isIntersecting }]) => {
  if (isIntersecting) mapRef.value?.classList.add('visible')
}, { threshold: 0.1 })

const form = reactive({
  name: '',
  phone: '',
  email: '',
  activity: '',
  shift: '',
  message: ''
})
const errors = reactive({ name: '', phone: '', email: '', message: '' })
const sending = ref(false)
const feedback = ref(null)

const validate = () => {
  let valid = true
  errors.name = form.name.trim() ? '' : 'El nombre es requerido'
  errors.phone = form.phone.trim() ? '' : 'El teléfono es requerido'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Email inválido'
  errors.message = form.message.trim() ? '' : 'Por favor ingresá un mensaje'
  Object.values(errors).forEach(e => { if (e) valid = false })
  return valid
}

const handleSubmit = async () => {
  if (!validate()) return
  sending.value = true
  try {
    if (config?.publicKey && config?.serviceId && config?.templateId) {
      await emailjs.send(
        config.serviceId,
        config.templateId,
        {
          to_email: config.toEmail,
          from_name: form.name,
          phone: form.phone,
          reply_to: form.email,
          activity: form.activity || 'No especificada',
          shift: form.shift || 'No especificado',
          message: form.message,
        },
        { publicKey: config.publicKey }
      )
    } else {
      await new Promise(resolve => setTimeout(resolve, 700))
    }
    feedback.value = { type: 'success', message: '¡Gracias por contactarte! La secretaría del club te responderá a la brevedad.' }
    Object.assign(form, { name: '', phone: '', email: '', activity: '', shift: '', message: '' })
  } catch {
    feedback.value = { type: 'error', message: 'Hubo un error al enviar. Por favor comunicate directamente por WhatsApp.' }
  } finally {
    sending.value = false
    setTimeout(() => feedback.value = null, 6000)
  }
}
</script>

<style scoped>
.feedback-enter-active, .feedback-leave-active {
  transition: all 0.4s ease;
}
.feedback-enter-from, .feedback-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.reveal, .reveal-left, .reveal-right {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
}
.reveal { transform: translateY(30px); }
.reveal-left { transform: translateX(-30px); }
.reveal-right { transform: translateX(30px); }

.reveal.visible,
.reveal-left.visible,
.reveal-right.visible {
  opacity: 1;
  transform: translate(0);
}

.reveal-bar { transform: scaleX(0); transform-origin: center; transition: transform 0.6s ease; }
.reveal.visible .reveal-bar { transform: scaleX(1); }

.reveal-sub { opacity: 0; transform: translateY(10px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible .reveal-sub { opacity: 1; transform: translateY(0); }
</style>
