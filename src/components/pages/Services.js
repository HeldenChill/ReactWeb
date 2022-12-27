import React from 'react'
import { useState } from 'react'
import '../../App.css'
import useAuthAccount from '../../hooks/useAuthAccount'
import DataTable from '../dataTable/CustomerData/DataTable'
import { addData,CustomerDataFeilds,deleteData,updateData } from '../../features/AuthProvider'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


const Services = () => {
  console.log("Services Page Render")
  const GENDER = ["Male", "Female"] 

  const dispatch = useDispatch()
  const accountState = useAuthAccount()
  const [data, setData] = useState(accountState.customerData)

  const addServerData = function(customer){
    dispatch(addData(customer))  
  }
  const updateServerData = function(customer){
    dispatch(updateData(customer))
  }

  const deleteServerData = function(id){
    dispatch(deleteData(id))
  }
  useEffect(() => {
    setData(accountState.customerData)
  },[addServerData, updateServerData, deleteServerData])
  
  return (
    <>
      <DataTable 
        rawData = {data} 
        selectData = {
          {
            dataFeilds: CustomerDataFeilds,
            genderFeild: GENDER
          }
        }
        onAddServerData = {addServerData}
        onUpdateServerData = {updateServerData}
        onDeleteServerData = {deleteServerData}
      />
    </>  
  )
}

export default Services