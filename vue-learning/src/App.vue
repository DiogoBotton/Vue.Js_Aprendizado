<template>
  <div id="app">
    <header>
      <!-- Componente Header da aplicação (NavBar) será visivel para todas as páginas -->
      <Header />
    </header>
    <main>
    <!-- Tag "router-view" responsável pela renderização dos componentes das rotas-->
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  text-align: center;
}
</style>
