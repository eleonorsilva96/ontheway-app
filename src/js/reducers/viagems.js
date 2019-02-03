import { ADD_VIAGEM, VIAGEMS_FETCH_SUCCEEDED } from "../constants/action-types";

const initialState = {
  viagems: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIAGEM:
      console.log('CRIAR VIAGEM');
      // return { ...state, articles: [...state.articles, action.payload] };
    case VIAGEMS_FETCH_SUCCEEDED:
      console.log('SUCCESS VIAGENS', action.payload);
      return { ...state, viagems: [...state.viagems, ...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;