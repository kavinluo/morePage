import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import '../../assets/css/normalize.css'
import '../../assets/css/comm.less'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#index')
