import { createApp } from 'vue'

import '@fontsource-variable/inter/opsz.css'
// Arabic subsets only: Latin glyphs come from Inter.
import '@fontsource/ibm-plex-sans-arabic/arabic-400.css'
import '@fontsource/ibm-plex-sans-arabic/arabic-500.css'
import '@fontsource/ibm-plex-sans-arabic/arabic-600.css'
import '@fontsource/ibm-plex-sans-arabic/arabic-700.css'

import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
