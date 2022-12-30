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
            case "Id":
                return <td key={key}>{rowData._id}</td>
            case "Name":
                return <td key={key}>{rowData.name}</td>
            case "Age":
                return <td key={key}>{rowData.age}</td>
            case "Gender":
                return <td key={key}>{rowData.gender}</td>
            case "Address":
                return <td key={key}>{rowData.address}</td>
            case "Telephone":
                return <td key={key}>{rowData.telephone}</td>
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