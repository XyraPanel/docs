<template>
  <div>
    <div 
      class="hero-image" 
      @click="toggleZoom"
    >
      <img :src="src" :alt="alt" />
    </div>
    
    <Teleport to="body">
      <div 
        v-if="isZoomed" 
        class="zoom-overlay"
        @click="toggleZoom"
      >
        <img :src="src" :alt="alt" />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

defineProps<{
  src: string
  alt: string
}>()

const isZoomed = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const toggleZoom = () => {
  if (isMobile.value) {
    isZoomed.value = !isZoomed.value
  }
}

watch(isZoomed, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.hero-image {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-bottom: 2rem;
}

.hero-image:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 767px) {
  .hero-image {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
}

.zoom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  animation: fadeIn 0.3s ease;
}

.zoom-overlay img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
