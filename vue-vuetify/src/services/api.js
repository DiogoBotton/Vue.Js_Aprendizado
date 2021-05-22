import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:5000/api/'
});

export default {
    async execute(method, resourceUrl, data) {
        return client({
            method,
            url: resourceUrl,
            data,
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(resp => {
                return resp
            })
            // retornar err.response para caso de a API retornar uma mensagem de erro
            .catch(err => {
                return err.response;
            })
    },
    getProdutos() {
        return this.execute('get', 'Produtos/all');
    },
    postProduto(data) {
        return this.execute('post', 'Produtos/new', data);
    },
}