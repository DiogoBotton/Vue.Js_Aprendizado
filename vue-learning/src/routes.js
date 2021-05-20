import Vue from 'vue';
import VueRouter from 'vue-router';

// Falando para o Vue usar Vue-Router globalmente
Vue.use(VueRouter);

// Imports
import HelloWorld from './views/Home/HelloWorld.vue';
import Produtos from './views/Produtos/Produtos.vue';
//TODO: Tentar realizar rotas privadas
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HelloWorld
        },
        {
            path: '/produtos',
            name: 'Produtos',
            component: Produtos
        }
    ]
})

export default router;