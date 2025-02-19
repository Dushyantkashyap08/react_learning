//components can either be class based or function based. function based are most commonly used.
//type rafce , and funtion based component boiler plate code will be generated
//props are used to pass data from parent to child. we can also pass styles
import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-card' style={props.style}>
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={props.image} alt={props.name} />
      <p id="user-desc">{props.desc}</p>
    </div>
  )
}

export default UserCard
