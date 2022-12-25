import React from 'react'
import { useState } from 'react'
import '../../App.css'
import useAuthAccount from '../../hooks/useAuthAccount'
import DataTable from '../dataTable/DataTable'




const Products = () => {
  console.log("Product Page Render")
  const [data, setData] = useState(useAuthAccount().data)

  const saveServerData = function({newData}){
    setData(newData)
  }
  return (
    <>
      <DataTable 
        rawData = {data} 
        onSaveServerData = {saveServerData}
      />
    </>  
  )
}

export default Products