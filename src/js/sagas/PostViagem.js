import { call, put, takeLatest } from 'redux-saga/effects';
import { VIAGEMS_FETCH_ERROR, ADD_VIAGEM } from '../constants/action-types';
import { ENDPOINT } from '../constants/services';

function addViagemPOST(viagem){
  console.log('response', JSON.stringify({
    // title: produto.payload.title,
    // description: article.payload.description,
    // user_id: 0,
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
    const viagems = yield call(addProdutoPOST, viagem);
     //yield put({type: ARTICLES_FETCH_SUCCEEDED, payload: articles});
    console.log('success POST');
  } catch(e){
    console.log('Error', e);
    yield put({type: VIAGEMS_FETCH_ERROR, message: e.message});
  }
}

function* mySagaViagemPOST(){
  console.log('article saga POST');
  yield takeLatest(ADD_VIAGEM, addNewViagem);
}

export default mySagaViagemPOST;
