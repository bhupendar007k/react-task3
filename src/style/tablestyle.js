import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4px;
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
export const Th = styled.th`
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  font-size: 20 px;
  color: #ffffff;
  background-color: rgb(56 56 56);
`;
export const Td = styled.td`
  border: 1px solid #ffffff;
  font-weight: 400;
  text-align: left;
  padding: 8px;
  font-size: 15px;
  background-color: rgb(126 127 129 / 76%);
`;
export const Button = styled.button`
  background-color: #585656;
  color: white;
  width: 60px;
  height: 20px;
  outline: none;
  border: 1px;
  border-radius: 50px;
  margin-top: 10px;
  cursor: pointer;
`;
export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: solid grey 0.5px;
  height: 20px;
  width: auto;
  border-radius: 10px;
`;
