import React from "react";
import { useState } from "react";
import DataEdit from "./DataEdit";
import '../DataTable.css';

const TableRow = ({rowData, selectData, onCreate, onUpdate, onDelete, id}) => {
    const [update,setUpdate] = useState(false)
    const dataFeilds = selectData.dataFeilds
    // const productStatus = selectData.productStatus
    const createDataFeild = function(name, key){
        switch(name){
            case "Username":
                return <td key={key}>{rowData.username}</td>
            case "Password":
                return <td key={key}>{rowData.password}</td>
            case "Type":
                return <td key={key}>{rowData.type}</td>
            case "Position":
                return <td key={key}>{rowData.position}</td>
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