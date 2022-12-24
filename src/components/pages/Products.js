import { fa0 } from '@fortawesome/free-solid-svg-icons'
import { render } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
import '../../App.css'
import DataTable from '../dataTable/DataTable'

const rawData = [
  [
    {
      name: "Mark-Admin",
      age: 21,
      gender: "Male"
    },
    {
      name: "John-Admin",
      age: 25,
      gender: "Male"
    },
    {
      name: "Sarah-Admin",
      age: 31,
      gender: "Female"
    },
    
    {
      name: "SAO-Admin",
      age: 31,
      gender: "Female"
    }   
  ],
  [
    {
      name: "Mark-Seller",
      age: 21,
      gender: "Male"
    },
    {
      name: "John-Seller",
      age: 25,
      gender: "Male"
    },
    {
      name: "Sarah-Seller",
      age: 31,
      gender: "Female"
    },
    
    {
      name: "SAO-Seller",
      age: 31,
      gender: "Female"
    }   
  ]
]

const testData = [
  {
    name: "Mark-Admin",
    age: 21,
    gender: "Male"
  },
  {
    name: "John-Admin",
    age: 25,
    gender: "Male"
  },
  {
    name: "Sarah-Admin",
    age: 31,
    gender: "Female"
  },
  
  {
    name: "SAO-Admin",
    age: 31,
    gender: "Female"
  }   
]

const Products = () => {
  console.log("Product Page Render")
  
  const [tableData, setTableData] = useState(testData)
  const [editing, setEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(0)
  

  const onSaveDataTable = function({name, age, gender}){
    const newData = tableData.slice(0, tableData.length)
    newData.push({
      name, age, gender
    })
    setTableData(newData)
  }

  const onUpdateDataTable = function({name, age, gender}){
    const newData = tableData.slice(0, tableData.length)
    newData[editIndex] = {
      name, age, gender
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