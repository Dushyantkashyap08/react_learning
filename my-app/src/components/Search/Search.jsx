import React from 'react'
import Label from './Label'
const Search = ({query, onChange, list}) => {
  return (
    <div>
       Search : <input placeholder='enter the food' value={query} onChange={onChange}/>
       <hr/>
       <Label foods={list} style={{"font-size":"15px"}}></Label>
    </div>
  )
}

export default Search
