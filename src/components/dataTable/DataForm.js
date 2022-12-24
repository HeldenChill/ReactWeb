import React from "react";
import { useState,useEffect } from "react";

const DataForm = ({ onCreate, onUpdate, onCancel, data, update=false}) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(18)
    const [gender, setGender] = useState("Male")

    useEffect(() => {
        if(update){
            setName(data.name)
            setAge(data.age)
            setGender(data.gender)
        }
    }, [update, data])
const OnSubmitCallBack = function(e){
    e.preventDefault()
    if(update){
        onUpdate({name, age, gender})
    }
    else{
        onCreate({name, age, gender})
    }
}
    return(
        <div className= "data-form">
            <form onSubmit={OnSubmitCallBack}>
                <div>
                    <label htmlFor= "name">Name</label>
                    <input type= "text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type= "number" value={age} onChange ={e => setAge(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="gender" >Gender</label>
                    <select id="gender" name="gender" value={gender} onChange={e => setGender(e.target.value)}>
                        <option value= "Male">Male</option>
                        <option value= "Female">Female</option>
                    </select>
                    <div>
                        <button className="form-button" type="submit">{update ? "UPDATE": "ADD"}</button>
                        {update ? <button className="form-button" onClick={onCancel}>Cancel</button> : null}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DataForm;