import React from 'react'

export default function Card(props) {
  return (
    <div>
      <img src={props.image} />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <button type="button" onClick={() => Alert()}> Mua ngay</button>
    </div>
  )
}

function Alert() {
  alert("Da them vao gio hang")
}
