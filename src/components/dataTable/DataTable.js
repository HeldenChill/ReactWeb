import React from 'react'
import { useState, useEffect } from 'react'
import TableRow from './TableRow'
import './DataTable.css'
import DataForm from './DataForm'

const DataTable = ({rawData, onSaveServerData}) => {
  console.log("Render DataTable")
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [type, setType] = useState("")
  const [code, setCode] = useState("")
  const [price, setPrice] = useState(0)
  const [tableData, setTableData] = useState(rawData)

  
  const [editing, setEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(0)
  

  const onSave = function({name, type, code ,quantity, price}){
    const newData = rawData.slice(0, rawData.length)
    newData.push({
      name, type, code, quantity, price
    })
    onSaveServerData({newData})
  }

  const onUpdate = function({name, type, code, quantity, price}){
    const newData = rawData.slice(0, tableData.length)
    newData[editIndex] = {
      name, type, code, quantity, price
    }
    onSaveServerData({newData})
    setEditing(false)
    setEditIndex(0)
  }
  const onDelete = function(index){
    const newData = rawData.slice(0, tableData.length)
    newData.splice(index, 1)
    onSaveServerData({newData})
  }

  const onEdit = function(index){
    setEditing(true)
    setEditIndex(index)
  }

  const onCancel = function(){
    setEditing(false)
  }

  useEffect(() => {
    onFilter()
  },[name, onSaveServerData])

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

  return (
    <>
      <table style={{width: "95%",margin: "auto"}}>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Code</th>
                  <th>Quantity</th>
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
                  <label htmlFor="type" ></label>
                      <select id="type" name="type" value={type} onChange={e => UpdateInput(e, setType)}>
                          <option value= "Fan">Fan</option>
                          <option value= "TV">TV</option>
                          <option value= "Fridge">Fridge</option>
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
                  <label htmlFor="quantity"></label>
                      <input type= "number" value={quantity} onChange ={e => UpdateInput(e, setQuantity)}/>
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
                    onFilter({name, quantity, type, code, price})
                }}>Filter All</button>
                </th>       
              </tr>
          </thead>
          <tbody>
            { 
              tableData.map((rowData, index) => (
                <TableRow rowData={rowData} onDelete={onDelete} onEdit={onEdit} index={index} key={index}></TableRow>
              ))
            }
          </tbody>
      </table>
      <DataForm 
        onCreate={onSave} 
        onUpdate={onUpdate}
        onCancel={onCancel} 
        data={editing ? tableData[editIndex]:{}}
        update={editing}>
      </DataForm>
    </>
  )
}

export default DataTable;