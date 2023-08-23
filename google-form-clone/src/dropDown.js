import React from 'react'

const DropDown = () => {
  return (
    <div className="drop-down box">
    <span className="twelve">
      Drop down <span className="red-star">*</span>
    </span>
    <select className="twelve-top">
      <option>Choose</option>
      <hr className='drop-down-hr'/>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  )
}

export default DropDown