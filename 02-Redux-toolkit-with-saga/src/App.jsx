import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/slices/users.slice";
import { getComments } from "./store/slices/comments.slice";

function App() {
  // DISPATCH
  const dispatch = useDispatch();

  // SELECTORS
  const { users, usersLoading } = useSelector((state) => state.users);
  const { comments, commentsLoading } = useSelector(
    (state) => state.comments
  );

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getComments());
  }, []);

  return (
    <>
      <div style={{ border: "2px solid red" }}>
        {!usersLoading ? (
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
