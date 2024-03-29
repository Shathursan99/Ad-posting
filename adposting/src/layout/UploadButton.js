import React from 'react'

export default function UploadButton() {
  return (
    <div class="frame">
	<div class="center">
		

		<div class="dropzone">
			<img src="http://100dayscss.com/codepen/upload.svg" class="upload-icon" />
			<input type="file" class="upload-input" />
		</div>

		<button type="button" class="btn " name="uploadbutton">Upload file</button>

	</div>
</div>
  )
}
