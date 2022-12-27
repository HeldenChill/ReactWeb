import React from 'react'
import { useState, useEffect } from 'react'
import TableRow from '../TableRow'
import '../DataTable.css'
import DataFilter from './DataFilter'
import DataEdit from './DataEdit'

const DataTable = ({rawData, selectData, onAddServerData, onUpdateServerData, onDeleteServerData}) => {
  console.log("Render DataTable")
 
  const GENDER = ["Male", "Female"]

  const [id, setID] = useState(0)
  const [name, setName] = useState("")
  const [minAge, setMinAge] = useState(0)
  const [maxAge, setMaxAge] = useState(0)
  const [gender, setGender] = useState(GENDER[0])
  const [address, setAddress] = useState("")
  const [telephone, setTelephone] = useState("")

  const [tableData, setTableData] = useState(rawData)
  
  const dataFeilds = selectData.dataFeilds
  const [filterState, setFilterState] = useState(() => {
    var initFilterState = {}
    for(var i = 0; i < dataFeilds.length; i++){
      initFilterState[dataFeilds[i]] = false 
    }
    return initFilterState
  })
  

  const onSave = function(product){
    onAddServerData(product)
  }

  const onUpdate = function(product){   
    // onSaveServerData({newData})
    onUpdateServerData(product)
  }
  const onDelete = function(id){
    onDeleteServerData(id)  
  }


  const updateFilterState = function(itemName){
    var newFilterState = {}
    for(var i = 0; i < dataFeilds.length; i++){
      if(dataFeilds[i] != itemName){
        newFilterState[dataFeilds[i]] = filterState[dataFeilds[i]]
      }
      else{
        newFilterState[dataFeilds[i]] = !filterState[dataFeilds[i]]
      }
    }
    setFilterState(newFilterState)  
  }
  useEffect(() => {
    onFilter()
  },[id, name, minAge, maxAge, gender, address, telephone, filterState,
    onAddServerData, onUpdateServerData, onDeleteServerData])

  const onFilter = function(){
    setTableData(rawData)
    var lastData = rawData.slice(0, rawData.length)

    if(filterState["Name"]){
      if(name.toLowerCase() === ''){
        
      }
      else{     
        var newData = []
        rawData.map((item) =>{
          if(item.name.toLowerCase().includes(name.toLowerCase())){
            newData.push(item)
          }
        })
        lastData = newData
      }
    }
    if(filterState["Type"]){
      var newData = []
      for(var i = 0; i < lastData.length; i++){
        if(lastData[i].type === type){
          newData.push(lastData[i])
        }
      }
      lastData = newData
    }
    if(filterState["Code"]){
      if(code.toLowerCase() === ''){
        
      }
      else{     
        var newData = []
        for(var i = 0; i < lastData.length; i++){
          if(lastData[i].code.toLowerCase().includes(code.toLowerCase())){
            newData.push(lastData[i])
          }
        }
        lastData = newData
      }
    }   
    if(filterState["Error Times"]){
      var newData = []
      for(var i = 0; i < lastData.length; i++){
        if(lastData[i].error_times >= errorTimesMin 
          && lastData[i].error_times <= errorTimesMax)
          {
            newData.push(lastData[i])
          }
      }
      lastData = newData
    }
    if(filterState["Price"]){
      var newData = []
      for(var i = 0; i < lastData.length; i++){
        if(lastData[i].price >= priceMin 
          && lastData[i].price <= priceMax)
          {
            newData.push(lastData[i])
          }
      }
      lastData = newData
    }
    if(filterState["Status"]){
      var newData = []
      for(var i = 0; i < lastData.length; i++){
        if(lastData[i].status === status){
          newData.push(lastData[i])
        }
      }
      lastData = newData
    }
    if(filterState["Position"]){
      var newData = []
      for(var i = 0; i < lastData.length; i++){
        if(lastData[i].position === position){
          newData.push(lastData[i])
        }
      }
      lastData = newData
    }    
    if(filterState["Produced By"]){
      var newData = []
      for(var i = 0; i < lastData.length; i++){
        if(lastData[i].produced_by === producedBy){
          newData.push(lastData[i])
        }
      }
      lastData = newData
    }
    if(filterState["Produced Time"]){
      var newData = []
      var minDate = new Date(producedTimeMin)
      var maxDate = new Date(producedTimeMax)

      for(var i = 0; i < lastData.length; i++){
        var currentDate = new Date(lastData[i].produced_time)
        if(currentDate >= minDate && currentDate <= maxDate){
          newData.push(lastData[i])
        }
      }
      lastData = newData
    }
    if(filterState["Sold Time"]){
      var newData = []
      var minDate = new Date(soldTimeMin)
      var maxDate = new Date(soldTimeMax)

      for(var i = 0; i < lastData.length; i++){
        var currentDate = new Date(lastData[i].sold_time)
        if(currentDate >= minDate && currentDate <= maxDate){
          newData.push(lastData[i])
        }
      }
      lastData = newData
    }
    setTableData(lastData)
  }

  //#region JFX
  var addDataForm =<DataEdit
                        onCreate={onSave}
                        onUpdate={onUpdate}
                        selectData={selectData}
                        isCreate={true}
                    ></DataEdit>
  //#endregion
  

  return (
    <>
      <table>
          <thead>
              <tr>
                {dataFeilds.map((item, index) => (
                            <th key={index}>
                              <input type="checkbox" id={index} onChange={(e) => {updateFilterState(item)}}></input>
                              {item}
                            </th>))}
                  <th>Actions</th> 
              </tr>
              <DataFilter 
              style = {{maxWidth: "100px"}}
              prop={{
                id: id,
                name:name,
                minAge:minAge,
                maxAge:maxAge,
                gender:gender,
                address:address,
                telephone:telephone,
              }}
              setProp={{ 
                setID:setID,
                setName:setName,
                setMinAge:setMinAge,
                setMaxAge:setMaxAge,
                setGender:setGender,
                setAddress:setAddress,
                setTelephone:setTelephone,
              }}
              dataFeilds = {dataFeilds}
              genderFeild = {GENDER}
              total = {tableData.length}
              ></DataFilter>
          </thead>
          <tbody>
            { 
              tableData.map((rowData) => {
                return <TableRow 
                rowData={rowData} 
                selectData={selectData}
                onCreate={onSave}
                onUpdate={onUpdate}
                onDelete={onDelete} 
                onEdit={onEdit} 
                id={rowData.id} 
                key={rowData.id}></TableRow>
              })
            }
            {addDataForm}           
          </tbody>
          
      </table>
    </>
  )
}

export default DataTable;