import styled from "styled-components";

export const Navcontainer = styled.div`
  display: flex;
  /* width: 100%; */
  padding: 0px 20px 0px 0px;
  margin: 0px;
  padding: 0px;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: linear-gradient(45deg, #cfe6f9, #4d625e);
  position: sticky;
  top: 0;
  .logo {
    height: 20px;
    width: 20px;
  }
  .searchbar {
    display: flex;
    justify-content: center;

    height: 35px;
    border: solid grey 0.5 px;
    border-radius: 20px;
    width: 200px;
    margin: 15px 20px;
    background-color: rgb(255 255 255);
  }
  .searchhere {
    font-family: "Outfit", sans-serif;
    height: 30px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
  }
  .btn {
    height: 33px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    outline: none;
  }
  .btn:hover {
    opacity: 0.5;
  }
`;
export const Listitems = styled.li`
  list-style: none;
  text-decoration: none;
  .items:hover {
    opacity: 0.8;
  }
`;
export const Link = styled.a`
  font-family: "Outfit", sans-serif;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
`;
export const Navmenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 400px;
  padding: 25px 0px;
`;
