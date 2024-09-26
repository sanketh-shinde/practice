import { useState } from "react";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const auth = useAuth();

  const handleLogin = () => {
    auth.login(user);
    navigate("/profile", { replace: true });
  };

  return (
    <>
      <label>
        Username:{" "}
        <input
          type="text"
          placeholder="Enter username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
