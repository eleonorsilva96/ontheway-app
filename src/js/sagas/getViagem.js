import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_VIAGEM, VIAGEM_FETCH_SUCCEEDED, VIAGEM_FETCH_ERROR } from '../constants/action-types';
import {ENDPOINT} from "../constants/services"

function fetchDetail(id){
    console.log(id);
    return fetch(ENDPOINT+'viagem/'+id).then(response => response.json(), );
}

function* fetchViagem(action){
    const id = action.payload.viagem;
    console.log('action', action);
    try{
        const viagem = yield call(fetchDetail, id);
        yield put({type: VIAGEM_FETCH_SUCCEEDED, payload: viagem});
        console.log('success try catch of one viagem', viagem);
    } catch(e){
        console.log(e);
        yield put({type: VIAGEM_FETCH_ERROR, message: e.message});
    }
}

function* mySagaViagemDetail(){
    console.log('viagem saga init of one viagem');
    yield takeLatest(FETCH_VIAGEM, fetchViagem);
}

export default mySagaViagemDetail;
