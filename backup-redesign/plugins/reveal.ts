type RevealValue = {
  delay?: number
  threshold?: number
  once?: boolean
}

export default defineNuxtPlugin((nuxtApp) => {
  const observers = new WeakMap<Element, IntersectionObserver>()
  const prefersReducedMotion =
    import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (import.meta.client) {
    document.documentElement.classList.add('reveal-ready')
  }

  nuxtApp.vueApp.directive<HTMLElement, RevealValue | number | undefined>('reveal', {
    getSSRProps() {
      return {}
    },
    mounted(el, binding) {
      if (!import.meta.client) return

      const options: RevealValue =
        typeof binding.value === 'number'
          ? { delay: binding.value }
          : binding.value ?? {}

      el.classList.add('reveal-init')
      if (binding.modifiers.left) el.classList.add('reveal-left')
      if (binding.modifiers.right) el.classList.add('reveal-right')
      if (options.delay) el.style.setProperty('--reveal-delay', `${options.delay}ms`)

      if (prefersReducedMotion) {
        el.classList.add('is-visible')
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            el.classList.add('is-visible')
            if (options.once !== false) {
              observer.disconnect()
              observers.delete(el)
            }
          })
        },
        {
          threshold: options.threshold ?? 0.15,
          rootMargin: '0px 0px -6% 0px',
        },
      )

      observer.observe(el)
      observers.set(el, observer)
    },
    unmounted(el) {
      observers.get(el)?.disconnect()
      observers.delete(el)
    },
  })
})
