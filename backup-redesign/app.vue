<template>
  <div>
    <NuxtLoadingIndicator color="#22d3ee" :height="3" />
    <a
      href="#inicio"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-aqua-400 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-deep-950"
    >
      Saltar al contenido
    </a>
    <NuxtPage />
    <WhatsAppFab />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

watch(
  () => route.hash,
  (hash) => {
    if (!hash || !import.meta.client) return
    window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 180)
  },
  { immediate: true },
)
</script>
