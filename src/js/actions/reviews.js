import { ADD_REVIEW } from "../constants/action-types";

export const addReview = review => ({ type: ADD_REVIEW, payload: review });
