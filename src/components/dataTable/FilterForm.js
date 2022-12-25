import React from "react";
import { useState,useEffect } from "react";

const FilterDataForm = ({ onFilter}) => {
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [type, setType] = useState("")
    const [code, setCode] = useState("")
    const [price, setPrice] = useState(1)


    const OnSubmitCallBack = function(e){
        e.preventDefault()
        onFilter({name, quantity, type, code, price})
    }

    const UpdateInput = function(e, setData){
        setData(e.target.value)
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
                <label htmlFor="price">Price</label>
                    <input type= "number" value={price} onChange ={e => UpdateInput(e, setPrice)}/>
                </div>        
                <div>                                 
                    <div>
                        <button className="form-button" type="submit">FILTER</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FilterDataForm;