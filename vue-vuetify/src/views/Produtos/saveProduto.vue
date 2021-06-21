<template>
  <v-dialog
    v-model="this.$store.getters.getDialogSaveProduto"
    max-width="500px"
  >
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
        <v-btn color="blue darken-1" text @click="closeDialog">
          Cancelar
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="addButton(data)"
          :disabled="!formValid"
        >
          Adicionar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      formValid: false,
      data: {
        nome: "",
        fabricante: "",
        qtdEstoque: 0,
        valorUnidade: 0,
      },

      // Algumas validações
      qtdEstoqueRules: [
        (v) => !!v || "Qtd estoque é necessário",
        (v) => (v && v >= 1) || "A qtd no estoque deve ser maior ou igual à 1",
      ],
      valorUnidadeRules: [
        (v) => !!v || "Valor unidade é necessário",
        (v) =>
          (v && v >= 1) || "O valor da unidade deve ser maior ou igual à 1",
      ],
    };
  },
  props: {
    addButton: Function,
  },
  methods: {
    closeDialog() {
      this.$store.commit("setDialogSaveProduto");
    },
  },
};
</script>

<style>
</style>