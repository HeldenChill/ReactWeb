import React from "react";

const TableRow = ({rowData}) => {
    return(
        <tr>
            <td>{rowData.name}</td>
            <td>{rowData.age}</td>
            <td>{rowData.gender}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
                {console.log(rowData)}
            </td>
        </tr>  
    )
}

export default TableRow