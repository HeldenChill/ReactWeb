import React from 'react'
import { useState, useEffect } from 'react'
import TableRow from './TableRow'
import '../DataTable.css'
import DataFilter from './DataFilter'
import DataEdit from './DataEdit'
import DialogAlert from '../../DialogAlert'

const DataTable = ({rawData, selectData, onAddServerData, onUpdateServerData, onDeleteServerData}) => {
  console.log("Render DataTable")
 
  const genderFeild = selectData.genderFeild

  const [id, setID] = useState("")
  const [name, setName] = useState("")
  const [minAge, setMinAge] = useState(0)
  const [maxAge, setMaxAge] = useState(0)
  const [gender, setGender] = useState(genderFeild[0])
  const [address, setAddress] = useState("")
  const [telephone, setTelephone] = useState("")

  const [tableData, setTableData] = useState(rawData)

  const [alertOpen, setAlertOpen] = useState(false) 
  const [alertContent, setAlertContent] = useState("")
  const [alertSeverity, setAlertSeverity] = useState("info")
  
  const dataFeilds = selectData.dataFeilds
  const [filterState, setFilterState] = useState(() => {
    var initFilterState = {}
    for(var i = 0; i < dataFeilds.length; i++){
      initFilterState[dataFeilds[i]] = false 
    }
    return initFilterState
  })
  

  const onSave = function(customer){
    console.log(customer)
    setAlertSeverity("success")
    setAlertContent(`Success Create Customer`)
    setAlertOpen(true)
    onAddServerData(customer)
  }

  const onUpdate = function(customer){   
    // onSaveServerData({newData})
    setAlertSeverity("success")
    setAlertContent(`Update Customer Success
    - ID: ${customer._id}`)
    setAlertOpen(true)
    onUpdateServerData(customer)
  }
  const onDelete = function(id){
    setAlertSeverity("success")
    setAlertContent(`Success Celete Product - ID: ${id}`)
    setAlertOpen(true)
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

    if(filterState["Id"]){
      var newData = []
      for(let i = 0; i < lastData.length; i++){
        if(lastData[i]._id.toLowerCase().includes(id.toLowerCase())){
          newData.push(lastData[i])
        }
      }
      lastData = newData
    }
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
    if(filterState["Gender"]){
      var newData = []
      for(let i = 0; i < lastData.length; i++){
        if(lastData[i].gender === gender){
          newData.push(lastData[i])
        }
      }
      lastData = newData
    }
    if(filterState["Address"]){
      if(address.toLowerCase() === ''){
        
      }
      else{     
        var newData = []
        for(let i = 0; i < lastData.length; i++){
          if(lastData[i].address.toLowerCase().includes(address.toLowerCase())){
            newData.push(lastData[i])
          }
        }
        lastData = newData
      }
    }   
    if(filterState["Telephone"]){
      if(telephone.toLowerCase() === ''){
        
      }
      else{     
        var newData = []
        for(let i = 0; i < lastData.length; i++){
          if(lastData[i].telephone.toLowerCase().includes(telephone.toLowerCase())){
            newData.push(lastData[i])
          }
        }
        lastData = newData
      }
    }
    if(filterState["Age"]){
      var newData = []
      for(let i = 0; i < lastData.length; i++){
        if(lastData[i].age >= minAge 
          && lastData[i].age <= maxAge)
          {
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
              genderFeild = {genderFeild}
              total = {tableData.length}
              ></DataFilter>
          </thead>
          <tbody>
            <DialogAlert open={alertOpen} setOpen={setAlertOpen} content={alertContent} severity={alertSeverity}></DialogAlert>
            { 
              tableData.map((rowData) => {
                return <TableRow 
                rowData={rowData} 
                selectData={selectData}
                onCreate={onSave}
                onUpdate={onUpdate}
                onDelete={onDelete} 
                id={rowData._id} 
                key={rowData._id}></TableRow>
              })
            }
            {addDataForm}           
          </tbody>
          
      </table>
    </>
  )
}

export default DataTable;