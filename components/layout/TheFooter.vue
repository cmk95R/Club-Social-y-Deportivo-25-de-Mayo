<template>
  <footer class="bg-primary-950 text-white border-t-[5px] border-primary-600 pt-12 pb-8 font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-10 pb-8 border-b border-white/10">
        <NuxtLink to="/" class="flex items-center gap-3 group" aria-label="Club 25 de Mayo Natatorio Martínez">
          <img
            src="/images/nata/logo.png"
            alt="Escudo Club Social y Deportivo 25 de Mayo"
            class="w-12 h-12 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div class="flex flex-col">
            <span class="font-heading font-extrabold text-lg tracking-tight text-white">Club 25 de Mayo</span>
            <span class="text-xs text-sky-400 font-semibold tracking-wider uppercase">Natatorio · Martínez (Fundado 1905)</span>
          </div>
        </NuxtLink>

        <nav>
          <ul class="flex flex-wrap justify-center gap-6 text-gray-300 font-medium text-xs sm:text-sm uppercase tracking-wider">
            <li><NuxtLink to="/#home" class="hover:text-sky-400 transition-colors">Inicio</NuxtLink></li>
            <li><NuxtLink to="/#about" class="hover:text-sky-400 transition-colors">La Pileta</NuxtLink></li>
            <li><NuxtLink to="/#services" class="hover:text-sky-400 transition-colors">Actividades</NuxtLink></li>
            <li><NuxtLink to="/#horarios" class="hover:text-sky-400 transition-colors">Horarios</NuxtLink></li>
            <li><NuxtLink to="/#benefits" class="hover:text-sky-400 transition-colors">Beneficios</NuxtLink></li>
            <li><NuxtLink to="/#news" class="hover:text-sky-400 transition-colors">Novedades</NuxtLink></li>
            <li><NuxtLink to="/#contact" class="hover:text-sky-400 transition-colors">Contacto</NuxtLink></li>
          </ul>
        </nav>

        <div class="flex items-center gap-4 text-gray-400">
          <!-- Instagram -->
          <a
            href="https://www.instagram.com/25demayooficial/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @25demayooficial"
            class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center hover:text-sky-400 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a4.999 4.999 0 1 0 0 9.998 4.999 4.999 0 0 0 0-9.998zm0 8.249a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5zm6.406-8.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
            </svg>
          </a>
          <!-- WhatsApp -->
          <a
            href="https://wa.me/5491147333719"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Secretaría"
            class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center hover:text-emerald-400 transition-colors"
          >
            <svg class="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
            </svg>
          </a>
          <!-- Email -->
          <a
            href="mailto:natatorio@club25demayo.com.ar"
            aria-label="Correo"
            class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center hover:text-sky-400 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      <div class="text-center text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto space-y-1">
        <p>
          <strong>Club Social y Deportivo 25 de Mayo (Martínez)</strong> · Rodríguez Peña 941, Martínez, San Isidro, Provincia de Buenos Aires · Tel: (011) 4733-3719 / 4792-7007
        </p>
        <p class="text-gray-500">
          Natatorio Climatizado Todo el Año · Escuela de Natación Infantil y Adultos · Pileta Libre · Aquagym · Colonia Deportiva · © {{ new Date().getFullYear() }} Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
