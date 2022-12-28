import "./DataForm.css"
import { ProductType, ProductStatus } from "../../features/AuthProvider"
import useAuthAccount from "../../hooks/useAuthAccount"
import React from "react";
const DataFilter = ({prop,setProp,dataFeilds,positionFeild,producedByFeild,total}) => {

    
    const UpdateInput = function(e, setData){
        setData(e.target.value)  
    }
    const createDataFeild = function(name, key){
        switch(name){
            case "Name":
                return  <th key={key} className="filter-th">
                            <div>
                                <label htmlFor= "name"></label>
                                <input className="filter-input" type= "text" name="name" id="name" value={prop.name} onChange={e => UpdateInput(e, setProp.setName)}/>
                            </div>
                        </th>
            case "Type":
                return  <th key={key} className="filter-th">
                            <div>
                            <select className="filter-input" id="type" name="type" value={prop.type} onChange={e => UpdateInput(e, setProp.setType)}>
                                {ProductType.map((item, index) => {
                                    return <option value={item} key = {index}> {item}</option>                           
                                })}
                            </select>
                            </div>
                        </th>
            case "Code":
                return  <th key={key} className="filter-th">
                            <div>
                                <label htmlFor= "code"></label>
                                <input className="filter-input" type= "text" name="code" id="code" value={prop.code} onChange={e => UpdateInput(e, setProp.setCode)}/>
                            </div>
                        </th>
            case "Error Times":
                return  <th key={key} className="filter-th">
                            <div style={{display: "flex"}}>
                                <div style={{paddingRight: "1px",maxWidth:"40%",margin:"auto"}}>
                                    <input style={{maxWidth: "100%"}} type= "number" name="error_times" id="error_times" value={prop.errorTimesMin} onChange={e => UpdateInput(e, setProp.setErrorTimesMin)}/>                              
                                </div>
                                <div style={{paddingLeft: "1px",maxWidth:"40%",margin:"auto"}}>
                                    <input style={{maxWidth: "100%"}} type= "number" name="error_times" id="error_times" value={prop.errorTimesMax} onChange={e => UpdateInput(e, setProp.setErrorTimesMax)}/>
                                </div>
                            </div>
                        </th> 
            case "Price":
                return  <th key={key} className="filter-th">
                            <div style={{display: "flex"}}>
                                <div style={{paddingRight: "1px",maxWidth:"40%",margin:"auto"}}>
                                    <input style={{maxWidth: "100%"}} type= "number" name="price" id="price" value={prop.priceMin} onChange={e => UpdateInput(e, setProp.setPriceMin)}/>                              
                                </div>
                                <div style={{paddingLeft: "1px",maxWidth:"40%",margin:"auto"}}>
                                    <input style={{maxWidth: "100%"}} type= "number" name="price" id="price" value={prop.priceMax} onChange={e => UpdateInput(e, setProp.setPriceMax)}/>
                                </div>
                            </div>
                        </th> 
            case "Status":
                return  <th key={key} className="filter-th">
                            <div>
                            <select className="filter-input" id="status" name="status" value={prop.status} onChange={e => UpdateInput(e, setProp.setStatus)}>
                                {ProductStatus.map((item, index) => {
                                    return <option value={item} key={index}> {item}</option>                           
                                })}
                            </select>  
                            </div> 
                        </th>
            case "Position":
                return  <td key={key} className="filter-th">
                            <div>
                                <select className="filter-input" id="position" name="position" value={prop.position} onChange={e => UpdateInput(e, setProp.setPosition)}>
                                    {positionFeild.map((item, index) => {
                                        return <option value={item} key={index}> {item}</option>                           
                                    })}
                                </select>  
                            </div> 
                        </td>
            case "Produced By":
                return  <th key={key} className="filter-th">
                            <div>
                                <select className="filter-input" id="producedBy" name="producedBy" value={prop.producedBy} onChange={e => UpdateInput(e, setProp.setProducedBy)}>
                                    {producedByFeild.map((item, index) => {
                                        return <option value={item} key={index}> {item}</option>                           
                                    })}
                                </select>  
                            </div> 
                        </th>
            case "Produced Time":
                return <th key={key} className="filter-th">
                            <div style={{paddingBottom: "1px"}}>
                                <input style={{maxWidth: "90%"}} type= "date" name="produced_time" id="produced_time" value={prop.producedTimeMin} onChange={e => UpdateInput(e, setProp.setProducedTimeMin)}/>                              
                            </div>
                            <div style={{paddingTop: "1px"}}>
                                <input style={{maxWidth: "90%"}} type= "date" name="produced_time" id="produced_time" value={prop.producedTimeMax} onChange={e => UpdateInput(e, setProp.setProducedTimeMax)}/>
                            </div>
                            
                        </th>
            case "Sold Time":
                return <th key={key} className="filter-th">
                            <div style={{paddingBottom: "1px"}}>
                                <input style={{maxWidth: "90%"}} type= "date" name="sold_time" id="sold_time" value={prop.soldTimeMin} onChange={e => UpdateInput(e, setProp.setSoldTimeMin)}/>                              
                            </div>
                            <div style={{paddingTop: "1px"}}>
                                <input style={{maxWidth: "90%"}} type= "date" name="sold_time" id="produced_sold_timetime" value={prop.soldTimeMax} onChange={e => UpdateInput(e, setProp.setSoldTimeMax)}/>
                            </div>
                        </th>
            case "Customer ID":
                return  <th key={key} className="filter-th">
                            <div>
                                <label htmlFor= "code"></label>
                                <input className="filter-input" type= "number" name="code" id="code" value={prop.customerID} onChange={e => UpdateInput(e, setProp.setCustomerID)}/>
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