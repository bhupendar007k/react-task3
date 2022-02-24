import React from "react";
import {
  MainContainer,
  Form,
  Input,
  Button,
  Credentialscontainer,
} from "../style/loginstyle";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        <Credentialscontainer>
          <div>
            <h1>Login</h1>
            <p>Welcome!</p>
          </div>
          <Form>
            <Input type="text" placeholder="Username or Email"></Input>
            <Input type="password" placeholder="Password"></Input>
          </Form>
          <Button
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Login
          </Button>
        </Credentialscontainer>
      </MainContainer>
    </>
  );
};

export default Login;
