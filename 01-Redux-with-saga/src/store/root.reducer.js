import { combineReducers } from "redux";
import { usersData } from "./reducers/users.reducer";
import { commentsData } from "./reducers/comments.reducer";

export default combineReducers({
  usersData,
  commentsData,
});
