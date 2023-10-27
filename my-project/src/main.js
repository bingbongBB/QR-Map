import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {createI18n} from 'vue-i18n'
import en from "./assets/en.json"
import tw from "./assets/tw.json"

const i18n = createI18n({
  locale:'en',
  messages:{
    en:en,
    tw:tw
  }
})
createApp(App)
  .use(i18n)
  .use(vuetify)
  .mount('#app')
