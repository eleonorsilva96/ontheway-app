import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_VIAGEMS, VIAGEMS_FETCH_SUCCEEDED, VIAGEMS_FETCH_ERROR } from '../constants/action-types'
import {ENDPOINT} from "../constants/services"

// função para obter os dados da API em formato JSON
function fetchAll() {
    return fetch(ENDPOINT+'viagem').then(response => response.json(), );
}

// worker Saga: irá ser invocada quando ocorrer um FETCH_PRODUTOS action
function* fetchViagems() {
    try {
        // invocar a função para obter a lista de produtos
        const viagems = yield call(fetchAll);
        // assim que houver uma resposta da API, invoca a action, enviado os novos produtos obtidos
        yield put({type: VIAGEMS_FETCH_SUCCEEDED, payload: viagems});
    } catch (e) {
        // caso exista um erro, devolve a mensagem de erro
        yield put({type: VIAGEMS_FETCH_ERROR, message: e.message});
    }
}

/*
  Utilizar a função takeLatest para evitar multiplas chamadas à API
  Caso ocorram múltiplas chamadas irá ignorar todas à excepção da última
*/
function* mySagaViagems() {
    console.log('produtos saga init');
    yield takeLatest(FETCH_VIAGEMS, fetchViagems);
}

export default mySagaViagems;