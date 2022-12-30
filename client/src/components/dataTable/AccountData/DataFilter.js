import "../DataForm.css"
import React from "react";

const DataFilter = ({prop,setProp,dataFeilds,typeFeilds,total}) => {

    
    const UpdateInput = function(e, setData){
        setData(e.target.value)  
    }
    const createDataFeild = function(name, key){
        switch(name){
            case "Username":
                return  <th key={key} className="filter-th">
                            <div>
                                <label htmlFor= "id"></label>
                                <input className="filter-input" type= "text" name="username" id="username" value={prop.username} onChange={e => UpdateInput(e, setProp.setUsername)}/>
                            </div>
                        </th>
            case "Password":
                return  <th key={key} className="filter-th">
                            <div>
                                <label htmlFor= "name"></label>
                                <input className="filter-input" type= "text" name="password" id="password" value={prop.password} onChange={e => UpdateInput(e, setProp.setPassword)}/>
                            </div>
                        </th>
            case "Type":
                return  <th key={key} className="filter-th">
                            <div>
                            <select className="filter-input" id="type" name="type" value={prop.type} onChange={e => UpdateInput(e, setProp.setType)}>
                                {typeFeilds.map((item, index) => {
                                    return <option value={item} key = {index}> {item}</option>                           
                                })}
                            </select>
                            </div>
                        </th>
            case "Position":
                return  <th key={key} className="filter-th">
                            <div>
                                <label htmlFor= "code"></label>
                                <input className="filter-input" type= "text" name="position" id="position" value={prop.position} onChange={e => UpdateInput(e, setProp.setPosition)}/>
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