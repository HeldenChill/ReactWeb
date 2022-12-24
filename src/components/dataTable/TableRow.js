import React from "react";

const TableRow = ({rowData, onDelete, onEdit, index}) => {
    return(
        <tr>
            <td>{rowData.name}</td>
            <td>{rowData.age}</td>
            <td>{rowData.gender}</td>
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