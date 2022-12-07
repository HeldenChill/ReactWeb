import React from "react";
import { useState } from "react";

const DataForm = () => {
const [name, setName] = useState("")
const [age, setAge] = useState(18)
const [gender, setGender] = useState("Male")

    return(
        <div className= "data-form">
            <form>
                <div>
                    <label htmlFor= "name">Name</label>
                    <input type= "text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type= "number" value={age} onChange ={e => setAge(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="gender" name="gender" onChange={e => setGender(e.target.value)}>Gender</label>
                    <select id="gender" name="gender">
                        <option value= "Male" selected={ gender === "Male"}>Male</option>
                        <option value= "Female" selected={ gender ==="Female"}>Female</option>
                    </select>
                    <div>
                        <button className="form-button" type="submit">ADD</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DataForm;