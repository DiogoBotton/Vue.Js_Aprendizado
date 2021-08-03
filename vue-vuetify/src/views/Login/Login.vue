<template>
  <div>
    <h1 class="font-weight-medium text-center mt-10 mb-10">
      Faça Login para acessar a página
    </h1>

    <v-card max-width="900" style="margin: 0 auto; padding: 1.5em">
      <v-card-title>
        <span
          >Faça Login com o usuário da rede interna da Inbursa para acessar a
          plataforma</span
        >
      </v-card-title>
      <v-divider></v-divider>
      <v-form ref="form" v-model="valid">
        <v-container>
          <v-card-text>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Usuário"
              required
            ></v-text-field>

            <v-text-field
              v-model="senha"
              :rules="senhaRules"
              label="Senha"
              type="password"
              required
            ></v-text-field>
          </v-card-text>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          elevation="1"
          outlined
          color="success"
          :disabled="!valid"
          @click="validate"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import api from "../../services/api";

export default {
  data: () => ({
    valid: false,
    senha: "",
    // Validação do campo senha
    senhaRules: [(v) => !!v || "Senha é necessário"],
    email: "",
    // Validação do campo Email
    emailRules: [
      (v) => !!v || "E-mail é necessário",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    async SubmitRequestLogin() {
      await api
        .postLogin({
          email: this.email,
          senha: this.senha,
        })
        .then((resp) => {
          if (resp.data.token !== null && resp.data.token !== undefined) {
            localStorage.setItem("_tok_user", resp.data.token);

            // Direciona usuario para home (ainda não atualiza toda a página para renderizar o Navbar)
            this.$router.push("/");
          } else {
            // Caso for um erro (400, 404...) retorna no próprio bloco then()
            console.log(resp);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    validate() {
      this.$refs.form.validate();

      // Após formulário ser validado, caso seja valido envia a requisição
      if (this.valid) this.SubmitRequestLogin();
    },
  },
};
</script>

<style>
</style>