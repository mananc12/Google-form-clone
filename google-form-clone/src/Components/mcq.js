import React from 'react'

const Mcq = () => {
  return (
    <div className="mcq box">
    <span>
      MCQ <span className="red-star">*</span>
    </span>
    <ul>
      <li>
        <label>
          <div className="mcq-radio-div"><input className="mcq-radio" type="radio" /></div>
          <span>Option 1</span>
        </label>
      </li>
      <li>
        <label>
        <div className="mcq-radio-div"><input className="mcq-radio" type="radio" /></div>
          <span>Option 2</span>
        </label>
      </li>
      <li>
        <label>
        <div className="mcq-radio-div"><input className="mcq-radio" type="radio" /></div>
          <span>Option 3</span>
        </label>
      </li>
    </ul>
  </div>
  )
}

export default Mcq;