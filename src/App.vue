<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { revealOnScroll, startSmoothScroll } from '@/composables/useMotion'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import IndustriesStrip from './components/IndustriesStrip.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const main = ref<HTMLElement>()
let stopReveal = () => {}

onMounted(() => {
  startSmoothScroll()
  if (main.value) stopReveal = revealOnScroll(main.value)
})

onBeforeUnmount(() => stopReveal())
</script>

<template>
  <SiteHeader />
  <main ref="main">
    <HeroSection />
    <IndustriesStrip />
    <ServicesSection />
    <ProjectsSection />
    <ProcessSection />
    <AboutSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
