import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_ARTICLES, ARTICLES_FETCH_SUCCEEDED, ARTICLES_FETCH_ERROR, ADD_ARTICLE } from '../constants/action-types';
// import { ENDPOINT } from '../constants/services';
// import { ENDPOINTARTICLE } from '../constants/article-services';
// import { ENDPOINTCOMMENT } from '../constants/comment-services';

function addArticlePOST(article){
  console.log('response', JSON.stringify({
    title: article.payload.title,
    description: article.payload.description,
    user_id: 0,
  }));
  return fetch('http://tdi-api.test/api/article',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: article.payload.title,
      description: article.payload.description,
      user_id: 0,
    })
  }).then(response => response.json(), );
}

function* addNewArticle(article){
  console.log('POST', article);
  try{
    const articles = yield call(addArticlePOST, article);
     //yield put({type: ARTICLES_FETCH_SUCCEEDED, payload: articles});
    console.log('success POST');
  } catch(e){
    console.log('Error', e);
    yield put({type: ARTICLES_FETCH_ERROR, message: e.message});
  }
}

function* mySagaArticlePOST(){
  console.log('article saga POST');
  yield takeLatest(ADD_ARTICLE, addNewArticle);
}

export default mySagaArticlePOST;
