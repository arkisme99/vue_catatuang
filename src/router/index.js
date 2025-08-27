import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../pages/Home.vue";
import UserRegister from "../pages/auth/UserRegister.vue";
import UserLogin from "../pages/auth/UserLogin.vue";

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

export default router