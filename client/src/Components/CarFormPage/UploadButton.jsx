export default function UploadButton(props) {
  const  {  
    setImageSelected
   } = props;

  return (
    <div>
      <input type="file" 
      onChange={(event) => {
        setImageSelected(event.target.files[0])
      }} 
      />
      {/* <button onClick={uploadImage}>Upload</button> */}
    </div>
  )

  
}
