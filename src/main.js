import { createApp } from 'vue'
import App from './App.vue'
import upload from './upload.vue'
import step2 from './step.vue'

import './assets/main.css'

createApp(App).mount('#app')
createApp(upload).mount('#upload')
createApp(step2).mount('#step2')
