import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "./router";
import { store, key } from "./store/index";
import Typewriter from './components/Typewriter.vue'
import SubHeader from './components/SubHeader.vue';

import './plugins/font-awesome'

import './assets/style.scss'
import AvatarPopUp from './components/AvatarPopUp.vue';

const app = createApp(App)
app.use(store, key).use(router)


app.component('font-awesome-icon', FontAwesomeIcon)
app.component('type-writer', Typewriter)
app.component('sub-header', SubHeader)
app.component('avatar-pop-up', AvatarPopUp)


app.mount('#app')
