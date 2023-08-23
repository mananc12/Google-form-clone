import React from 'react'

const MultiChoice = () => {
  return (
    <div className="multi-choice-grid box">
    <span className="twelve">
      Multi choice Grid <span className="red-star">*</span>
    </span>
    <div className="checkbox-grid twelve-top">
      <div className="blank"></div>
    <div className="category-A">Column 1</div>
<div className="category-B">Column 2</div>
<div className="category-C">Column 3</div>
<div className="option-1">Row 1</div>
<div className="checkbox"><input type="radio" /></div>
<div className="checkbox"><input type="radio" /></div>
<div className="checkbox"><input type="radio" /></div>
<div className="option-2">Row 2</div>
<div className="checkbox"><input type="radio" /></div>
<div className="checkbox"><input type="radio" /></div>
<div className="checkbox"><input type="radio" /></div>
<div className="option-3">Row 3</div>
<div className="checkbox"><input type="radio" /></div>
<div className="checkbox"><input type="radio" /></div>
<div className="checkbox"><input type="radio" /></div>
</div>
  </div>
  )
}

export default MultiChoice