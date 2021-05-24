import Vue from 'vue';
import VueRouter from 'vue-router';
import { parseJwt } from './services/jwt';

Vue.use(VueRouter);

// Pages
import Home from './views/Home/Home.vue'
import Produtos from './views/Produtos/Produtos.vue'
import Login from './views/Login/Login.vue';


const router = new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/produtos',
            name: 'Produtos',
            component: Produtos,
            meta: {
                requireAuth: true
            }
        },
    ]
});

// Rotas privadas
router.beforeEach((to, from, next) => {
    // Caso a página precise de autenticação
    if (to.meta.requireAuth) {
        console.log(to)
        let user = localStorage.getItem('_tok_user') !== null ? parseJwt(localStorage.getItem('_tok_user')) : null;
        let isLogged = user !== null && user !== undefined ? true : false;
        
        // Usuário está logado?
        if (isLogged) {
            next();
        }
        else {
            next('/login');
        }
    }
    // Caso não precise, apenas libera a navegação
    else{
        next();
    }
});

//TODO: Rotas para caso usuario já esteja logado, redirecionar para home

export default router;