import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Icon } from "../component/icon";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [loginFormInput, setloginFormInput] = useState({
    username: "",
    password: "",
  });
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("userData.json")
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []);

  const handleInputChange = (e) => {
    setloginFormInput({
      ...loginFormInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isUserMatched = userList.filter(
      (user) =>
        user.username === loginFormInput.username &&
        user.password === loginFormInput.password
    ).length;

    if (isUserMatched) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      localStorage.setItem(
        "user",
        JSON.stringify(
          userList.find((user) => user.username === loginFormInput.username)
        )
      );
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-wrapper">
      <form className="login-form" action="" onSubmit={handleFormSubmit}>
        <div className="login-icon-wrapper">
          <Icon size={50} iconName="twitter" color="#1DA1F2" />
        </div>
        <div>
          <input
            className="user-name-input"
            type="text"
            placeholder="username"
            name="username"
            value={loginFormInput.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className="password-input"
            type="password"
            placeholder="password"
            name="password"
            value={loginFormInput.password}
            onChange={handleInputChange}
          />
        </div>
        <button className="login-submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
