import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from './components/Layout.vue'
import UserRegister from './components/auth/UserRegister.vue'
import UserLogin from './components/auth/UserLogin.vue'
import Home from './components/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '/',
                    component: Home
                },
                {
                    path: '/register',
                    component: UserRegister
                },
                {
                    path: '/login',
                    component: UserLogin
                }
            ]
        }
    ]
})

createApp(App).use(router).mount('#app')
