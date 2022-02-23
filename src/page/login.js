import React from "react";
import { MainContainer, Form } from "../style/loginstyle";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        <div>
          <h1>Login</h1>
          <p>Welcome!</p>
        </div>
        <Form>
          <input type="text" placeholder="Username or Email"></input>
          <input type="password" placeholder="Password"></input>
        </Form>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Login
        </button>
      </MainContainer>
    </>
  );
};

export default Login;
