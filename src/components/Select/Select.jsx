import React from 'react'

const Select = ({ click }) => {
  return (
    <div>
      <select onChange={click}>
                <option value={1}>Mayor Precio</option>
                <option value={2}>Menor Precio</option>
            </select>
    </div>
  )
}

export default Select
