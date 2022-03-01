import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import { MainContainer, Table, Th } from "../style/tablestyle";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";

// import { MainContainer, td, tr, th } from "../style/tablestyle";

const Dashboard = () => {
  const [data, setdata] = useState([]);
  const getProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // handle success
        setdata(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  const [editFormData, setEditFormData] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    price: "",
  });

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedRow = {
      id: editFormData.id,
      title: editFormData.title,
      category: editFormData.category,
      description: editFormData.description,
      image: editFormData.image,
      price: editFormData.price,
    };
    const newRow = [...data];

    const index = data.findIndex((row) => row.id === editRowId);

    newRow[index] = editedRow;
    setdata(newRow);
    setEditRowId(null);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const [editRowId, setEditRowId] = useState(null);

  const handleEditClick = (event, row) => {
    event.preventDefault();
    setEditRowId(row.id);
    const formValues = {
      id: row.id,
      title: row.title,
      category: row.category,
      description: row.description,
      image: row.image,
      price: row.price,
    };
    setEditFormData(formValues);
  };

  const handleDeleteClick = (rowId) => {
    const newRow = [...data];
    const index = data.findIndex((row) => row.id === rowId);
    newRow.splice(index, 1);
    setdata(newRow);
  };
  return (
    <>
      <Navbar />
      <MainContainer>
        <form onSubmit={handleEditFormSubmit}>
          <Table>
            <thead>
              <tr>
                <Th>Id</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Description</Th>
                <Th>Price</Th>
                <Th>Image</Th>
                <Th>actions</Th>
              </tr>
            </thead>

            <tbody>
              {data.map((row) => (
                <Fragment>
                  {editRowId === row.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      row={row}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </Table>
        </form>
      </MainContainer>
    </>
  );
};
export default Dashboard;
// style={{ width: 60, height: 60 }}
