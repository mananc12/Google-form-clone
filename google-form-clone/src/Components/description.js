import React from 'react'
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
const Description = () => {
  return (
    <div className="description box ">
    <span className="heading"> Assignment Task</span>
    <hr />
    <p className='email-switch-cloud'>
     <div> <span className="email">mananc12@gmail.com</span> <span className="switch-account">Switch account</span></div><CloudDoneOutlinedIcon className='icon'/>
    </p>
    <p className="desc-text">
      The name and photo associated with your Google account will be
      recorded when you upload files and submit this form. Your email is
      not part of your response.
    </p>
    <hr />
    <span className="indication red">* Indicates required question</span>
  </div>
  )
}

export default Description