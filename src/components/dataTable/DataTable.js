import React from 'react'
import { useState, useEffect } from 'react'
import TableRow from './TableRow'
import './DataTable.css'
import DataForm from './DataForm'
import { AccountType, ProductStatus, ProductType, AccountsPositions } from '../../features/AuthProvider'
import DataFilter from './DataFilter'
import DataEdit from './DataEdit'
import useIsType from '../../hooks/useIsType'

const DataTable = ({rawData, selectData, onAddServerData, onUpdateServerData, onDeleteServerData}) => {
  console.log("Render DataTable")

  const positionFeild = [ ...AccountsPositions.Producer, ...AccountsPositions.Insurance, ...AccountsPositions.Seller]
  const producedByFeild = AccountsPositions.Producer
  const [name, setName] = useState("")
  const [type, setType] = useState(ProductType[0])
  const [code, setCode] = useState("")
  const [errorTimesMin, setErrorTimesMin] = useState(0)
  const [errorTimesMax, setErrorTimesMax] = useState(0)
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(0)
  const [status, setStatus] = useState(ProductStatus[0])
  const [position, setPosition] = useState(positionFeild[0])
  const [producedBy, setProducedBy] = useState(producedByFeild[0])
  const [producedTimeMin, setProducedTimeMin] = useState("2022-01-01")
  const [producedTimeMax, setProducedTimeMax] = useState("2022-01-01")
  const [soldTimeMin, setSoldTimeMin] = useState("2022-01-01")
  const [soldTimeMax, setSoldTimeMax] = useState("2022-01-01")
  const [customerID, setCustomerID] = useState(-1)

  const [tableData, setTableData] = useState(rawData)
  
  const [editing, setEditing] = useState(false)
  const [editID, setEditID] = useState(0)
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
  },[name, type, code, errorTimesMin, errorTimesMax, 
    priceMin, priceMax, status, position, producedBy,
    producedTimeMin, producedTimeMax, soldTimeMin, 
    soldTimeMax, customerID, filterState,
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

  const isAdmin = useIsType(AccountType.Admin)
  const isProducer = useIsType(AccountType.Producer)
  //#region JFX
  var addDataForm
  addDataForm = isAdmin || isProducer ?
                <DataEdit
                onCreate={onSave}
                onUpdate={onUpdate}
                selectData={selectData}
                isCreate={true}
              ></DataEdit>  : null
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
                name:name,
                type:type,
                code:code,
                errorTimesMin:errorTimesMin,
                errorTimesMax:errorTimesMax,
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
                setErrorTimesMin:setErrorTimesMin,
                setErrorTimesMax:setErrorTimesMax,
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
              dataFeilds = {dataFeilds}
              total = {tableData.length}
              positionFeild = {positionFeild}
              producedByFeild = {producedByFeild}
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