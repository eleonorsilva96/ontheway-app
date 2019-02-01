import { call, put, takeLatest } from 'redux-saga/effects';
import { VIAGEMS_FETCH_ERROR, ADD_VIAGEM } from '../constants/action-types';
import { ENDPOINT } from '../constants/services';

function addViagemPOST(viagem){
  console.log('response', JSON.stringify({
    origem: viagem.payload.origem,
    destino: viagem.payload.destino,
    data: viagem.payload.dataViagem,
    horaInicio: viagem.payload.horaInicio,
    horaFim: viagem.payload.horaFim,
    preco: viagem.payload.preco,
    tamanho: viagem.payload.tamanho,
    user_id: 2,
  }));
  return fetch(ENDPOINT+'viagem',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // title: article.payload.title,
      // description: article.payload.description,
      // user_id: 0,
    })
  }).then(response => response.json(), );
}

function* addNewViagem(viagem){
  console.log('POST', viagem);
  try{
    const viagems = yield call(addViagemPOST, viagem);
     //yield put({type: ARTICLES_FETCH_SUCCEEDED, payload: articles});
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
