import {
  FETCH_ALL_COMMENTS_START,
  FETCH_ALL_COMMENTS_SUCCESS,
  FETCH_ALL_COMMENTS_ERROR,
} from "../constants/comments.constant";

export const fetchCommentsDataStart = () => ({
  type: FETCH_ALL_COMMENTS_START,
  // payload: {
  //   id: '123',
  // }
});

export const fetchCommentsDataSuccess = (data) => ({
  type: FETCH_ALL_COMMENTS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchCommentsDataError = (error) => ({
  type: FETCH_ALL_COMMENTS_ERROR,
  payload: {
    error,
  },
});
