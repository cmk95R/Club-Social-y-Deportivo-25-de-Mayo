<template>
  <section id="preguntas" class="relative overflow-hidden bg-foam py-24 sm:py-28">
    <div class="pointer-events-none absolute -left-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-aqua-200/30 blur-3xl" aria-hidden="true" />

    <div class="container-x relative">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <div v-reveal class="lg:sticky lg:top-28">
            <span class="eyebrow text-deep-700">
              <span class="eyebrow-dot" />
              Preguntas frecuentes
            </span>
            <h2 class="display-2 mt-5 text-deep-950">
              Antes de
              <span class="serif-accent block text-deep-700">tirarte al agua.</span>
            </h2>
            <p class="mt-5 max-w-sm text-sm leading-relaxed text-deep-900/70">
              Las dudas que más nos llegan por secretaría. Si la tuya no está acá, escribinos.
            </p>

            <div class="mt-8 rounded-3xl border border-deep-950/10 bg-white/70 p-5 backdrop-blur-sm">
              <div class="flex items-center gap-3">
                <span class="grid h-10 w-10 place-items-center rounded-full bg-deep-950 text-aqua-300">
                  <MessageCircle class="h-5 w-5" :stroke-width="2" aria-hidden="true" />
                </span>
                <div>
                  <p class="font-heading text-sm font-bold text-deep-950">¿Tenés otra consulta?</p>
                  <p class="text-[11px] text-deep-900/70">Respondemos por WhatsApp.</p>
                </div>
              </div>
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-dark mt-4 w-full !py-3 text-xs">
                Escribir a secretaría
                <ArrowUpRight class="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="border-t border-deep-950/10">
            <details
              v-for="(faq, index) in faqs"
              :key="faq.question"
              v-reveal="{ delay: index * 50 }"
              class="group border-b border-deep-950/10"
            >
              <summary class="flex items-center justify-between gap-5 py-5 sm:py-6">
                <h3 class="font-heading text-base font-bold tracking-tight text-deep-950 transition-colors duration-300 group-open:text-deep-700 sm:text-lg">
                  {{ faq.question }}
                </h3>
                <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-deep-950/15 text-deep-700 transition-all duration-300 group-open:rotate-45 group-open:border-deep-950 group-open:bg-deep-950 group-open:text-aqua-300">
                  <Plus class="h-4 w-4" :stroke-width="2" aria-hidden="true" />
                </span>
              </summary>
              <div class="faq-answer max-w-2xl pb-6 pr-8 text-sm leading-relaxed text-deep-900/70">
                {{ faq.answer }}
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight, MessageCircle, Plus } from '@lucide/vue'
import { faqs, whatsappUrl } from '~/data/site'
</script>

<style scoped>
details[open] .faq-answer {
  animation: faqIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes faqIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
