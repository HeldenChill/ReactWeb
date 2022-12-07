import React from 'react'
import { useState } from 'react'
import TableRow from './TableRow'
import './DataTable.css'
import DataForm from './DataForm'

const DataTable = ({rawData}) => {
  const [tableData,setTableData] = useState(rawData)
  return (
    <>
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
            { 
              tableData.map(rowData => (
                <TableRow rowData = {rowData}></TableRow>
              ))
            }
          </tbody>
      </table>
      <DataForm></DataForm>
    </>
  )
}

export default DataTable;