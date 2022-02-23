import React from "react";
const Dashboard = () => {
  const axios = require("axios");
  function GetRequest(path) {
    axios.get(path).then(
      (response) => {
        var result = response.data;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  GetRequest("https://fakestoreapi.com/products");
  return (
    <>
      <div>hello</div>
    </>
  );
};
export default Dashboard;
