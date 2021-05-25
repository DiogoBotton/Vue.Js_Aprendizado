import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLoading: false,
    },

    // Para ter acesso aos getters: this.$store.getters.isLoading
    getters: {
        isLoading(state){
            return state.isLoading;
        }
    },
    
    // Para ter acesso aos mutations/setters this.$store.commit('showLoading') -> no paramêtro, o nome do método
    mutations: {
        showLoading(state){
            state.isLoading = true;
        },
        hideLoading(state){
            state.isLoading = false;
        },
    }
});