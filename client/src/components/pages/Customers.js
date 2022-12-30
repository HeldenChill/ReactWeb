import React from 'react'
import { useState } from 'react'
import '../../App.css'
import useAuthAccount from '../../hooks/useAuthAccount'
import DataTable from '../dataTable/CustomerData/DataTable'
import { updateAccountData,CustomerDataFeilds,PostServerData,PutServerData,FetchServerData,DeleteServerData} from '../../features/AuthProvider'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


const Customers = () => {
  console.log("Customer Page Render")
  const GENDER = ["Male", "Female"] 

  const dispatch = useDispatch()
  const accountState = useAuthAccount()
  const [data, setData] = useState(accountState.customerData)

  const addServerData = function(customer){
    console.log(customer)
    PostServerData(customer,"customer").then(() => FetchServerData("customer").then(() => dispatch(updateAccountData())))
  }
  const updateServerData = function(customer){
    PutServerData(customer._id,customer,"customer").then(() => FetchServerData("customer").then(() => dispatch(updateAccountData())))
  }

  const deleteServerData = function(id){
    DeleteServerData(id, "customer").then(() => FetchServerData("customer").then(() => dispatch(updateAccountData())))
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

export default Customers