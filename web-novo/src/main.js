import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importa estilos globais
import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
