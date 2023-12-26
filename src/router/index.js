// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import BusinessList from "@/views/BusinessList.vue";
import businessInfo from "@/views/BusinessInfo.vue";
import Order from "@/views/Order.vue";
import PayMent from "@/views/PayMent.vue";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    },
    {
        path:'/login',
        name:'Login',
        component: Login,
    },
    {
        path:'/register',
        name:'Register',
        component: Register,
    },
    {
        path:'/businesslist',
        name:'BusinessList',
        component: BusinessList,
    },
    {
        path:'/businessInfo',
        name:'BusinessInfo',
        component: businessInfo,
    },
    {
        path:'/tooder',
        name:'tooder',
        component: Order,
    },
    {
        path:'/topayment',
        name:'PayMent',
        component: PayMent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
