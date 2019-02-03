// src/js/reducers/index.js
import { VIAGEM_FETCH_SUCCEEDED } from "../constants/action-types";

const initialState = {
  viagemInfo: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_ARTICLE:
    //   console.log('criar utilizador');
    //   return { ...state, articles: [...state.articles, action.payload] };
    // case DELETE_ARTICLE:
    //   console.log('eliminar utilizador');
    //   return { ...state, articles: [...state.articles.filter((x) => x !== action.payload)] };
    case VIAGEM_FETCH_SUCCEEDED:
      console.log('Success info viagem', action.payload);
      return { ...state, viagemInfo: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
