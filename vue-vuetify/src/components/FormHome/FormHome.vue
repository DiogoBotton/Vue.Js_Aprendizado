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
      v-model="currencyFormated"
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
    currency: null,
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
        };

        console.log(user);
      };
    },
    formatCurrency(value) {
      if (value === null) {
        return 0;
      }
      value = value + "";
      value = parseInt(value.replace(/[\D]+/g, ""));
      value = value + "";
      value = value.replace(/([0-9]{2})$/g, ",$1");

      if (value.length > 6) {
        value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
      }

      if (value == "NaN") return "";
      else return value;
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
  computed: {
    currencyFormated: {
      get: function () {
        return this.formatCurrency(this.currency);
      },
      set: function (newValue) {
        this.currency = Number(newValue.replace(/[^0-9.]/g, ""));
      },
    },
  },
};
</script>