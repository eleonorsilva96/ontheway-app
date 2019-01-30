import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

// importar os reducers da aplicação
import produto from "../reducers/produto";
import produtos from "../reducers/produtos";
import viagem from "../reducers/viagem";
import viagems from "../reducers/viagems";
import user from "../reducers/users";
import review from "../reducers/review";



// importar os sagas da aplicação
import mySaga from '../sagas/articles';
import mySagaArticleDetail from '../sagas/article';
import mySagaArticlePOST from '../sagas/PostArticles';


// inicializar o saga Middleware
const sagaMiddleware = createSagaMiddleware();

// criar a store do Redux
const store = createStore(
    // caso exista mais do que 1 reducer, usar esta função para "combiná-los"
  combineReducers({
    prdouto, produtos, viagem, viagems, user, review
  }),
    // associar o saga à store do Redux
    applyMiddleware(sagaMiddleware)
);

// executar o middleware sagas
sagaMiddleware.run(mySagas);

export default store;
