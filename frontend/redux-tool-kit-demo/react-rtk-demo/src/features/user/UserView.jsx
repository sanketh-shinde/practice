import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { isLoading, users, error } = user;

  return (
    <>
      <h1>List Of Users</h1>
      {isLoading && <p>Loading</p>}
      {!isLoading && error ? <p>{error}</p> : null}
      {!isLoading && users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default UserView;
