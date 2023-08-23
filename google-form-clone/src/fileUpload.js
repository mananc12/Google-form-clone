import React from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
const FileUpload = () => {
  return (
    <div className="file-upload box">
          <span className="twelve">
            File Upload <span className="red-star">*</span>
          </span>
          <div className="twelve-top icon-add-file"><label for="file-input" class="custom-file-input">
<div className='upload-icon-div'><FileUploadOutlinedIcon className='upload-icon'/></div>
  <input id="file-input" type="file" />
</label>
</div>
        </div>
  )
}

export default FileUpload