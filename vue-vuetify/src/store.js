import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLoading: false,
        dialogSaveProduto: false,
    },

    // Para ter acesso aos getters: this.$store.getters.isLoading
    getters: {
        isLoading(state){
            return state.isLoading;
        },
        getDialogSaveProduto: state => state.dialogSaveProduto,
    },
    
    // Para ter acesso aos mutations/setters this.$store.commit('showLoading') -> no paramêtro, o nome do método
    mutations: {
        showLoading(state){
            state.isLoading = true;
        },
        hideLoading(state){
            state.isLoading = false;
        },
        setDialogSaveProduto(state){
            state.dialogSaveProduto = !state.dialogSaveProduto;
        }
    },
    plugins: [createPersistedState()]
});