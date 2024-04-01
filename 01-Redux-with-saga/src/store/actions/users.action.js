import {
  FETCH_ALL_USERS_START,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_ERROR,
} from "../constants/users.constant";

export const fetchUsersDataStart = () => ({
  type: FETCH_ALL_USERS_START,
  // payload: {
  //   id: '123',
  // }
});

export const fetchUsersDataSuccess = (data) => ({
  type: FETCH_ALL_USERS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchUsersDataError = (error) => ({
  type: FETCH_ALL_USERS_ERROR,
  payload: {
    error,
  },
});
