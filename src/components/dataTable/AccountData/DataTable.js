import React from 'react'
import { useState, useEffect } from 'react'
import TableRow from './TableRow'
import '../DataTable.css'
import DataFilter from './DataFilter'
import DataEdit from './DataEdit'

const DataTable = ({rawData, selectData, onAddServerData, onUpdateServerData, onDeleteServerData}) => {
  console.log("Render DataTable")
 
  const typeFeilds = selectData.typeFeilds

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [type, setType] = useState(typeFeilds[0])
  const [position, setPosition] = useState("")
  
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
  },[username, password, type, position, filterState,
    onAddServerData, onUpdateServerData, onDeleteServerData])

  const onFilter = function(){
    setTableData(rawData)
    var lastData = rawData.slice(0, rawData.length)

    if(filterState["Username"]){
      if(username.toLowerCase() === ''){
        
      }
      else{     
        var newData = []
        rawData.map((item) =>{
          if(item.username.toLowerCase().includes(username.toLowerCase())){
            newData.push(item)
          }
        })
        lastData = newData
      }
    }
    if(filterState["Password"]){
      if(password.toLowerCase() === ''){
        
      }
      else{     
        var newData = []
        rawData.map((item) =>{
          if(item.password.toLowerCase().includes(password.toLowerCase())){
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
    if(filterState["Position"]){
      if(position.toLowerCase() === ''){
        
      }
      else{     
        var newData = []
        for(var i = 0; i < lastData.length; i++){
          if(lastData[i].position.toLowerCase().includes(position.toLowerCase())){
            newData.push(lastData[i])
          }
        }
        lastData = newData
      }
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
                username: username,
                password:password,
                type:type,
                position:position,
              }}
              setProp={{ 
                setUsername:setUsername,
                setPassword:setPassword,
                setType:setType,
                setPosition:setPosition,
              }}
              dataFeilds = {dataFeilds}
              typeFeilds = {typeFeilds}
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