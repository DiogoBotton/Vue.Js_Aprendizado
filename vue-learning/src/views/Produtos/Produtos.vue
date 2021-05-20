<template>
  <div>
      <!-- Espaçamentos, mt (espaço para cima) mb (espaço para baixo) -->
    <h1 class="mt-5 mb-5">Tabela de Produtos</h1>

    <!-- Tabela Bootstrap -->
    <b-table dark striped hover :items="produtos" :fields="fields"></b-table>
  </div>
</template>

<script>
import api from "../../services/api.js";
//TODO: Realizar post para testar método da api.js
export default {
  name: "Produtos",
  data() {
    return {
        // Campos da tabela
      fields: [
        {
          key: "id",
          label: "Idade",
        },
        {
          key: "nome",
          label: "Nome",
        },
        {
          key: "fabricante",
          label: "Fabricante",
        },
        {
          key: "qtdEstoque",
          label: "Quantidade Estoque",
        },
        {
          key: "valorUnidade",
          label: "Valor Unidade",
        },
        {
          key: "valorEstoque",
          label: "Valor Estoque",
        },
      ],
      // Dados da tabela (populado no método "mounted")
      produtos: [],
    };
  },
  // Após a página ser montada
  async mounted() {
    this.produtos = await api.getProdutos();
  },
};
</script>

<style>

</style>