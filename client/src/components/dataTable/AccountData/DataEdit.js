import "../DataForm.css"
import { useState } from "react"
import { DefaultPerson } from "../../../features/AuthProvider"
import React from "react";

const DataEdit = ({onCreate, onUpdate, onCancel, data,selectData, isCreate=false}) => {
    

    const dataFeilds = selectData.dataFeilds
    const typeFeilds = selectData.typeFeilds
    var InitAccount
    InitAccount = isCreate ?     {username: "",
                                password: "",
                                type: typeFeilds[0],
                                position: "",} : data
    
    const [username, setUsername] = useState(InitAccount.username)
    const [password, setPassword] = useState(InitAccount.password)
    const [type, setType] = useState(InitAccount.type)
    const [position, setPosition] = useState(InitAccount.position)

    const [error, setError] = useState(false)
    const onSubmit = function(e){
        e.preventDefault()
        if(username === "" || password === "" || position === ""){
            setError(true)
        }
        else if(!isCreate){
            onUpdate({
                _id:data._id ,
                username:username, 
                password: password,
                type: type,
                position: position,
            })
            onCancel()
        }
        else{
            onCreate({
                _id:-1 ,
                username:username, 
                password: password,
                type: type,
                position: position,
            })
            
        }
        
    }
    const UpdateInput = function(e, setData){
        setData(e.target.value)  
    }
    const createDataFeild = function(feildName, key){
        switch(feildName){
            case "Username":
                return  <td key={key} className="edit-td">
                            <div>
                                <label htmlFor= "name"></label>
                                <input className="filter-input" type= "text" name="name" id="name" value={username} onChange={e => UpdateInput(e, setUsername)}/>
                            </div>
                        </td>
            case "Password":
                return  <td key={key} className="edit-td">
                            <div>
                                <label htmlFor= "password"></label>
                                <input className="filter-input" type= "text" name="password" id="password" value={password} onChange={e => UpdateInput(e, setPassword)}/>
                            </div>
                        </td>            
            case "Type":
                return  <td key={key} className="edit-td">
                            <div>
                            <select className="filter-input" id="type" name="type" value={type} onChange={e => UpdateInput(e, setType)}>
                                {typeFeilds.map((item, index) => {
                                    return <option value={item} key = {index}> {item}</option>                           
                                })}
                            </select>
                            </div>
                        </td>
            case "Position":
                return  <td key={key} className="edit-td">
                            <div>
                                <label htmlFor= "position"></label>
                                <input className="filter-input" type= "text" name="address" id="address" value={position} onChange={e => UpdateInput(e, setPosition)}/>
                            </div>
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