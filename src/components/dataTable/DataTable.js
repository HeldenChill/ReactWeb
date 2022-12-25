import React from 'react'
import { useState, useEffect } from 'react'
import TableRow from './TableRow'
import './DataTable.css'
import DataForm from './DataForm'
import { ProductStatus, ProductType } from '../../features/AuthProvider'

const DataTable = ({rawData, onAddServerData, onUpdateServerData, onDeleteServerData}) => {
  console.log("Render DataTable")
  const [name, setName] = useState("")
  const [status, setStatus] = useState(ProductStatus[0])
  const [type, setType] = useState(ProductType[0])
  const [code, setCode] = useState("")
  const [price, setPrice] = useState(0)
  const [tableData, setTableData] = useState(rawData)

  
  const [editing, setEditing] = useState(false)
  const [editID, setEditID] = useState(0)
  

  const onSave = function(product){
    const newProduct = {
      id: 0,
      name:product.name, 
      type:product.type, 
      code:product.code, 
      status:product.status, 
      error_time:product.error_time,
      price: product.price,
      status: product.status,
      position: product.position,
      produced_by: product.produced_by,
      produced_time: product.produced_time,
      sold_time: product.sold_time,                  
    }
    onAddServerData(newProduct)
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

  const UpdateInput = function(e, setData){
    setData(e.target.value)  
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
      <table style={{width: "95%",margin: "auto"}}>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Code</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Actions</th>
              </tr>
              <tr style={{height: "2rem"}}>
                <th>
                  <div>
                      <label htmlFor= "name"></label>
                      <input type= "text" name="name" id="name" value={name} onChange={e => UpdateInput(e, setName)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <select id="type" name="type" value={type} onChange={e => UpdateInput(e, setType)}>
                        {ProductType.map((item, index) => {
                            return <option value={item} key = {index}> {item}</option>                           
                        })}
                    </select>
                  </div>
                </th>
                <th>
                  <div>
                      <label htmlFor= "code"></label>
                      <input type= "text" name="code" id="code" value={code} onChange={e => UpdateInput(e, setCode)}/>
                  </div>
                </th>                
                <th>
                  <div>
                    <select id="status" name="type" value={status} onChange={e => UpdateInput(e, setStatus)}>
                        {ProductStatus.map((item, index) => {
                            return <option value={item} key={index}> {item}</option>                           
                        })}
                    </select>  
                  </div> 
                </th>
                <th>
                  <div>
                  <label htmlFor="price"></label>
                      <input type= "number" value={price} onChange ={e => UpdateInput(e, setPrice)}/>
                  </div>  
                </th>        
                <th>
                <button onClick={() => {
                    onFilter({name, status, type, code, price})
                }}>Filter All</button>
                </th>       
              </tr>
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