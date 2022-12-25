import React from 'react'
import { useState } from 'react'
import '../../App.css'
import useAuthAccount from '../../hooks/useAuthAccount'
import DataTable from '../dataTable/DataTable'
import { addData,deleteData,updateData } from '../../features/AuthProvider'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


const Products = () => {
  console.log("Product Page Render")

  const dispatch = useDispatch()
  const accountState = useAuthAccount()
  const [data, setData] = useState(accountState.data)

  const addServerData = function(product){
    dispatch(addData(product))  
  }
  const updateServerData = function(product){
    dispatch(updateData(product))
  }

  const deleteServerData = function(id){
    dispatch(deleteData(id))
  }
  useEffect(() => {
    setData(accountState.data)
  },[addServerData, updateServerData, deleteServerData])
  
  const saveServerData = function({newData}){
    setData(newData)
  }
  
  return (
    <>
      <DataTable 
        rawData = {data} 
        onSaveServerData = {saveServerData}
        onAddServerData = {addServerData}
        onUpdateServerData = {updateServerData}
        onDeleteServerData = {deleteServerData}
      />
    </>  
  )
}

export default Products