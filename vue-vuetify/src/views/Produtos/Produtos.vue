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
      <v-data-table
        :headers="headers"
        :items="produtos.data"
        :search="filtro"
      ></v-data-table>
      <!-- FIM Tabela -->

      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <!-- Botão add (ma-2 é um spacing) -->
          <div class="text-center">
            <v-btn
              text
              icon
              class="ma-2"
              color="blue lighten-2"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </div>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Adicionar Produto</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="formValid">
                <v-row>
                  <v-col cols="12" sm="6" md="5">
                    <v-text-field
                      v-model="data.nome"
                      label="Nome"
                      :rules="[(v) => !!v || 'Nome do produto é necessário']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5">
                    <v-text-field
                      v-model="data.fabricante"
                      label="Fabricante"
                      :rules="[(v) => !!v || 'Nome do Fabricante é necessário']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5">
                    <v-text-field
                      v-model="data.qtdEstoque"
                      label="Qtd no Estoque"
                      type="number"
                      :rules="qtdEstoqueRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5">
                    <v-text-field
                      v-model="data.valorUnidade"
                      label="Valor da Unidade"
                      type="number"
                      :rules="valorUnidadeRules"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog"> Cancelar </v-btn>
            <v-btn color="blue darken-1" text @click="addProduct" :disabled="!formValid"> Adicionar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import api from "../../services/api";

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
      data: {
        nome: "",
        fabricante: "",
        qtdEstoque: 0,
        valorUnidade: 0,
      },

      // Algumas validações
      qtdEstoqueRules: [
        (v) => !!v || "Qtd estoque é necessário",
        (v) => (v && v >= 1) || "A qtd no estoque deve ser maior ou igual à 1"
      ],
      valorUnidadeRules: [
        (v) => !!v || "Valor unidade é necessário",
        (v) => (v && v >= 1) || "O valor da unidade deve ser maior ou igual à 1"
      ],
    };
  },
  async mounted() {
    this.produtos = await api.getProdutos();
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    async addProduct() {
      await api.postProduto({
        nome: this.data.nome,
        fabricante: this.data.fabricante,
        qtdEstoque: parseInt(this.data.qtdEstoque),
        valorUnidade: parseFloat(this.data.valorUnidade),
      })
      .then(resp => {
        console.log(resp);
        this.closeDialog();
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
};
</script>

<style>
</style>