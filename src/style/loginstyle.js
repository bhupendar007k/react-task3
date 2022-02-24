import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient();
  height: 100vh;
`;
export const Form = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Credentialscontainer = styled.div`
  height: 500px;
  width: 450px;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  background: linear-gradient(45deg, #cfc8fb, #9eeaedb0);
  align-items: center;
  border-radius: 30px;
  font-family: "Outfit", sans-serif;
`;
export const Input = styled.input`
  width: 200px;
  height: 20px;
  font-size: medium;
  background: rgba(0, 0, 0, 0);
  border-right: none;
  border-top: none;
  border-bottom-left-radius: 5px;
  outline: none;
  font-family: "Outfit", sans-serif;
  margin-top: 10px;
`;
export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: medium;
  margin-top: 30px;
  border-radius: 30px;
  outline: none;
  border: 0.5px;
`;
