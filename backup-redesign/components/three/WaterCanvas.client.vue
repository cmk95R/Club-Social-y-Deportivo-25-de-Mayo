<template>
  <canvas ref="canvasEl" data-water-canvas class="block h-full w-full" aria-hidden="true" />
</template>

<script setup lang="ts">
import * as THREE from 'three'

const canvasEl = ref<HTMLCanvasElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let geometry: THREE.PlaneGeometry | null = null
let material: THREE.ShaderMaterial | null = null
let scene: THREE.Scene | null = null
let camera: THREE.OrthographicCamera | null = null
let resizeObserver: ResizeObserver | null = null
let intersectionObserver: IntersectionObserver | null = null
let frameId = 0
let startedAt = 0
let isVisible = true
let isRunning = false
let reduceMotion = false

const mouse = new THREE.Vector2(0, 0)
const mouseTarget = new THREE.Vector2(0, 0)

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  varying vec2 vUv;

  float caustic(vec2 uv, float time) {
    float value = 0.0;
    vec2 p = uv;

    for (int i = 1; i <= 3; i++) {
      float fi = float(i);
      p = uv * (1.7 + fi * 1.15) + vec2(time * 0.11 * fi, -time * 0.075 * fi);
      value += sin(p.x + sin(p.y * 1.63 + time * 0.55)) * cos(p.y * 1.27 + sin(p.x * 1.09 - time * 0.38));
    }

    return value / 3.0 * 0.5 + 0.5;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 centered = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
    vec2 mouse = vec2(uMouse.x * aspect, uMouse.y);

    float influence = smoothstep(0.42, 0.0, distance(centered, mouse));
    float time = uTime + influence * 1.8;

    float c1 = caustic(uv * vec2(aspect, 1.0), time);
    float c2 = caustic(uv * vec2(aspect, 1.0) * 1.65 + 7.3, time * 0.72);
    float light = pow(c1 * 0.62 + c2 * 0.38, 1.85);

    vec3 deep = vec3(0.015, 0.086, 0.121);
    vec3 glow = vec3(0.133, 0.827, 0.933);
    vec3 color = mix(deep, glow, clamp(light * 1.5 + influence * 0.4, 0.0, 1.0));

    float vignette = smoothstep(1.15, 0.28, distance(uv, vec2(0.5, 0.48)));
    float alpha = (light * 0.5 + influence * 0.35) * vignette;

    gl_FragColor = vec4(color, alpha);
  }
`

function setSize() {
  if (!renderer || !canvasEl.value) return
  const parent = canvasEl.value.parentElement
  if (!parent) return

  const width = parent.clientWidth
  const height = parent.clientHeight
  if (width === 0 || height === 0) return

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
  renderer.setSize(width, height, false)

  if (material) {
    material.uniforms.uResolution.value.set(
      width * renderer.getPixelRatio(),
      height * renderer.getPixelRatio(),
    )
  }
}

function renderFrame(now: number) {
  if (!isRunning || !renderer || !scene || !camera || !material) return

  material.uniforms.uTime.value = (now - startedAt) / 1000
  mouse.lerp(mouseTarget, 0.055)
  material.uniforms.uMouse.value.copy(mouse)
  renderer.render(scene, camera)

  frameId = requestAnimationFrame(renderFrame)
}

function start() {
  if (isRunning || reduceMotion) return
  isRunning = true
  startedAt = performance.now()
  frameId = requestAnimationFrame(renderFrame)
}

function stop() {
  isRunning = false
  cancelAnimationFrame(frameId)
}

function renderOnce() {
  if (!renderer || !scene || !camera || !material) return
  material.uniforms.uTime.value = 0.6
  material.uniforms.uMouse.value.set(0, 0)
  renderer.render(scene, camera)
}

function handlePointerMove(event: PointerEvent) {
  if (!canvasEl.value) return
  const rect = canvasEl.value.getBoundingClientRect()
  if (rect.width === 0 || rect.height === 0) return

  mouseTarget.set(
    (event.clientX - rect.left) / rect.width - 0.5,
    -((event.clientY - rect.top) / rect.height - 0.5),
  )
}

function handleVisibilityChange() {
  if (document.hidden) stop()
  else if (isVisible) start()
}

function handleIntersection(entries: IntersectionObserverEntry[]) {
  const entry = entries[0]
  if (!entry) return
  isVisible = entry.isIntersecting

  if (isVisible) start()
  else stop()
}

onMounted(async () => {
  await nextTick()
  const canvas =
    canvasEl.value ?? document.querySelector<HTMLCanvasElement>('[data-water-canvas]')
  if (!canvas) return

  canvasEl.value = canvas
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    })
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace

    scene = new THREE.Scene()
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    geometry = new THREE.PlaneGeometry(2, 2)
    material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(1, 1) },
      },
    })

    scene.add(new THREE.Mesh(geometry, material))
    setSize()
    requestAnimationFrame(() => setSize())

    resizeObserver = new ResizeObserver(() => setSize())
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement)

    intersectionObserver = new IntersectionObserver(handleIntersection, { threshold: 0.02 })
    intersectionObserver.observe(canvas)

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    if (reduceMotion) renderOnce()
    else start()
  } catch {
    renderer?.dispose()
    renderer = null
  }
})

onBeforeUnmount(() => {
  stop()

  resizeObserver?.disconnect()
  resizeObserver = null
  intersectionObserver?.disconnect()
  intersectionObserver = null

  window.removeEventListener('pointermove', handlePointerMove)
  document.removeEventListener('visibilitychange', handleVisibilityChange)

  geometry?.dispose()
  geometry = null
  material?.dispose()
  material = null
  scene?.clear()
  scene = null
  camera = null

  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss()
    renderer = null
  }
})
</script>
