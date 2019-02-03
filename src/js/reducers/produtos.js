import { ADD_PRODUTO, PRODUTOS_FETCH_SUCCEEDED } from "../constants/action-types";

const initialState = {
  produtos: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUTO:
      console.log('criar produto');
      // return { ...state, articles: [...state.articles, action.payload] };
    case PRODUTOS_FETCH_SUCCEEDED:
      console.log('success produtos', action.payload);
      return { ...state, produtos: [...state.produtos, ...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;