import React from 'react'
import { useState } from 'react'
import '../../App.css'
import useAuthAccount from '../../hooks/useAuthAccount'
import DataTable from '../dataTable/AccountData/DataTable'
import { addAccountData,AccountFeilds,AccountType,deleteAccountData,updateAccountData } from '../../features/AuthProvider'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Accounts = () => {
    console.log("Account Page Render")
  const TYPE = [AccountType.Admin, AccountType.Producer, AccountType.Seller, AccountType.Insurance]
  const dispatch = useDispatch()
  const accountState = useAuthAccount()
  const [data, setData] = useState(accountState.accountData)

  const addServerData = function(account){
    dispatch(addAccountData(account))  
  }
  const updateServerData = function(account){
    dispatch(updateAccountData(account))
  }

  const deleteServerData = function(id){
    dispatch(deleteAccountData(id))
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