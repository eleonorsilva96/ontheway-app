import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_VIAGEMS, VIAGEMS_FETCH_SUCCEEDED, VIAGEMS_FETCH_ERROR } from '../constants/action-types'
import {ENDPOINT} from "../constants/services"

// função para obter os dados da API em formato JSON
function fetchAll(viagems) {
    const date = viagems.payload.dataViagem;
    const dateBody = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    const horaInicio = viagems.payload.horaInicio;
    const horaInicioBody = horaInicio.getHours() + ":" + horaInicio.getMinutes();
    const horaFim = viagems.payload.horaFim;
    const horaFimBody = horaFim.getHours() + ":" + horaFim.getMinutes();
    console.log('response', JSON.stringify({
        origem: viagems.payload.origem,
        destino: viagems.payload.destino,
        data: dateBody,
        horaInicio: horaInicioBody,
        horaFim: horaFimBody,
        
    }));
    

    return fetch(ENDPOINT+'viagem/search',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origem: viagems.payload.origem,
          destino: viagems.payload.destino,
          data: dateBody,
          horaInicio: horaInicioBody,
          horaFim: horaFimBody,
        })
      }).then(response => response.json(), );
    }

// worker Saga: irá ser invocada quando ocorrer um FETCH_PRODUTOS action
function* fetchViagems(viagems) {
    console.log('SEARCH', viagems);
    try {
        // invocar a função para obter a lista de produtos
        const search = yield call(fetchAll, viagems);
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
    console.log('search viagem saga init');
    yield takeLatest(FETCH_VIAGEMS, fetchViagems);
}

export default mySagaViagems;