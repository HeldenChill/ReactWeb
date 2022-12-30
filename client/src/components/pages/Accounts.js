import React from 'react'
import { useState } from 'react'
import '../../App.css'
import useAuthAccount from '../../hooks/useAuthAccount'
import DataTable from '../dataTable/AccountData/DataTable'
import { AccountFeilds,AccountType,
  updateAccountData,PostServerData, FetchServerData,PutServerData, DeleteServerData } from '../../features/AuthProvider'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Accounts = () => {
    console.log("Account Page Render")
  const TYPE = [AccountType.Admin, AccountType.Producer, AccountType.Seller, AccountType.Insurance]
  const dispatch = useDispatch()
  const accountState = useAuthAccount()
  const [data, setData] = useState(accountState.accountData)

  const addServerData = function(account){
    PostServerData(account,"account").then(() => FetchServerData("account").then(() => dispatch(updateAccountData())))
    
  }
  const updateServerData = function(account){
    PutServerData(account._id,account,"account").then(() => FetchServerData("account").then(() => dispatch(updateAccountData())))
  }

  const deleteServerData = function(id){
    DeleteServerData(id, "account").then(() => FetchServerData("account").then(() => dispatch(updateAccountData())))
    
  }
  useEffect(() => {
    setData(accountState.accountData)
  },[addServerData, updateServerData, deleteServerData])
  
  return (
    <>
      <DataTable 
        rawData = {data} 
        selectData = {
          {
            dataFeilds: AccountFeilds,
            typeFeilds: TYPE,
          }
        }
        onAddServerData = {addServerData}
        onUpdateServerData = {updateServerData}
        onDeleteServerData = {deleteServerData}
      />
    </>  
  )
}

export default Accounts;