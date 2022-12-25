import React from "react";

const TableRow = ({rowData, onDelete, onEdit, index}) => {
    return(
        <tr>
            <td>{rowData.name}</td>
            <td>{rowData.type}</td>
            <td>{rowData.code}</td>
            <td>{rowData.status}</td>
            <td>{`${rowData.price}$`}</td>
            <td>
                <button onClick={() => {
                    onEdit(index)
                    console.log(index)
                    console.log(rowData)
                }}>Edit</button>

                <button onClick={() => {
                    onDelete(index)
                    console.log(index)
                    console.log(rowData)
                }}>Delete</button>
            </td>
        </tr>  
    )
}

export default TableRow