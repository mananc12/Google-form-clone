import React from 'react'

const Checkbox = () => {
  return (
    <div className="check-box box">
          <span>
            Checkbox <span className="red-star">*</span>
          </span>
          <ul>
            <li>
              <label>
                <div className="checkbox-div"><input className="check" type="checkbox" /></div>
                Option 1
              </label>
            </li>
            <li>
              <label>
              <div className="checkbox-div"><input className="check" type="checkbox" /></div>
                Option 2
              </label>
            </li>
            <li>
              <label>
              <div className="checkbox-div"><input className="check" type="checkbox" /></div>
                Option 3
              </label>
            </li>
          </ul>
        </div>
  )
}

export default Checkbox