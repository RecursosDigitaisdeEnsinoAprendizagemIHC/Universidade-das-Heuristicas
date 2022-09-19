import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "./router";
import { store, key } from "./store/index";
import Typewriter from './components/Typewriter.vue'
import SubHeader from './components/SubHeader.vue';
import ToastPlugin from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';
import './plugins/font-awesome'

import './assets/style.scss'
import AvatarPopUp from './components/AvatarPopUp.vue';
import ScoreCard from './components/ScoreCard.vue';
import Pergunta from './components/Pergunta.vue';
import PerguntaBox from './components/PerguntaBox.vue';
import ModalConfirmation from './components/ModalConfirmation.vue';
import ModalError from './components/ModalError.vue';
import { plugin as VueTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css' 
import { setDefaultProps } from 'vue-tippy'

setDefaultProps({
  placement: 'right',
})

const app = createApp(App)
app.use(store, key).use(router)

app.use(ToastPlugin, {
    position: 'top'
});
app.use(
  VueTippy,
  // optional
  {
    directive: 'tippy', // => v-tippy
    component: 'tippy', // => <tippy/>
    componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
    defaultProps: {
      placement: 'bottom',
      allowHTML: true,
      arrow: false
    }, // => Global default options * see all props
  }
)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('type-writer', Typewriter)
app.component('sub-header', SubHeader)
app.component('avatar-pop-up', AvatarPopUp)
app.component('modal-confirmacao', ModalConfirmation)
app.component('modal-error', ModalError)
app.component('score-card', ScoreCard)
app.component('pergunta-box', PerguntaBox)
app.component('pergunta', Pergunta)

app.mount('#app')