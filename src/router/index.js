// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/base/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/base/AboutView.vue'),
    },
    {
        path: '/allStat',
        name: 'allStat',
        component: () => import('../views/admin/AdminStat.vue'),
    },
    {
        path: '/finStat',
        name: 'finStat',
        component: () => import('../views/base/AboutView.vue'),
    },
    {
        path: '/userStat',
        name: 'userStat',
        component: () => import('../views/base/HomeView.vue'),
    },
    {
        path: '/planing',
        name: 'planing',
        component: () => import('../views/base/Planing.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/base/AboutView.vue'),
    },
    {
        path: '/security',
        name: 'security',
        component: () => import('../views/base/AboutView.vue'),
    },
    {
        path: '/activeClients',
        name: 'activeClients',
        component: () => import('../views/clients/ActiveClientView.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
