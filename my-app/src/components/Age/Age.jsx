import React from 'react'

const Age = ({changeAge, age}) => {
  return (
    <div>
      <input placeholder="enter your age" onChange={changeAge}/>
      {
        age>=18?(
            <h5 style={{"backgroundColor" : "red"}}>You are Adult</h5>
        ):(
            <h5 style={{"backgroundColor" : "green"}}>You are a kid</h5>
        )
      }
    </div>
  )
}

export default Age
