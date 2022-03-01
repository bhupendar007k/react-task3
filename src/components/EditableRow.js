import React from "react";
import { Td, Input, Button } from "../style/tablestyle";

const EditableRow = ({ editFormData, handleEditFormChange }) => {
  return (
    <tr>
      <Td>
        <Input
          type="number"
          required="required"
          placeholder="enter id"
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></Input>
      </Td>
      <Td>
        <Input
          type="text"
          required="required"
          placeholder="enter title"
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></Input>
      </Td>
      <Td>
        <Input
          type="text"
          required="required"
          placeholder="enter category"
          name="category"
          value={editFormData.category}
          onChange={handleEditFormChange}
        ></Input>
      </Td>
      <Td>
        <Input
          type="text"
          required="required"
          placeholder="enter description"
          name="description"
          value={editFormData.description}
          onChange={handleEditFormChange}
        ></Input>
      </Td>
      <Td>
        <Input
          type="number"
          required="required"
          placeholder="enter price"
          name="price"
          value={editFormData.price}
          onChange={handleEditFormChange}
        ></Input>
      </Td>
      <Td>
        <img value={editFormData.image} alt=""></img>
      </Td>
      <Td>
        <Button type="submit">save </Button>
      </Td>
    </tr>
  );
};

export default EditableRow;
