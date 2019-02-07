import { call, put, takeLatest } from 'redux-saga/effects';
import { PRODUTOS_FETCH_ERROR, ADD_PRODUTO } from '../constants/action-types';
import { ENDPOINT } from '../constants/services';

function addProdutoPOST(produto){
  console.log('ERROR AQUI', produto);
  console.log('response', JSON.stringify({
    nome: produto.payload.nome,
    tamanho: produto.payload.tamanho,
    viagems_id: produto.payload.viagem,
    user_id: 1
  }));
  return fetch(ENDPOINT+'produto',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: produto.payload.nome,
      tamanho: produto.payload.tamanho,
      viagems_id: produto.payload.viagem,
      user_id: 4
  })
  }).then(response => response.json(), );
}

function* addNewProduto(produto){
  console.log('POST', produto);
  try{
    const produtos = yield call(addProdutoPOST, produto);
    yield put({type: ADD_PRODUTO});
    console.log('success POST', produtos);
  } catch(e){
    console.log('Error', e);
    yield put({type: PRODUTOS_FETCH_ERROR, message: e.message});
  }
}

function* mySagaProdutoPOST(){
  console.log('produto saga POST');
  yield takeLatest(ADD_PRODUTO, addNewProduto);
}

export default mySagaProdutoPOST;
