import { ADD_PRODUTO, FETCH_PRODUTOS, FETCH_PRODUTO } from "../constants/action-types";

// definir as actions de adicionar e apagar produtos
// cada action tem de ter um "type" único que a identifica
// opcionalmente pode ter também um "payload" que é normalmente informação necessária à sua execução
export const addProduto = produto => ({ type: ADD_PRODUTO, payload: produto });
export const fetchProduto = produto => ({ type: FETCH_PRODUTO, payload: produto });

// definir a action para carregar produtos da api
export const fetchProdutos = () => ({type: FETCH_PRODUTOS});
