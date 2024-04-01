import {
  FETCH_ALL_USERS_START,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_ERROR,
} from "../constants/users.constant";

const initialState = {
  users: [],
  isLoading: false,
  isSuccess: null,
  isError: null
}

export const usersData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_ALL_USERS_SUCCESS: 
      return {
        ...state,
        users: action.payload.data,
        isLoading: false,
        isSuccess: true,
      }
    case FETCH_ALL_USERS_ERROR: 
      return {
        ...state,
        users: [],
        isLoading: false,
        isError: true,
      }
    default:
      return state;
  }
}