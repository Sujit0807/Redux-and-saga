import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersDataStart } from "./store/actions/users.action";
import { fetchCommentsDataStart } from "./store/actions/comments.action";

function App() {
  // DISPATCH
  const dispatch = useDispatch();

  // SELECTORS
  const { users, isLoading } = useSelector((state) => state.usersData);
  const { comments, isLoading: commentsLoading } = useSelector(
    (state) => state.commentsData
  );

  useEffect(() => {
    dispatch(fetchUsersDataStart());
    dispatch(fetchCommentsDataStart());
  }, []);

  return (
    <>
      <div style={{ border: "2px solid red" }}>
        {!isLoading ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          <h1>Loading Users...</h1>
        )}
      </div>

      <div style={{ border: "2px solid blue" }}>
        {!commentsLoading ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.name}</li>
            ))}
          </ul>
        ) : (
          <h1>Loading Comments...</h1>
        )}
      </div>
    </>
  );
}

export default App;
