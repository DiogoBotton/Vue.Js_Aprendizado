<template>
  <v-app>
    <!-- Loader -->
    <div class="text-center">
      <v-overlay :value="this.$store.getters.isLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>

    <!-- Header e Barra de navegação lateral -->
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    Navbar,
  },
};
</script>
