<script setup lang="ts">
import { onMounted } from 'vue'
import { startSmoothScroll } from '@/composables/useMotion'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

onMounted(startSmoothScroll)
</script>

<template>
  <SiteHeader />
  <main class="root-line">
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <ProcessSection />
    <AboutSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
