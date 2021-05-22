<template>
  <div>
    <!-- INICIO Navegação Lateral -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> ProdutosAPI </v-list-item-title>
          <v-list-item-subtitle> Aprendendo Vue com Vuetify </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <!-- Atributo "v-list-item" herda de "router-link", propriedade "to" para enviar à outras páginas -->
        <v-list-item v-for="item in items" :key="item.title" :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- FIM Navegação Lateral -->

    <!-- INICIO Barra horizontal -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2"></span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- FIM Barra horizontal -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      // drawer (boolean) utilizado para esconder e mostrar barra de navegação no modo mobile
      drawer: true,
      isMobile: window.innerWidth <= 1264,
      // Itens da barra de navegação
      items: [
        { title: "Home", icon: "mdi-view-dashboard", path: "/" },
        { title: "Produtos", icon: "mdi-image", path: "/produtos" },
      ],
      right: null,
    };
  },
  methods: {
    // Método responsável para atualizar se o usuário está em desktop ou mobile
    handleResize() {
      // O comprimento da tela é menor ou igual à 1264 pixels?
      this.isMobile = window.innerWidth <= 1264;
    },
  },
  mounted() {
    // Adiciona um método que irá ouvir eventos relacionados à janela
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    // Remove o "ouvinte" quando sair da página
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
</style>