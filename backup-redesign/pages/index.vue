<template>
  <div>
    <TheNavbar />
    <main>
      <HeroCarousel />
      <LogoStrip />
      <AboutSection />
      <ServicesSection />
      <JobsSection />
      <BenefitsSection />
      <NewsSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Natatorio Club 25 de Mayo — Martínez | Pileta Climatizada',
  description: 'Natatorio del Club Social y Deportivo 25 de Mayo (Martínez, San Isidro). Pileta climatizada todo el año, escuela de natación infantil y adultos, pileta libre, aquagym y matronatación en Rodríguez Peña 941.',
  ogTitle: 'Natatorio Club 25 de Mayo (Martínez) — Pileta Climatizada',
  ogDescription: 'Escuela de natación, pileta libre y actividades acuáticas para todas las edades en Martínez.',
  ogImage: '/images/natatorio/hero1.jpg',
})
</script>