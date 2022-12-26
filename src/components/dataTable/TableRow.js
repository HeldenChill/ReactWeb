import React from "react";
import { useState } from "react";
import DataEdit from "./DataEdit";
import './DataTable.css';

const TableRow = ({rowData, selectData, onCreate, onUpdate, onDelete, id}) => {
    const [update,setUpdate] = useState(false)
    const dataFeilds = selectData.dataFeilds
    const productStatus = selectData.productStatus

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

    let feild
    if(!update){
        feild = <tr>
                    {dataFeilds.map((item, index) => createDataFeild(item, index))}
                    <td style={{minWidth: "110px"}}>
                        <button style={{width: "48px"}} onClick={() => {
                            setUpdate(true)
                        }}>Edit</button>

                        <button style={{width: "48px"}} onClick={() => {
                            onDelete(id)
                        }}>Delete</button>
                    </td>
                </tr>
        
    }
    else{
        feild = <DataEdit
                    onCreate={onCreate}
                    onUpdate={onUpdate}
                    onCancel={() => setUpdate(false)}
                    selectData={selectData}
                    data={rowData}
                    isCreate={false}
                ></DataEdit>
    }


    return(
        <>
            {(feild)}   
        </>               
    )
}

export default TableRow