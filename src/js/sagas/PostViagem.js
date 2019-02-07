import { call, put, takeLatest } from 'redux-saga/effects';
import { VIAGEMS_FETCH_ERROR, ADD_VIAGEM } from '../constants/action-types';
import { ENDPOINT } from '../constants/services';

function addViagemPOST(viagem){
  const date = viagem.payload.dataViagem;
  const dateBody = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
  const horaInicio = viagem.payload.horaInicio;
  const horaInicioBody = horaInicio.getHours() + ":" + horaInicio.getMinutes();
  const horaFim = viagem.payload.horaFim;
  const horaFimBody = horaFim.getHours() + ":" + horaFim.getMinutes();
  console.log('response', JSON.stringify({
    origem: viagem.payload.origem,
    destino: viagem.payload.destino,
    data: dateBody,
    horaInicio: horaInicioBody,
    horaFim: horaFimBody,
    preco: viagem.payload.preco,
    tamanho: viagem.payload.tamanho,
    user_id: 1,
  }));

  
  return fetch(ENDPOINT+'viagem',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      origem: viagem.payload.origem,
      destino: viagem.payload.destino,
      data: dateBody,
      horaInicio: horaInicioBody,
      horaFim: horaFimBody,
      preco: viagem.payload.preco,
      tamanho: viagem.payload.tamanho,
      user_id: 3,
      tipo_id: viagem.payload.tipo_id,
    })
  }).then(response => response.json(), );
}

function* addNewViagem(viagem){
  console.log('POST', viagem);
  try{
    const viagems = yield call(addViagemPOST, viagem);
    yield put({type: ADD_VIAGEM});
    console.log('success POST');
  } catch(e){
    console.log('Error', e);
    yield put({type: VIAGEMS_FETCH_ERROR, message: e.message});
  }
}

function* mySagaViagemPOST(){
  console.log('viagem saga POST');
  yield takeLatest(ADD_VIAGEM, addNewViagem);
}

export default mySagaViagemPOST;
