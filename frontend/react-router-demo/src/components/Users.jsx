import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active";
  return (
    <>
      <h1>Users Page</h1>

      <p>User 1</p>
      <p>User 2</p>
      <p>User 3</p>

      <Outlet />

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Users</button>
      </div>
      {isActive ? <p>Showing Active Users</p> : <p>Showing All Users</p>}
    </>
  );
};

export default Users;
