import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_PRODUTOS, PRODUTOS_FETCH_SUCCEEDED, PRODUTOS_FETCH_ERROR } from '../constants/action-types'
import {ENDPOINT} from "../constants/services"

// função para obter os dados da API em formato JSON
function fetchAll() {
    return fetch(ENDPOINT+'produto').then(response => response.json(), );
}

// worker Saga: irá ser invocada quando ocorrer um FETCH_PRODUTOS action
function* fetchProdutos() {
    try {
        // invocar a função para obter a lista de produtos
        const produtos = yield call(fetchAll);
        // assim que houver uma resposta da API, invoca a action, enviado os novos produtos obtidos
        yield put({type: PRODUTOS_FETCH_SUCCEEDED, payload: produtos});
    } catch (e) {
        // caso exista um erro, devolve a mensagem de erro
        yield put({type: PRODUTOS_FETCH_ERROR, message: e.message});
    }
}

/*
  Utilizar a função takeLatest para evitar multiplas chamadas à API
  Caso ocorram múltiplas chamadas irá ignorar todas à excepção da última
*/
function* mySagaProdutos() {
    console.log('produtos saga init');
    yield takeLatest(FETCH_PRODUTOS, fetchProdutos);
}

export default mySagaProdutos;