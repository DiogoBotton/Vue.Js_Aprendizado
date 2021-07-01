<template>
  <v-form ref="form" v-model="valid">
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Seu Nome"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Seu E-mail"
      required
    ></v-text-field>

    <v-file-input
      v-model="imgBase64"
      :rules="[(v) => !!v || 'Escolha uma imagem']"
      accept="image/*"
      label="Selecione uma Imagem"
      required
    ></v-file-input>

    <v-text-field 
      v-model="currency" 
      label="Salário" 
      required
      ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validar e "Enviar"
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Limpar campos </v-btn>
  </v-form>
</template>

<script>

export default {
  data: () => ({
    valid: false,
    name: "",
    currency: parseFloat(800.8584.toFixed(2)),
    // Validação do campo nome
    nameRules: [
      (v) => !!v || "Nome é necessário",
      (v) =>
        (v && v.length <= 10) ||
        "O nome deve ser menor ou igual à 10 caracteres.",
    ],
    email: "",
    // Validação do campo Email
    emailRules: [
      (v) => !!v || "E-mail é necessário",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    imgBase64: null,
  }),
  methods: {
    SubmitRequest() {
      // Conversão de imagem para base64
      var reader = new FileReader();

      reader.readAsDataURL(this.imgBase64);
      reader.onload = () => {
        let user = {
          nome: this.name,
          email: this.email,
          fotoPerfil: reader.result, //Imagem convertida em base64
          salario: parseFloat(this.currency.toString().replace('.', '').replace(',', '.')),
        };

        console.log(user);
      };
    },
    validate() {
      this.$refs.form.validate();

      // Após formulário ser validado, caso seja valido envia a requisição
      if (this.valid) this.SubmitRequest();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>