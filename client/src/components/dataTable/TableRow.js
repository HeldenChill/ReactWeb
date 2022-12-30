import React from "react";
import { useState } from "react";
import DataEdit from "./DataEdit";
import './DataTable.css';
import useAuthAccount from "../../hooks/useAuthAccount";
import { AccountType } from "../../features/AuthProvider";
import DialogForm from "../DialogForm";

const TableRow = ({rowData, selectData, onCreate, onUpdate, onDelete, _onSell, id}) => {
    const [update,setUpdate] = useState(false)
    const dataFeilds = selectData.dataFeilds
    const accountType = useAuthAccount().accountType
    // const productStatus = selectData.productStatus
    const createDataFeild = function(name, key){
        switch(name){
            case "Id":
                return <td key={key}>{rowData._id}</td>
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
            case "Age":
                return <td key={key}>{rowData.age}</td>
            case "Gender":
                return <td key={key}>{rowData.gender}</td>
            case "Address":
                return <td key={key}>{rowData.address}</td>
            case "Telephone":
                return <td key={key}>{rowData.telephone}</td>
            case "Customer ID":
                return <td key={key}>{rowData.customer_id}</td>
        }
    }

    const onSell = function(payload){
        _onSell(payload, rowData)
    }
    //#region 
    let action = null
    if(accountType === AccountType.Admin || accountType === AccountType.Producer){
        action = <button style={{width: "48px"}} onClick={() => {
                    onDelete(id)
                }}>Delete</button>
    }
    else if(accountType === AccountType.Seller){
        action = <DialogForm title = "Sell" content={`Enter Id Customer for purchasing ${rowData.name}`} onSell = {onSell}></DialogForm>
    }

    let feild
    if(!update){
        feild = <tr>
                    {dataFeilds.map((item, index) => createDataFeild(item, index))}
                    <td style={{minWidth: "110px",display: "flex", justifyContent: "center"}}>
                        <button style={{width: "48px"}} onClick={() => {
                            setUpdate(true)
                        }}>Edit</button>
                        {action}                                       
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
    //#endregion

    return(
        <>
            {(feild)}   
        </>               
    )
}

export default TableRow