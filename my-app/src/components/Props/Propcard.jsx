import React from 'react'
import './Propcard.css'

//props.children is the property to access all the children elements of the children component
//we can pass either props or we can pass direct {children}
const Propcard = (props) => {
  return (
    <div className="prop-container">
        {props.children} 
    </div>
  )
}

export default Propcard
