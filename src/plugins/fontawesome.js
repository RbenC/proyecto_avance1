//https://styde.net/utiliza-font-awesome-como-un-componente-en-vue/
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'  
import { 
    faHome,
    faImages,
    faUsers,
    faPrint,
    faSun,
    faPlus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faHome, faImages, faUsers, faPrint, faSun, faPlus)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)