import { call, put, takeLatest } from 'redux-saga/effects';
import { PRODUTOS_FETCH_ERROR, ADD_PRODUTO } from '../constants/action-types';
import { ENDPOINT } from '../constants/services';

function addProdutoPOST(produto){
  console.log('response', JSON.stringify({
    // title: produto.payload.title,
    // description: article.payload.description,
    // user_id: 0,
  }));
  return fetch(ENDPOINT+'produto',{
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

function* addNewProduto(produto){
  console.log('POST', produto);
  try{
    const produtos = yield call(addProdutoPOST, produto);
     //yield put({type: ARTICLES_FETCH_SUCCEEDED, payload: articles});
    console.log('success POST');
  } catch(e){
    console.log('Error', e);
    yield put({type: PRODUTOS_FETCH_ERROR, message: e.message});
  }
}

function* mySagaProdutoPOST(){
  console.log('article saga POST');
  yield takeLatest(ADD_PRODUTO, addNewProduto);
}

export default mySagaProdutoPOST;
