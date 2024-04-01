import { takeEvery, put } from "redux-saga/effects";

import { FETCH_ALL_COMMENTS_START } from "../constants/comments.constant";

// ACTIONS IMPORT
import {
  fetchCommentsDataSuccess,
  fetchCommentsDataError,
} from "../actions/comments.action";

// GET ALL COMMENTs
function* getAllComments(action) {
  const apiEndpoint = "https://jsonplaceholder.typicode.com/comments";

  try {
    const res = yield fetch(apiEndpoint);
    const data = yield res.json();
    yield put(fetchCommentsDataSuccess(data));
  } catch (err) {
    yield put(fetchCommentsDataError(err));
  }
}
function* commentsSaga() {
  yield takeEvery(FETCH_ALL_COMMENTS_START, getAllComments);
}

export default commentsSaga;