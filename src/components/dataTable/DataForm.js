import React from "react";
import { useState,useEffect } from "react";

const DataForm = ({ onCreate, onUpdate, onCancel, data, update=false}) => {
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [type, setType] = useState("")
    const [code, setCode] = useState("")
    const [price, setPrice] = useState(1)
    const [error, setError] = useState(false)

    useEffect(() => {
        if(update){
            setName(data.name)
            setQuantity(data.quantity)
            setType(data.type)
            setCode(data.code)
            setPrice(data.price)
        }
    }, [update, data])


    const OnSubmitCallBack = function(e){
        e.preventDefault()
        if(name === "" || code ===""){
            setError(true)
        }
        else if(update){
            onUpdate({name, type, code, quantity, price})
        }
        else{
            onCreate({name, type, code, quantity, price})
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
                        <option value= "Fan">Fan</option>
                        <option value= "TV">TV</option>
                        <option value= "Fridge">Fridge</option>
                    </select>
                </div>
                <div>
                    <label htmlFor= "code">Code</label>
                    <input type= "text" name="code" id="code" value={code} onChange={e => UpdateInput(e, setCode)}/>
                </div>
                <div>
                <label htmlFor="quantity">Quantity</label>
                    <input type= "number" value={quantity} onChange ={e => UpdateInput(e, setQuantity)}/>
                </div>      
                <div>
                <label htmlFor="quantity">Price</label>
                    <input type= "number" value={quantity} onChange ={e => UpdateInput(e, setPrice)}/>
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