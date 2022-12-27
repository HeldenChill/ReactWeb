import "./DataForm.css"
import { ProductType } from "../../features/AuthProvider"
import { useState } from "react"
import { DefaultPerson } from "../../../features/AuthProvider"

const DataEdit = ({onCreate, onUpdate, onCancel, data,selectData, isCreate=false}) => {
    var InitPerson
    InitPerson = isCreate ?  DefaultPerson : data

    const dataFeilds = selectData.dataFeilds
    const genderFeild = selectData.genderFeild

    if(isCreate){
        InitPerson.gender = genderFeild[0]
    }
    
    const [id, setID] = useState(InitPerson.id)
    const [name, setName] = useState(InitPerson.name)
    const [age, setAge] = useState(InitPerson.age)
    const [gender, setGender] = useState(InitPerson.gender)
    const [address, setAddress] = useState(InitPerson.address)
    const [telephone, setTelephone] = useState(InitPerson.telephone)

    const onSubmit = function(e){
        e.preventDefault()
        if(name === "" || code ===""){
            setError(true)
        }
        else if(!isCreate){
            onUpdate({
                id:id ,
                name:name, 
                age: age,
                gender: gender,
                address: address,
                telephone: telephone,
                buy_products : []
            })
        }
        else{
            onCreate({
                id:id ,
                name:name, 
                age: age,
                gender: gender,
                address: address,
                telephone: telephone,
                buy_products: InitPerson.buy_products
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
                                <input className="filter-input" type= "text" name="name" id="name" value={name} onChange={e => UpdateInput(e, setName)}/>
                            </div>
                        </td>
            case "Gender":
                return  <td key={key} className="edit-td">
                            <div>
                            <select className="filter-input" id="type" name="type" value={type} onChange={e => UpdateInput(e, setGender)}>
                                {genderFeild.map((item, index) => {
                                    return <option value={item} key = {index}> {item}</option>                           
                                })}
                            </select>
                            </div>
                        </td>
            case "Address":
                return  <td key={key} className="edit-td">
                            <div>
                                <label htmlFor= "code"></label>
                                <input className="filter-input" type= "text" name="address" id="address" value={address} onChange={e => UpdateInput(e, setAddress)}/>
                            </div>
                        </td>
            case "Age":
                return  <td key={key} className="edit-td">
                            <input style={{maxWidth: "80%"}} type= "text" name="age" id="age" value={age} onChange={e => UpdateInput(e, setAge)}/>                              
                        </td> 
            case "Telephone":
                return  <td key={key} className="edit-td">
                            <div>
                                <label htmlFor= "code"></label>
                                <input className="filter-input" type= "text" name="telephone" id="telephone" value={telephone} onChange={e => UpdateInput(e, setTelephone)}/>
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