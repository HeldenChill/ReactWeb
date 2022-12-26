import React from 'react'
import { useState, useEffect } from 'react'
import TableRow from './TableRow'
import './DataTable.css'
import DataForm from './DataForm'
import { ProductStatus, ProductType } from '../../features/AuthProvider'
import useAuthAccount from '../../hooks/useAuthAccount'
import DataFilter from './DataFilter'

const DataTable = ({rawData, onAddServerData, onUpdateServerData, onDeleteServerData}) => {
  console.log("Render DataTable")
  const [name, setName] = useState("")
  const [type, setType] = useState(ProductType[0])
  const [code, setCode] = useState("")
  const [errorTimes, setErrorTimes] = useState(0)
  const [price, setPrice] = useState(0)
  const [status, setStatus] = useState(ProductStatus[0])
  const [position, setPosition] = useState("")
  const [producedBy, setProducedBy] = useState("")
  const [producedTime, setProducedTime] = useState("")
  const [soldTime, setSoldTime] = useState("")

  const [tableData, setTableData] = useState(rawData)

  
  const [editing, setEditing] = useState(false)
  const [editID, setEditID] = useState(0)
  
  const dataFeilds = useAuthAccount().dataFeilds
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

  useEffect(() => {
    onFilter()
  },[name, onAddServerData, onUpdateServerData, onDeleteServerData])

  const onFilter = function(){
    if(name.toLowerCase() === ''){
      setTableData(rawData)
    }
    else{
      let newData = []
      rawData.map((item) =>{
        if(item.name.toLowerCase().includes(name.toLowerCase())){
          newData.push(item)
        }
      })
      setTableData(newData)
    }
  }



  const getData = function(id){
    for(var i = 0; i < tableData.length; i++){
      if(tableData[i].id === id){
        return tableData[i]
      }
    }
    return undefined
  }

  return (
    <>
      <table>
          <thead>
              <tr>
                {dataFeilds.map((item, index) => (<th key={index}>{item}</th>))}
                  <th>Actions</th> 
              </tr>
              <DataFilter 
              style = {{maxWidth: "100px"}}
              prop={{
                name:name,
                type:type,
                code:code,
                errorTimes:errorTimes,
                price:price,
                status:status,
                position:position,
                producedBy:producedBy,
                producedTime:producedTime,
                soldTime:soldTime,
              }}
              setProp={{
                setName:setName,
                setType:setType,
                setCode:setCode,
                setErrorTimes:setErrorTimes,
                setPrice:setPrice,
                setStatus:setStatus,
                setPosition:setPosition,
                setProducedBy:setProducedBy,
                setProducedTime:setProducedTime,
                setSoldTime:setSoldTime
              }}
              ></DataFilter>
          </thead>
          <tbody>
            { 
              tableData.map((rowData) => {
                return <TableRow 
                rowData={rowData} 
                onDelete={onDelete} 
                onEdit={onEdit} 
                index={rowData.id} 
                key={rowData.id}></TableRow>
              })
            }
          </tbody>
      </table>
      <DataForm 
        onCreate={onSave} 
        onUpdate={onUpdate}
        onCancel={onCancel} 
        data={editing ? getData(editID):{}}
        update={editing}>
      </DataForm>
    </>
  )
}

export default DataTable;