import Vue from 'vue';
import VueRouter from 'vue-router';
//import { parseJwt } from './services/jwt';

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

// Rotas privadas (to -> informações da página que o usuário esta navegando)
// router.beforeEach((to, from, next) => {
//     let user = localStorage.getItem('_tok_user') !== null ? parseJwt(localStorage.getItem('_tok_user')) : null;
//     let isLogged = user !== null && user !== undefined ? true : false;

//     // Caso a página precise de autenticação
//     if (to.meta.requireAuth) {
//         console.log(to)

//         // Usuário está logado?
//         if (isLogged) {
//             next();
//         }
//         else {
//             next('/login');
//         }
//     }
//     // Caso não precise, apenas libera a navegação
//     else {
//         // Proibe o usuário de entrar na página login novamente, caso já esteja logado
//         if (!isLogged)
//             next();
//         else
//             next('/');
//     }
// });

export default router;