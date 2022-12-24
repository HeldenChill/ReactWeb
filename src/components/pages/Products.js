import { fa0 } from '@fortawesome/free-solid-svg-icons'
import { render } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
import '../../App.css'
import DataTable from '../dataTable/DataTable'

const rawData = [
  [
    {
      name: "Electric Fan",
      type: "Fan",
      code: "EF001",
      quantity: 10
    },
    {
      name: "Ceilling Fan",
      type: "Fan",
      code: "EF002",
      quantity: 10
    },
    {
      name: "Flat Screen TV - 20inch",
      type: "TV",
      code: "ET001",
      quantity: 10
    },
    
    {
      name: "Flat Screen TV - 42inch",
      type: "TV",
      code: "ET002",
      quantity: 10
    },

    {
      name: "Flat Screen TV - 65inch",
      type: "TV",
      code: "ET003",
      quantity: 20
    },

    {
      name: "Flat Screen TV - 80inch",
      type: "TV",
      code: "ET004",
      quantity: 20
    },

    {
      name: "Save Energy Fridges",
      type: "Fridge",
      code: "EF001",
      quantity: 15
    },
  ],
  [
    {
      name: "Mark-Seller",
      type: 21,
      quantity: "Male"
    },
    {
      name: "John-Seller",
      type: 25,
      quantity: "Male"
    },
    {
      name: "Sarah-Seller",
      type: 31,
      quantity: "Female"
    },
    
    {
      name: "SAO-Seller",
      type: 31,
      quantity: "Female"
    }   
  ]
]


const Products = () => {
  console.log("Product Page Render")

  const [tableData, setTableData] = useState(rawData[0])
  const [editing, setEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(0)
  

  const onSaveDataTable = function({name, type, code ,quantity}){
    const newData = tableData.slice(0, tableData.length)
    newData.push({
      name, type, code, quantity
    })
    setTableData(newData)
  }

  const onUpdateDataTable = function({name, type, code, quantity}){
    const newData = tableData.slice(0, tableData.length)
    newData[editIndex] = {
      name, type, code, quantity
    }
    setTableData(newData)
    setEditing(false)
    setEditIndex(0)
  }
  const onDeleteDataTable = function(index){
    const newData = tableData.slice(0, tableData.length)
    newData.splice(index, 1)
    setTableData(newData)
  }

  const onEditDataTable = function(index){
    setEditing(true)
    setEditIndex(index)
  }

  const onCancelDataTable = function(){
    setEditing(false)
  }
  return (
    <>
      <DataTable 
        rawData = {tableData} 
        onSave={onSaveDataTable} 
        onUpdate={onUpdateDataTable}
        onDelete={onDeleteDataTable} 
        onEdit={onEditDataTable} 
        onCancel={onCancelDataTable}
        data={editing ? tableData[editIndex]:{}}
        update={editing}></DataTable>
    </>  
  )
}

export default Products