import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

// importar os reducers da aplicação
import articles from "../reducers/articles";
import article from "../reducers/article";



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
    articles,article
  }),
    // associar o saga à store do Redux
    applyMiddleware(sagaMiddleware)
);

// executar o middleware sagas
sagaMiddleware.run(mySaga);
sagaMiddleware.run(mySagaArticleDetail);
sagaMiddleware.run(mySagaArticlePOST);


export default store;
