import React from 'react'
import './Card.css'
import {data} from '../../helper/data'

const Card = () => {
  
  return (
    <div className='cont'>
    <div className='container' >
      {
        data.map((item)=>{
          const {title, desc,image} =item;
          return(
            <div className='card'>
            <h1 className='title'>{title}</h1>
            <img src={image} height="350px" alt=""></img>
            <p>{desc}</p>

            </div>

          )

        })
      }
    </div>
    </div>
  )
}

export default Card
