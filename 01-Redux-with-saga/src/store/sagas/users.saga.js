import { takeEvery, put } from "redux-saga/effects";

import { FETCH_ALL_USERS_START } from "../constants/users.constant";

// ACTIONS IMPORT
import {
  fetchUsersDataSuccess,
  fetchUsersDataError,
} from "../actions/users.action";

// GET ALL USER
function* getAllUsers(action) {
  const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

  try {
    const res = yield fetch(apiEndpoint);
    const data = yield res.json();
    yield put(fetchUsersDataSuccess(data));
  } catch (err) {
    yield put(fetchUsersDataError(err));
  }
}

function* usersSaga() {
  yield takeEvery(FETCH_ALL_USERS_START, getAllUsers);
}

export default usersSaga;
