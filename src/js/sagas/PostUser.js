import { call, put, takeLatest } from 'redux-saga/effects';
import { USER_FETCH_ERROR, ADD_USER } from '../constants/action-types';
import { ENDPOINT } from '../constants/services';

function addUserPOST(user){
  
  const name = user.payload.nome + " " + user.payload.apelido;
  console.log('response', JSON.stringify({
    name: name,
    email: user.payload.email,
    password: user.payload.password,

  }));

  
  return fetch(ENDPOINT+'user',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: user.payload.email,
      password: user.payload.password,
    })
  }).then(response => response.json(), );
}

function* addNewUser(user){
  console.log('POST', user);
  try{
    const newUser = yield call(addUserPOST, user);
    yield put({type: ADD_USER});
    console.log('success POST');
  } catch(e){
    console.log('Error', e);
    yield put({type: USER_FETCH_ERROR, message: e.message});
  }
}

function* mySagaUserPOST(){
  console.log('user saga POST');
  yield takeLatest(ADD_USER, addNewUser);
}

export default mySagaUserPOST;
