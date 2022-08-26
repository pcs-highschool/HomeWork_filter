import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Axios from 'axios'

import HomePage from './pages/HomePage.vue'
import DataPage from './pages/DataPage.vue'
import MemoPage from './pages/MemoPage.vue'
import UserInfo from './pages/UserInfo.vue'

const routes = [
    { name: 'home', path: '/', component: HomePage},
    { name: 'data', path: '/userData/:userId?/', component: DataPage },
    { name: 'memo', path: '/userMemo/:userId?/:titleId?', component: MemoPage },
    { name: 'userinfo', path: '/UserInfo', component: UserInfo },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)
app.config.globalProperties.$axios = Axios;
app.config.globalProperties.$usersData = [];

app.use(router)
app.mount('#app')
