import axios from 'axios';

// Cria o client de axios com a URL base da API
const client = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export default {
    // Método geral para executar qualquer requisição
    // -> Parametros como método (post, get, put, delete...)
    // -> Url (endpoint), 
    // -> data (body, corpo da aplicação, se necessário), e params
    async execute(method, resourceUrl, data, params){
        return client({
            method: method,
            url: resourceUrl,
            data: data,
            params: params,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            return resp.data;
        })
        .catch(error => {
            return error;
        })
    },
    
    // Demais métodos utilizando "Execute"
    getProdutos(){
        return this.execute('get', 'Produtos/all');
    },
    postProduto(data){
        return this.execute('post', 'Produtos/new', data);
    }
}