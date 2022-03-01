import React from "react";
import { Td, Button } from "../style/tablestyle";

const ReadOnlyRow = ({ row, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <Td>{row.id}</Td>
      <Td>{row.title}</Td>
      <Td>{row.category}</Td>
      <Td>{row.description}</Td>
      <Td>{row.price}</Td>
      <Td>
        <img style={{ width: 30, height: 40 }} src={row.image} alt=""></img>
      </Td>
      <Td>
        <Button type="button" onClick={(event) => handleEditClick(event, row)}>
          update
        </Button>
        <Button type="button" onClick={() => handleDeleteClick(row.id)}>
          delete
        </Button>
      </Td>
    </tr>
  );
};

export default ReadOnlyRow;
