import {
  FETCH_ALL_COMMENTS_START,
  FETCH_ALL_COMMENTS_SUCCESS,
  FETCH_ALL_COMMENTS_ERROR,
} from "../constants/comments.constant";

const initialState = {
  comments: [],
  isLoading: false,
  isSuccess: null,
  isError: null
}

export const commentsData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COMMENTS_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_ALL_COMMENTS_SUCCESS: 
      return {
        ...state,
        comments: action.payload.data,
        isLoading: false,
        isSuccess: true,
      }
    case FETCH_ALL_COMMENTS_ERROR: 
      return {
        ...state,
        comments: [],
        isLoading: false,
        isError: true,
      }
    default:
      return state;
  }
}