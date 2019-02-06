import { ADD_REVIEW } from "../constants/action-types";

const initialState = {
  review: []
};
const rootReducer = (state = initialState, action) => {
// const rootReducer = (action) => {
  switch (action.type) {
    case ADD_REVIEW:
      console.log('criar review');
      // window.location.reload();
      // return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;