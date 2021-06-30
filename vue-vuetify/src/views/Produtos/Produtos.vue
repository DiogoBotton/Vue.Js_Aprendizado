<template>
  <div>
    <h1 class="font-weight-medium text-center mt-10 mb-10">Produtos</h1>

    <v-card max-width="60rem" style="margin: 0 auto">
      <!-- INICIO Filtro -->
      <v-card-title>
        <v-text-field
          v-model="filtro"
          append-icon="mdi-magnify"
          label="Pesquise o produto aqui"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <!-- FIM Filtro -->

      <!-- INICIO Tabela -->
      <v-data-table :headers="headers" :items="produtos.data" :search="filtro">
      </v-data-table>
      <!-- FIM Tabela -->

      <FormSaveProduto :addButton="addProduct" />
      <!-- Botão add (ma-2 é um spacing) -->
      <div class="text-center">
        <v-btn
          text
          icon
          class="ma-2"
          color="blue lighten-2"
          @click="showDialog"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import api from "../../services/api";
import FormSaveProduto from "./saveProduto.vue";

export default {
  name: "Produtos",
  data() {
    return {
      formValid: false,
      dialog: false,
      filtro: "",
      produtos: [],
      headers: [
        { text: "Nome", value: "nome", filterable: true, align: "start" },
        { text: "Fabricante", value: "fabricante", filterable: true },
        { text: "Quantidade Estoque", value: "qtdEstoque" },
        { text: "Valor Unidade", value: "valorUnidade" },
        { text: "Valor Estoque", value: "valorEstoque" },
      ],
    };
  },
  components: {
    FormSaveProduto,
  },
  async mounted() {
    this.$store.commit("showLoading");
    this.produtos = await api.getProdutos();
    this.$store.commit("hideLoading");
  },
  methods: {
    showDialog(){
      this.$store.commit("setDialogSaveProduto");
    },
    async addProduct(data) {
      await api
        .postProduto({
          nome: data.nome,
          fabricante: data.fabricante,
          qtdEstoque: parseInt(data.qtdEstoque),
          valorUnidade: parseFloat(data.valorUnidade),
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>