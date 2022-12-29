import React from 'react'
import CardItem from './CardItem'
import InfoCard from './InfoCard'
import './Cards.css'

const Cards = ({title,data,onDelete}) => {
  return (
    <div className='cards'>
        <h1>{title}</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {
                        data.map((item) => 
                        (<InfoCard
                        id={item.id}
                        type={item.type}
                        title={item.title} 
                        content = {item.content}
                        onDelete = {onDelete}
                        />))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards