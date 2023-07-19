import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import components from './components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass } from '@fortawesome/free-regular-svg-icons'
library.add([faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass])

const app = createApp(App)

app.use(router)
app.use(components)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
