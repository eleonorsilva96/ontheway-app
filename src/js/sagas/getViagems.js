import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_VIAGEMS, VIAGEMS_FETCH_SUCCEEDED, VIAGEMS_FETCH_ERROR } from '../constants/action-types'
import {ENDPOINT} from "../constants/services"

// função para obter os dados da API em formato JSON
function fetchAll(viagems) {
    const date = viagems.payload.viagems.dataViagem;
    const dateBody = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    const horaInicio = viagems.payload.viagems.horaInicio;
    const horaInicioBody = horaInicio.getHours() + ":" + horaInicio.getMinutes();
    const horaFim = viagems.payload.viagems.horaFim;
    const horaFimBody = horaFim.getHours() + ":" + horaFim.getMinutes();
    console.log('response', JSON.stringify({
        origem: viagems.payload.viagems.origem,
        destino: viagems.payload.viagems.destino,
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
          origem: viagems.payload.viagems.origem,
          destino: viagems.payload.viagems.destino,
          data: dateBody,
          horaInicio: horaInicioBody,
          horaFim: horaFimBody,
        })
      }).then(response => response.json(), );
    }

function* fetchViagems(viagems) {

    try {
        const search = yield call(fetchAll, viagems);
        const viagens = search.listaViagens;
        yield put({type: VIAGEMS_FETCH_SUCCEEDED, payload: viagens});
    } catch (e) {
        // caso exista um erro, devolve a mensagem de erro
        console.log('erro', e);
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