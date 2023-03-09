import React, { useState } from 'react';
import axios from 'axios';



export default function UploadButton() {

  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "preset_prueba")

    axios.post("https://api.cloudinary.com/v1_1/dffjcfxvk/image/upload", formData
    ).then((response) => {
    console.log(response);
    });
  }


  return (
    <div>
      <input type="file" 
      onChange={(event) => {
        setImageSelected(event.target.files[0])
      }} 
      />
      <button onClick={uploadImage}>Upload</button>
    </div>
  )

  
}
