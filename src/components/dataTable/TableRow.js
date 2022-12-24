import React from "react";

const TableRow = ({rowData, onDelete, onEdit, index}) => {
    return(
        <tr>
            <td>{rowData.name}</td>
            <td>{rowData.type}</td>
            <td>{rowData.code}</td>
            <td>{rowData.quantity}</td>
            <td>{rowData.price + "$"}</td>
            <td>
                <button onClick={() => {
                    onEdit(index)
                }}>Edit</button>

                <button onClick={() => {
                    onDelete(index)
                }}>Delete</button>
            </td>
        </tr>  
    )
}

export default TableRow