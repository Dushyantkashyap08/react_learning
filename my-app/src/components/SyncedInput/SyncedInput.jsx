import React from 'react'

const SyncedInput = ({name, setName}) => {
  return (
    <div>
      <input type = "text" placeholder='Enter your name' onChange={setName} value={name}/>
    </div>
  )
}

export default SyncedInput
