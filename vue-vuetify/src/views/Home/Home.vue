<template>
  <div>
    <h1>Home</h1>
    
    <!-- Formulário responsável também pelo envio da requisição -->
    <FormHome />

    <!-- Inicio SnackBar de erro -->
    <v-snackbar v-model="snackbar">
      {{ text }}
    </v-snackbar>
    <!-- Fim SnackBar de erro -->
  </div>
</template>

<script>
import FormHome from "../../components/FormHome/FormHome.vue";

export default {
  name: "Home",
  components: {
    FormHome,
  },
  data() {
    return {
      text: "",
      snackbar: false,
    };
  },
};
</script>

<style>
.form-user {
  justify-content: center;
  margin: 0 auto;
  width: 50%;
}
</style>