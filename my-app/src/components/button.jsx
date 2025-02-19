import React from 'react'

const button = (props) => {
  return (
    <div>
        <button onClick={props.incrementCount}>{props.children}</button>
        <button onClick={props.incrementCount}>{props.children}</button>
    </div>
  )
}

export default button
