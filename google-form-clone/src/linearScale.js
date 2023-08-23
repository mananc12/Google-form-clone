import React from 'react'

const LinearScale = () => {
  return (
    <div className="linear-scale box">
    <span className="twelve">
      Linear Scale <span className="red-star">*</span>
    </span>
    <div className="linear-grid twelve-top">
      <div className="blank"></div>
      <div className="a">1</div>
      <div className="b">2</div>
      <div className="c">3</div>
      <div className="d">4</div>
      <div className="e">5</div>
      <div className="blank2"></div>
      <div className="worst">Worst</div>
      <div className="linear-radio"><input type="radio"/></div>
      <div className="linear-radio"><input type="radio"/></div>
      <div className="linear-radio"><input type="radio"/></div>
      <div className="linear-radio"><input type="radio"/></div>
      <div className="linear-radio"><input type="radio"/></div>
      <div className="best">Best</div>
    </div>
  </div>
  )
}

export default LinearScale