import { ADD_PRODUTO, PRODUTOS_FETCH_SUCCESS } from "../constants/action-types";

const initialState = {
  produtos: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUTO:
      console.log('criar artigo');
      window.location.reload();
      // return { ...state, articles: [...state.articles, action.payload] };
    case PRODUTOS_FETCH_SUCCESS:
      console.log('success', action.payload);
      return { ...state, produtos: [...state.produtos, ...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;