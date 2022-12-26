import React from 'react'
import { useState, useEffect } from 'react'
import TableRow from './TableRow'
import './DataTable.css'
import DataForm from './DataForm'
import { ProductStatus, ProductType } from '../../features/AuthProvider'
import DataFilter from './DataFilter'
import DataEdit from './DataEdit'

const DataTable = ({rawData, selectData, onAddServerData, onUpdateServerData, onDeleteServerData}) => {
  console.log("Render DataTable")
  const [name, setName] = useState("")
  const [type, setType] = useState(ProductType[0])
  const [code, setCode] = useState("")
  const [errorTimes, setErrorTimes] = useState(0)
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(0)
  const [status, setStatus] = useState(ProductStatus[0])
  const [position, setPosition] = useState("")
  const [producedBy, setProducedBy] = useState("")
  const [producedTimeMin, setProducedTimeMin] = useState("2022-01-01")
  const [producedTimeMax, setProducedTimeMax] = useState("2022-01-01")
  const [soldTimeMin, setSoldTimeMin] = useState("")
  const [soldTimeMax, setSoldTimeMax] = useState("")
  const [customerID, setCustomerID] = useState(-1)

  const [tableData, setTableData] = useState(rawData)
  
  const [editing, setEditing] = useState(false)
  const [editID, setEditID] = useState(0)
  
  const dataFeilds = selectData.dataFeilds
  const [filterState, setFilterState] = useState(() => {
    var initFilterState = []
    for(var i = 0; i < dataFeilds.length; i++){
      initFilterState.push(false)
    }
    return initFilterState
  })
  

  const onSave = function(product){
    onAddServerData(product)
  }

  const onUpdate = function(product){   
    // onSaveServerData({newData})
    onUpdateServerData(product)
    setEditing(false)
    setEditID(0)
  }
  const onDelete = function(id){
    onDeleteServerData(id)  
  }

  const onEdit = function(id){
    setEditID(id)
    setEditing(true)    
  }

  const onCancel = function(){
    setEditing(false)
  }
  const updateFilterState = function(index){
    var newFilterState = []
    for(var i = 0; i < filterState.length; i++){
      if(i != index){
        newFilterState.push(filterState[i])
      }
      else{
        newFilterState.push(!filterState[i])
      }
    }
    setFilterState(newFilterState)
  }
  useEffect(() => {
    onFilter()
  },[name, producedTimeMin, producedTimeMax, filterState, onAddServerData, onUpdateServerData, onDeleteServerData])

  const onFilter = function(){
    setTableData(rawData)
    if(filterState[0]){
      if(name.toLowerCase() === ''){
        setTableData(rawData)
      }
      else{     
        newData = []
        rawData.map((item) =>{
          if(item.name.toLowerCase().includes(name.toLowerCase())){
            newData.push(item)
          }
        })
        setTableData(newData)
      }
    }
    
    if(filterState[8]){
      var newData = []
      var minDate = new Date(producedTimeMin)
      var maxDate = new Date(producedTimeMax)

      for(var i = 0; i < tableData.length; i++){
        var currentDate = new Date(tableData[i].produced_time)
        if(currentDate >= minDate && currentDate <= maxDate){
          newData.push(tableData[i])
        }
      }
      setTableData(newData)
    }
    console.log(filterState)
  }

  

  return (
    <>
      <table>
          <thead>
              <tr>
                {dataFeilds.map((item, index) => (
                            <th key={index}>
                              <input type="checkbox" id={index} onChange={(e) => {updateFilterState(index)}}></input>
                              {item}
                            </th>))}
                  <th>Actions</th> 
              </tr>
              <DataFilter 
              style = {{maxWidth: "100px"}}
              prop={{
                name:name,
                type:type,
                code:code,
                errorTimes:errorTimes,
                priceMin:priceMin,
                priceMax:priceMax,
                status:status,
                position:position,
                producedBy:producedBy,
                producedTimeMin:producedTimeMin,
                producedTimeMax:producedTimeMax,
                soldTimeMin:soldTimeMin,
                soldTimeMax:soldTimeMax,
                customerID:customerID,
              }}
              setProp={{
                setName:setName,
                setType:setType,
                setCode:setCode,
                setErrorTimes:setErrorTimes,
                setPriceMin:setPriceMin,
                setPriceMax:setPriceMax,
                setStatus:setStatus,
                setPosition:setPosition,
                setProducedBy:setProducedBy,
                setProducedTimeMin:setProducedTimeMin,
                setProducedTimeMax:setProducedTimeMax,
                setSoldTimeMin:setSoldTimeMin,
                setSoldTimeMax:setSoldTimeMax,
                setCustomerID:setCustomerID,
              }}
              dataFeilds={dataFeilds}
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
            <DataEdit
              onCreate={onSave}
              onUpdate={onUpdate}
              selectData={selectData}
              isCreate={true}
            ></DataEdit>
          </tbody>
          
      </table>
    </>
  )
}

export default DataTable;