import { put } from "redux-saga/effects";
import { getCommentsSuccess, getCommentsError } from "../slices/comments.slice";

function* commentsSaga() {
  const apiEndpoint = "https://jsonplaceholder.typicode.com/comments";

  try {
    const res = yield fetch(apiEndpoint);
    const data = yield res.json();

    yield put(getCommentsSuccess({comments: data}));
  } catch (err) {
    // notify error
    yield put(getCommentsError());
  }
}

export default commentsSaga;
