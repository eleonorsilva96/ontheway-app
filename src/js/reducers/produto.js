// src/js/reducers/index.js
import { PRODUTO_FETCH_SUCCESS } from "../constants/action-types";

const initialState = {
  produtoInfo: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_ARTICLE:
    //   console.log('criar utilizador');
    //   return { ...state, articles: [...state.articles, action.payload] };
    // case DELETE_ARTICLE:
    //   console.log('eliminar utilizador');
    //   return { ...state, articles: [...state.articles.filter((x) => x !== action.payload)] };
    case PRODUTO_FETCH_SUCCESS:
      console.log('Success info produto', action.payload);
      return { ...state, produtoInfo: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
