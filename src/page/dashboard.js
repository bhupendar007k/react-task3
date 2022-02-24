import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import { MainContainer, Td, Tr, Th } from "../style/tablestyle";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import Th from '@mui/material/Th';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const getProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // handle success
        setData(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <Navbar />
      <MainContainer>
        <Td>
          <Th>Id</Th>
          <Th>Title</Th>

          <Th>Category</Th>
          <Th>Description</Th>
          <Th>Price</Th>
          <Th>Image</Th>
        </Td>
        {data.map((row) => (
          <Td style={{ height: 400, backgroundColor: "white" }}>
            <Tr>{row.id}</Tr>
            <Tr>{row.title}</Tr>
            <Tr>{row.category}</Tr>

            <Tr
              style={{
                justifyContent: "center",
                alignSelf: "start",
                widTh: 600,
              }}
            >
              {row.description}
            </Tr>
            <Tr>{row.price}</Tr>
            <Tr>
              {" "}
              <img style={{ width: 150, height: 150 }} src={row.image} />
            </Tr>
          </Td>
        ))}
      </MainContainer>
    </>
  );
};
export default Dashboard;
