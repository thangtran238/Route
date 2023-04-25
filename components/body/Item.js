import React from 'react'

export default function Item(props) {
  return (
    <div className='container d-flex justify-content-around align-items-center'>
      <h4>{props.name}</h4>
      <p>{props.price}</p>  
    </div>
  )
}
