import Vue from 'vue'
import App from './App.vue'

import AOS from 'aos';
import "aos/dist/aos.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVuejs, faCss3, faHtml5, faJs, faGitAlt, faGithub, faJsfiddle } from '@fortawesome/free-brands-svg-icons';

library.add(faBars, faTimes, faEnvelope, faMobileAlt);
library.add(faVuejs, faCss3, faHtml5, faJs, faGitAlt, faGithub, faJsfiddle);


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App), 
  created() {
    AOS.init();
  }
})