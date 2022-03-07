import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import { MainContainer, Table, Td, Button, Th } from "../style/tablestyle";
import Modals from "../components/modal";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState(null);

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
  // child to parent data flow
  const Gets = (value) => {
    console.log("updated", value);
  };
  const openModal = (row) => {
    setIsOpen(true);
    setDisplay(row);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  function handleDelete(id) {
    setData(data.filter((data) => data.id !== id));
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <MainContainer>
        <Navbar></Navbar>
        <Table>
          <thead>
            <tr>
              <Th>Id</Th>
              <Th>title</Th>
              <Th>category</Th>
              <Th>description</Th>
              <Th>price</Th>
              <Th>image</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr>
                <Td>{row.id}</Td>
                <Td>{row.title}</Td>
                <Td>{row.category}</Td>
                <Td>{row.description}</Td>
                <Td>{row.price}</Td>
                <Td>
                  <img
                    style={{ width: 30, height: 40 }}
                    src={row.image}
                    alt=""
                  ></img>
                </Td>
                <Td>
                  <Button type="button" onClick={() => openModal(row)}>
                    update
                  </Button>
                  <Button type="button" onClick={() => handleDelete(row.id)}>
                    delete
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* passing data towards  from parent to child*/}
        {modalIsOpen && (
          <Modals
            show={modalIsOpen}
            close={closeModal}
            datas={display}
            back={Gets}
          />
        )}
      </MainContainer>
    </>
  );
};
export default Dashboard;
