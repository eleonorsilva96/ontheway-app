import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_REVIEW } from '../constants/action-types';
import { ENDPOINT } from '../constants/services';

function addReviewPOST(review){
  console.log('ADD', review.payload);
  

  
  return fetch(ENDPOINT+'review',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nota: review.payload.nota,
      comentario: review.payload.comentario,
      user_id: review.payload.user_id,
      viagems_id: review.payload.viagems_id
      
    })
  }).then(response => response.json(), );
}

function* addNewReview(review){
  console.log('POST', review);
  try{
    const data = yield call(addReviewPOST, review);
    yield put({type: ADD_REVIEW});
    console.log('success POST');
  } catch(e){
    console.log('Error', e);
  }
}

function* mySagaReviewPOST(){
  console.log('review saga POST');
  yield takeLatest(ADD_REVIEW, addNewReview);
}

export default mySagaReviewPOST;
