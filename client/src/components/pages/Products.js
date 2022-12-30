import React from 'react'
import { useState } from 'react'
import '../../App.css'
import useAuthAccount from '../../hooks/useAuthAccount'
import DataTable from '../dataTable/DataTable'
import { updateAccountData, FetchServerData, PutServerData, DeleteServerData, PostServerData } from '../../features/AuthProvider'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


const Products = () => {
  console.log("Product Page Render")

  
  const dispatch = useDispatch()
  const accountState = useAuthAccount()
  const [data, setData] = useState(accountState.data)

  const addServerData = function(product){
    PostServerData(product,"product").then(() => FetchServerData("product").then(() => dispatch(updateAccountData())))
  }
  const updateServerData = function(product){
    PutServerData(product._id,product,"product").then(() => FetchServerData("product").then(() => dispatch(updateAccountData())))
  }

  const deleteServerData = function(id){
    DeleteServerData(id, "product").then(() => FetchServerData("product").then(() => dispatch(updateAccountData())))
  }
  useEffect(() => {
    setData(accountState.data)
  },[addServerData, updateServerData, deleteServerData])
  
  return (
    <>
      <DataTable 
        rawData = {data} 
        selectData = {
          {
            dataFeilds:accountState.dataFeilds,
            productStatus: accountState.statusFeild,
            positionFeild: accountState.positionFeild,
            producedByFeild: accountState.producedByFeild,
            accountPosition: accountState.accountPosition
          }
        }
        onAddServerData = {addServerData}
        onUpdateServerData = {updateServerData}
        onDeleteServerData = {deleteServerData}
      />
    </>  
  )
}

export default Products