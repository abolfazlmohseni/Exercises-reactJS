import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { actiontypes } from "../../context/reduser";
import { useAuthDispacher } from "../../context/auth-context";
import { type } from "@testing-library/user-event/dist/type";
const fetching = async (username, password) => {
  const res = await axios.post(`http://localhost:3001/login`, {
    username,
    password,
  });
  return res;
};

const Login = () => {
  const [username, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [token, setToken] = useState(null);
  const dispath = useAuthDispacher();
  async function handelSubmit(e) {
    e.preventDefault();
    e.preventDefault();
    const data = await fetching(username, password);
    const response = data.data;
    if (response.success) {
      setToken(response.data);
      setpassword("");
      setuserName("");
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/me`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        if (data.success) {
          dispath({
            type: actiontypes.login_susses,
            paload: {
              user: data.data,
              token,
            },
          });
        }
      });
  }, [token]);

  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post" onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Username"
          required="required"
          value={username}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required="required"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
    </div>
  );
};

export default Login;
