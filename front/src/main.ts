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
import ScoreCard from './components/ScoreCard.vue';
import Perguntas from './components/Perguntas.vue';

const app = createApp(App)
app.use(store, key).use(router)


app.component('font-awesome-icon', FontAwesomeIcon)
app.component('type-writer', Typewriter)
app.component('sub-header', SubHeader)
app.component('avatar-pop-up', AvatarPopUp)
app.component('score-card', ScoreCard)
app.component('perguntas', Perguntas)

app.mount('#app')
