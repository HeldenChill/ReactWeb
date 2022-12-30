import React from "react";
import { useState,useEffect } from "react";
import { ProductType, ProductStatus } from "../features/AuthProvider";

const DataForm = ({ onCreate, onUpdate, onCancel, data, update=false}) => {
    
    const [id, setID] = useState(0)
    const [name, setName] = useState("")
    const [type, setType] = useState(ProductType[0])
    const [code, setCode] = useState("")
    const [errorTimes, setErrorTimes] = useState(0)
    const [price, setPrice] = useState(1)
    const [status, setStatus] = useState(ProductStatus[0])
    const [position, setPosition] = useState("")
    const [producedBy, setProducedBy] = useState("")
    const [producedTime, setProducedTime] = useState("")
    const [soldTime, setSoldTime] = useState("")
    
    


    const [error, setError] = useState(false)

    useEffect(() => {
        if(update){
            setID(data.id)
            setName(data.name)         
            setType(data.type)
            setCode(data.code)
            setErrorTimes(data.error_times)
            setPrice(data.price)
            setStatus(data.status)
            setPosition(data.position)
            setProducedBy(data.produced_by)
            setProducedTime(data.produced_time)
            setSoldTime(data.sold_time)
        }
    }, [update, data])


    const OnSubmitCallBack = function(e){
        e.preventDefault()
        if(name === "" || code ===""){
            setError(true)
        }
        else if(update){
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
                sold_time:soldTime
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
                sold_time:soldTime
            })
        }
    }

    const UpdateInput = function(e, setData){
        setData(e.target.value)
        setError(false)
    }
    return(
        <div className= "data-form">
            <form onSubmit={OnSubmitCallBack}>
                <div>
                    <label htmlFor= "name">Name</label>
                    <input type= "text" name="name" id="name" value={name} onChange={e => UpdateInput(e, setName)}/>
                </div>
                <div>
                <label htmlFor="type" >Type</label>
                    <select id="type" name="type" value={type} onChange={e => UpdateInput(e, setType)}>
                        {ProductType.map((item, index) => {
                            return <option value={item} key={index}> {item}</option>                           
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor= "code">Code</label>
                    <input type= "text" name="code" id="code" value={code} onChange={e => UpdateInput(e, setCode)}/>
                </div>
                <div>
                <label htmlFor="status" >Status</label>
                    <select id="status" name="type" value={status} onChange={e => UpdateInput(e, setStatus)}>
                        {ProductStatus.map((item, index) => {
                            return <option value={item} key={index}> {item}</option>                           
                        })}
                    </select>
                </div>      
                <div>
                <label htmlFor="price">Price</label>
                    <input type= "number" value={price} onChange ={e => UpdateInput(e, setPrice)}/>
                </div>        
                <div>                                 
                    <div>
                        <button className="form-button" type="submit">{update ? "UPDATE": "ADD"}</button>
                        {update ? <button className="form-button" onClick={onCancel}>Cancel</button> : null}
                    </div>
                </div>
                <div>
                    { error ? <label style={{color: "red"}}>Error, You need to enter all the information needed </label> : null}
                </div>
            </form>
        </div>
    )
}

export default DataForm;
