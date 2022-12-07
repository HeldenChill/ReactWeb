import React from 'react'
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
const Products = () => {
  return (
    <>
      <DataTable rawData = {rawData[1]}></DataTable>
    </>  
  )
}

export default Products