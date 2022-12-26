import React from "react";
import useAuthAccount from "../../hooks/useAuthAccount";
import './DataTable.css';

const TableRow = ({rowData, onDelete, onEdit, index}) => {
    const dataFeilds = useAuthAccount().dataFeilds
    const createDataFeild = function(name, key){
        switch(name){
            case "Name":
                return <td key={key}>{rowData.name}</td>
            case "Type":
                return <td key={key}>{rowData.type}</td>
            case "Code":
                return <td key={key}>{rowData.code}</td>
            case "Error Times":
                return <td key={key}>{rowData.error_times}</td>
            case "Price":
                return <td key={key}>{`${rowData.price}$`}</td>
            case "Status":
                return <td key={key}>{rowData.status}</td>
            case "Position":
                return <td key={key}>{rowData.position}</td>
            case "Produced By":
                return <td key={key}>{rowData.produced_by}</td>
            case "Produced Time":
                return <td key={key}>{rowData.produced_time}</td>
            case "Sold Time":
                return <td key={key}>{rowData.sold_time}</td>
        }
    }
    return(
        <tr>
            {dataFeilds.map((item, index) => createDataFeild(item, index))}
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