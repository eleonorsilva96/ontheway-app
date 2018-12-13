/*
    Root Reducer - define a função a ser executada por cada "action"
    calcula o "state" da aplicação consoante o "action type"

    "Reducers produce the state of the application."

 */

import { ARTICLE_FETCH_SUCCEEDED } from "../constants/action-types";

const initialState = {
    article: []
};

// Criação do Reducer que vai gerir as operações relativas aos articles
// um Reducer recebe sempre 2 parâmetros:
// 1) o state atual
// 2) a action
const article = (state = initialState, action) => {

    // consoante a action irá executar uma operação diferente
    switch (action.type) {
        case ARTICLE_FETCH_SUCCEEDED:
            console.log('article detail success: ', action.payload);
            // adiciona os artigos obtidos através da API
            // funcionamento idêntico ao ADD_ARTICLE, mas com a diferença de se aplicar o Spread ao payload
            // pois o que é retornado da API é uma lista de artigos e não apenas um
            return { ...state, article: action.payload };
        default:
            // devolver sempre o state atual, para o caso de nenhuma das ações acima corresponderem
            return state;
    }
};

export default article;
