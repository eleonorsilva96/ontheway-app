import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_ARTICLE, ARTICLE_FETCH_SUCCEEDED, ARTICLE_FETCH_ERROR } from '../constants/action-types';
//import {ENDPOINT2} from "../constants/services";

function fetchDetail(id){
    console.log(id);
    return fetch('http://tdi-api.test/api/article/'+id).then(response => response.json(), );
}

function* fetchArticle(action){
    const id = action.payload.article;
    try{
        const article = yield call(fetchDetail, id);
        yield put({type: ARTICLE_FETCH_SUCCEEDED, payload: article});
        console.log('success try catch of one article');
    } catch(e){
        console.log(e);
        yield put({type: ARTICLE_FETCH_ERROR, message: e.message});
    }
}

function* mySagaArticleDetail(){
    console.log('article saga init of one article');
    yield takeLatest(FETCH_ARTICLE, fetchArticle);
}

export default mySagaArticleDetail;
