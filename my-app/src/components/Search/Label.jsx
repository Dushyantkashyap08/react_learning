import React from 'react'

const Label = ({style, foods}) => {
  return (
    <table>
            <tbody style={style}>
                {
                    foods.map(food=>(
                        <tr key={food.id}>
                            <td>{food.name}</td>
                            <td>{food.description}</td>
                        </tr>     
                    ))
                }
            </tbody>
    </table>
  )
}

export default Label
