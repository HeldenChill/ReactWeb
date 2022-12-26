import "./DataForm.css"
import { ProductType } from "../../features/AuthProvider"
import { useState } from "react"
import useAuthAccount from "../../hooks/useAuthAccount"
import { AccountType } from "../../features/AuthProvider"
import { DefaultProduct } from "../../features/AuthProvider"

const DataEdit = ({onCreate, onUpdate, onCancel, selectData, isCreate=false}) => {
   
    const [id, setID] = useState(DefaultProduct.id)
    const [name, setName] = useState(DefaultProduct.name)
    const [type, setType] = useState(DefaultProduct.type)
    const [code, setCode] = useState(DefaultProduct.code)
    const [errorTimes, setErrorTimes] = useState(DefaultProduct.error_times)
    const [price, setPrice] = useState(DefaultProduct.price)
    const [status, setStatus] = useState(DefaultProduct.status)
    const [position, setPosition] = useState(DefaultProduct.position)
    const [producedBy, setProducedBy] = useState(DefaultProduct.produced_by)
    const [producedTime, setProducedTime] = useState(DefaultProduct.produced_time)
    const [soldTime, setSoldTime] = useState(DefaultProduct.sold_time)
    const [customerId, setCustomerId] = useState(DefaultProduct.customer_id)
    
    const dataFeilds = selectData.dataFeilds
    const positionFeild = selectData.positionFeild
    const productStatus = selectData.productStatus
    const producedByFeild = selectData.producedByFeild

    const accountType = useAuthAccount().accountType
    const isSeller = accountType === AccountType.Seller ? true : false
    const isInsurance = accountType === AccountType.Insurance ? true : false
    const isProducer = accountType === AccountType.Producer ? true : false
    const isAdmin = accountType === AccountType.Admin ? true : false

    const [error, setError] = useState(false)

    const onSubmit = function(e){
        e.preventDefault()
        if(name === "" || code ===""){
            setError(true)
        }
        else if(!isCreate){
            onUpdate({
                id:id ,
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
                customerId:customerId,
            })
        }
        else{
            onCreate({
                id:id ,
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
                customerId:customerId,
            })
        }
        onCancel()
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
                            <input disabled={isSeller} style={{maxWidth: "80%"}} type= "text" name="error_times" id="error_times" value={errorTimes} onChange={e => UpdateInput(e, setErrorTimes)}/>                              
                        </td> 
            case "Price":
                return  <td key={key} className="edit-td">
                             <input style={{maxWidth: "80%"}} type= "text" name="price" id="price" value={price} onChange={e => UpdateInput(e, setPrice)}/>                              
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
                                <select className="filter-input" id="status" name="status" value={position} onChange={e => UpdateInput(e, setPosition)}>
                                    {positionFeild.map((item, index) => {
                                        return <option value={item} key={index}> {item}</option>                           
                                    })}
                                </select>  
                            </div> 
                        </td>
            case "Produced By":
                return  <td key={key} className="edit-td">
                            <div>
                                <select className="filter-input" id="status" name="status" value={producedBy} onChange={e => UpdateInput(e, setProducedBy)}>
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
                            <input style={{maxWidth: "90%"}} type= "date" name="sold_time" id="sold_time" value={soldTime} onChange={e => UpdateInput(e, setSoldTime)}/>                              
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