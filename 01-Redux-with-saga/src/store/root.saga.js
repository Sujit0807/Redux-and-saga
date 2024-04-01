import { all } from "redux-saga/effects";

import usersSaga from "./sagas/users.saga";
import commentsSaga from "./sagas/comments.saga";

// COMBINE MULTIPLE SAGAs
function* rootSaga() {
  yield all([usersSaga(), commentsSaga()]);
}

export default rootSaga;