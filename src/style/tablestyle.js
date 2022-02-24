import styled from "styled-components";
export const MainContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-rows: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
  background-color: black;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-family: "Outfit", sans-serif;
  border: 1px solid black;
  .table-data {
    height: 400;
    background-color: white;
  }
`;
export const Td = styled.div`
  width: 100%;
  height: 30px;
  display: grid;
  padding-top: 19px;
  grid-template-columns: auto auto auto auto auto auto;
  border: 1px dashed black;
  align-items: center;
  align-content: center;
  font-size: 20px;
  font-family: "Outfit", sans-serif;
`;
export const Tr = styled.div`
  width: 200px;
  height: 150px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;
export const Th = styled.div`
  width: 100%;
  height: 50px;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 20px;
`;
