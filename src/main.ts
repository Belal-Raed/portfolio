import { createApp } from 'vue'

import '@fontsource-variable/schibsted-grotesk/wght.css'
import '@fontsource-variable/hanken-grotesk/wght.css'
// Arabic subsets only: Latin glyphs come from the grotesks.
import '@fontsource/ibm-plex-sans-arabic/arabic-400.css'
import '@fontsource/ibm-plex-sans-arabic/arabic-500.css'
import '@fontsource/ibm-plex-sans-arabic/arabic-600.css'
import '@fontsource/ibm-plex-sans-arabic/arabic-700.css'

import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
