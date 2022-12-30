import "../DataForm.css"
import React from "react";

const DataFilter = ({prop,setProp,dataFeilds,genderFeild,total}) => {

    
    const UpdateInput = function(e, setData){
        setData(e.target.value)  
    }
    const createDataFeild = function(name, key){
        switch(name){
            case "Id":
                return  <th key={key} className="filter-th">
                            <div>
                                <label htmlFor= "id"></label>
                                <input className="filter-input" type= "text" name="id" id="id" value={prop.id} onChange={e => UpdateInput(e, setProp.setID)}/>
                            </div>
                        </th>
            case "Name":
                return  <th key={key} className="filter-th">
                            <div>
                                <label htmlFor= "name"></label>
                                <input className="filter-input" type= "text" name="name" id="name" value={prop.name} onChange={e => UpdateInput(e, setProp.setName)}/>
                            </div>
                        </th>
            case "Gender":
                return  <th key={key} className="filter-th">
                            <div>
                            <select className="filter-input" id="gender" name="gender" value={prop.gender} onChange={e => UpdateInput(e, setProp.setGender)}>
                                {genderFeild.map((item, index) => {
                                    return <option value={item} key = {index}> {item}</option>                           
                                })}
                            </select>
                            </div>
                        </th>
            case "Address":
                return  <th key={key} className="filter-th">
                            <div>
                                <label htmlFor= "code"></label>
                                <input className="filter-input" type= "text" name="address" id="address" value={prop.address} onChange={e => UpdateInput(e, setProp.setAddress)}/>
                            </div>
                        </th>
            case "Age":
                return  <th key={key} className="filter-th">
                            <div style={{display: "flex"}}>
                                <div style={{paddingRight: "1px",maxWidth:"40%",margin:"auto"}}>
                                    <input style={{maxWidth: "100%"}} type= "number" name="age" id="age" value={prop.minAge} onChange={e => UpdateInput(e, setProp.setMinAge)}/>                              
                                </div>
                                <div style={{paddingLeft: "1px",maxWidth:"40%",margin:"auto"}}>
                                    <input style={{maxWidth: "100%"}} type= "number" name="age" id="age" value={prop.maxAge} onChange={e => UpdateInput(e, setProp.setMaxAge)}/>
                                </div>
                            </div>
                        </th> 
            case "Telephone":
                return  <th key={key} className="filter-th">
                            <div>
                                <label htmlFor= "code"></label>
                                <input className="filter-input" type= "text" name="telephone" id="telephone" value={prop.telephone} onChange={e => UpdateInput(e, setProp.setTelephone)}/>
                            </div>
                        </th>
        }
    }
    return(
            <tr style={{height: "2rem"}}>

                {dataFeilds.map((item, index) => createDataFeild(item, index))  }     
                <th>
                    <label style={{color: "#6262c8"}}>{`Sum = ${total}`}</label>
                </th>       
            </tr>
    )
}

export default DataFilter