import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_PRODUTO, PRODUTO_FETCH_SUCCEEDED, PRODUTO_FETCH_ERROR } from '../constants/action-types';
import {ENDPOINT} from "../constants/services"

function fetchDetail(id){
    console.log(id);
    return fetch(ENDPOINT+'produto/'+id).then(response => response.json(), );
}

function* fetchProduto(action){
    const id = action.payload.produto;
    try{
        const produto = yield call(fetchDetail, id);
        yield put({type: PRODUTO_FETCH_SUCCEEDED, payload: produto});
        console.log('success try catch of one produto');
    } catch(e){
        console.log(e);
        yield put({type: PRODUTO_FETCH_ERROR, message: e.message});
    }
}

function* mySagaProdutoDetail(){
    console.log('produto saga init of one produto');
    yield takeLatest(FETCH_PRODUTO, fetchProduto);
}

export default mySagaProdutoDetail;
