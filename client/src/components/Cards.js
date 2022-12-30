import React from 'react'
import InfoCard from './InfoCard'
import './Cards.css'
import DialogNotiForm from './DialogNotiForm'

const Cards = ({title,data,onDelete,onCreate,desFeilds}) => {
  return (
    <div className='cards'>
        <h1>{title}</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {
                        data.map((item,index) => 
                        (<InfoCard
                        key={index}
                        id={item._id}
                        type={item.type}
                        title={item.title} 
                        content = {item.content}
                        onDelete = {onDelete}
                        />))
                    }
                </ul>
                <ul>
                    <DialogNotiForm onConfirm={onCreate} desFeilds={desFeilds}></DialogNotiForm>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards