import "./DataForm.css"
import { ProductType } from "../../features/AuthProvider"
import { useState } from "react"
import useIsType from "../../hooks/useIsType"
import { AccountType } from "../../features/AuthProvider"
import { DefaultProduct } from "../../features/AuthProvider"
import React from "react";

const DataEdit = ({onCreate, onUpdate, onCancel, data,selectData, isCreate=false}) => {
    var InitProduct
    InitProduct = isCreate ?  DefaultProduct : data

    const dataFeilds = selectData.dataFeilds
    const positionFeild = selectData.positionFeild
    const productStatus = selectData.productStatus
    const producedByFeild = selectData.producedByFeild
    const accountPosition = selectData.accountPosition

    if(isCreate){
        InitProduct.position = positionFeild[0]
        InitProduct.producedBy = accountPosition
    }
    

    const [id, setID] = useState(InitProduct._id)
    const [name, setName] = useState(InitProduct.name)
    const [type, setType] = useState(InitProduct.type)
    const [code, setCode] = useState(InitProduct.code)
    const [errorTimes, setErrorTimes] = useState(InitProduct.error_times)
    const [price, setPrice] = useState(InitProduct.price)
    const [status, setStatus] = useState(InitProduct.status)
    const [position, setPosition] = useState(InitProduct.position)
    const [producedBy, setProducedBy] = useState(InitProduct.produced_by)
    const [producedTime, setProducedTime] = useState(InitProduct.produced_time)
    const [soldTime, setSoldTime] = useState(InitProduct.sold_time)
    const [customerId, setCustomerId] = useState(InitProduct.customer_id)
    const [soldBy, setSoldBy] = useState(InitProduct.sold_by)
    
    

    const isSeller = useIsType(AccountType.Seller)
    const isInsurance = useIsType(AccountType.Insurance)
    const isAdmin = useIsType(AccountType.Admin)
    const isProducer = useIsType(AccountType.Producer)
    const [error, setError] = useState(false)

    const onSubmit = function(e){
        e.preventDefault()
        if(name === "" || code ===""){
            setError(true)
        }
        else if(!isCreate){
            onUpdate({
                _id:data._id ,
                name:name, 
                type:type, 
                code:code, 
                error_times:errorTimes,
                price:price,
                status:status, 
                position:position,
                produced_by:producedBy,
                produced_time:producedTime,
                sold_time:soldTime,
                customer_id:customerId,
                sold_by: soldBy,
            })
            onCancel()
        }
        else{
            onCreate({
                _id:1 ,
                name:name, 
                type:type, 
                code:code, 
                error_times:errorTimes,
                price:price,
                status:status, 
                position:position,
                produced_by:producedBy,
                produced_time:producedTime,
                sold_time:soldTime,
                customer_id:customerId,
                sold_by:soldBy,
            })
            
        }
        
    }
    const UpdateInput = function(e, setData){
        setData(e.target.value)  
    }
    const createDataFeild = function(feildName, key){
        switch(feildName){
            case "Name":
                return  <td key={key} className="edit-td">
                            <div>
                                <label htmlFor= "name"></label>
                                <input disabled={isSeller || isInsurance} className="filter-input" type= "text" name="name" id="name" value={name} onChange={e => UpdateInput(e, setName)}/>
                            </div>
                        </td>
            case "Type":
                return  <td key={key} className="edit-td">
                            <div>
                            <select disabled={isSeller || isInsurance} className="filter-input" id="type" name="type" value={type} onChange={e => UpdateInput(e, setType)}>
                                {ProductType.map((item, index) => {
                                    return <option value={item} key = {index}> {item}</option>                           
                                })}
                            </select>
                            </div>
                        </td>
            case "Code":
                return  <td key={key} className="edit-td">
                            <div>
                                <label htmlFor= "code"></label>
                                <input disabled={isSeller || isInsurance} className="filter-input" type= "text" name="code" id="code" value={code} onChange={e => UpdateInput(e, setCode)}/>
                            </div>
                        </td>
            case "Error Times":
                return  <td key={key} className="edit-td">
                            <input disabled={isSeller} style={{maxWidth: "80%"}} type= "number" name="error_times" id="error_times" value={errorTimes} onChange={e => UpdateInput(e, setErrorTimes)}/>                              
                        </td> 
            case "Price":
                return  <td key={key} className="edit-td">
                             <input style={{maxWidth: "80%"}} type= "number" name="price" id="price" value={price} onChange={e => UpdateInput(e, setPrice)}/>                              
                        </td> 
            case "Status":
                return  <td key={key} className="edit-td">
                            <div>
                            <select className="filter-input" id="status" name="status" value={status} onChange={e => UpdateInput(e, setStatus)}>
                                {productStatus.map((item, index) => {
                                    return <option value={item} key={index}> {item}</option>                           
                                })}
                            </select>  
                            </div> 
                        </td>
            case "Position":
                return  <td key={key} className="edit-td">
                            <div>
                                <select className="filter-input" id="position" name="position" value={position} onChange={e => UpdateInput(e, setPosition)}>
                                    {positionFeild.map((item, index) => {
                                        return <option value={item} key={index}> {item}</option>                           
                                    })}
                                </select>  
                            </div> 
                        </td>
            case "Produced By":
                return  <td key={key} className="edit-td">
                            <div>
                                <select disabled={isSeller||isInsurance} className="filter-input" id="status" name="status" value={producedBy} onChange={e => UpdateInput(e, setProducedBy)}>
                                    {producedByFeild.map((item, index) => {
                                        return <option value={item} key={index}> {item}</option>                           
                                    })}
                                </select>  
                            </div>
                        </td>
            case "Produced Time":
                return <td key={key} className="edit-td">
                            <input disabled={isSeller || isInsurance} style={{maxWidth: "90%"}} type= "date" name="produced_time" id="produced_time" value={producedTime} onChange={e => UpdateInput(e, setProducedTime)}/>                                                                      
                        </td>
            case "Sold Time":
                return <td key={key} className="edit-td">
                            <input disabled={isProducer || isInsurance} style={{maxWidth: "90%"}} type= "date" name="sold_time" id="sold_time" value={soldTime} onChange={e => UpdateInput(e, setSoldTime)}/>                              
                        </td>
            case "Customer ID":
                return  <td key={key} className="edit-td">
                            <input disabled={!isAdmin} style={{maxWidth: "80%"}} type= "text" name="cus_id" id="cus_id" value={customerId} onChange={e => UpdateInput(e, setCustomerId)}/>                              
                        </td> 
        }
    }

    let buttons
    if(!isCreate){
        buttons =   <>
                        <button style={{width: "48px"}} onClick={onSubmit}>Update</button>
                        <button style={{width: "48px"}} onClick={onCancel}>Cancel</button>
                    </>
    }
    else{
        buttons = <button style={{width: "48px"}} onClick={onSubmit}>ADD</button>
    }

    return(
            <tr style={{height: "2rem"}}>
                {dataFeilds.map((item, index) => createDataFeild(item, index))  }     
                <td className="edit-td">
                    {buttons}                  
                </td>       
            </tr>
    )
}

export default DataEdit