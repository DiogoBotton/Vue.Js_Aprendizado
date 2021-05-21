import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Pages
import Home from './views/Home/Home.vue'
import Produtos from './views/Produtos/Produtos.vue'


const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/produtos',
            name: 'Produtos',
            component: Produtos
        }
    ]
})

export default router;