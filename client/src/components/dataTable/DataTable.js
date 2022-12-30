import React from 'react'
import { useState, useEffect } from 'react'
import TableRow from './TableRow'
import './DataTable.css'
import useAuthAccount from '../../hooks/useAuthAccount'
import { AccountType, ProductStatus, ProductType } from '../../features/AuthProvider'
import DataFilter from './DataFilter'
import DataEdit from './DataEdit'
import useIsType from '../../hooks/useIsType'
import DialogAlert from '../DialogAlert'

const DataTable = ({rawData, selectData, onAddServerData, onUpdateServerData, onDeleteServerData}) => {
  console.log("Render DataTable")
  const accountState = useAuthAccount()
  const positionFeild = accountState.allPositionFeild
  const producedByFeild = accountState.producedByFeild
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
  const [customerID, setCustomerID] = useState(0)

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
  

  const onSave = function(product){
    console.log(product)
    setAlertSeverity("success")
    setAlertContent(`Success Create Product`)
    setAlertOpen(true)
    onAddServerData(product)
  }

  const onUpdate = function(product){   
    // onSaveServerData({newData})
    console.log(product)
    setAlertSeverity("success")
    setAlertContent(`Update Product Success
    - ID: ${product._id} 
    - Customer ID: ${product.customer_id}`)
    setAlertOpen(true)
    onUpdateServerData(product)
  }

  const onSell = function(payload, rowData){
    var product = {
      _id:rowData._id ,
      name:rowData.name, 
      type:rowData.type, 
      code:rowData.code, 
      error_times:rowData.error_times,
      price:rowData.price,
      status:"Sold", 
      position:rowData.position,
      produced_by:rowData.produced_by,
      produced_time:rowData.produced_time,
      sold_time:payload.sold_time,
      customer_id:payload.customer_id,
      sold_by:rowData.sold_by,
    }
    console.log(payload)
    setAlertSeverity("success")
    setAlertContent(`Sell Product Success
    - ID: ${product._id} 
    - Customer ID: ${product.customer_id}`)
    setAlertOpen(true)
    onUpdateServerData(product)
  }
  const onDelete = function(id){
    setAlertSeverity("success")
    setAlertContent(`Success Delete Product - ID: ${id}`)
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
    if(filterState["Customer ID"]){
        newData = []
        console.log(customerID)
        for(var i = 0; i < lastData.length; i++){
          console.log(lastData[i].customer_id)
          if(Number(customerID) === Number(lastData[i].customer_id)){
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
            <DialogAlert open={alertOpen} setOpen={setAlertOpen} content={alertContent} severity={alertSeverity}></DialogAlert>
            { 
              tableData.map((rowData) => {
                return <TableRow 
                rowData={rowData} 
                selectData={selectData}
                onCreate={onSave}
                onUpdate={onUpdate}
                onDelete={onDelete} 
                _onSell={onSell}
                id={rowData._id} 
                key={rowData._id}>                
                </TableRow>
              })
            }
            {addDataForm}           
          </tbody>
          
      </table>
    </>
  )
}

export default DataTable;