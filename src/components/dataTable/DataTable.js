import React from 'react'
import { useState } from 'react'
import TableRow from './TableRow'
import './DataTable.css'
import DataForm from './DataForm'

const DataTable = ({rawData, onSave, onUpdate, onDelete, onEdit, onCancel, data, update = false}) => {
  console.log("Table Render")

  return (
    <>
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Code</th>
                  <th>Quantity</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
            { 
              rawData.map((rowData, index) => (
                <TableRow rowData={rowData} onDelete={onDelete} onEdit={onEdit} index={index} key={index}></TableRow>
              ))
            }
          </tbody>
      </table>
      <DataForm 
        onCreate={onSave} 
        onUpdate={onUpdate}
        onCancel={onCancel} 
        data={data}
        update={update}>
      </DataForm>
    </>
  )
}

export default DataTable;