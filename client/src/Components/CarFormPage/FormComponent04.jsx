import { ProgressBar04 } from "./ProgressBar";
import UploadButton from "./UploadButton";


export function FormComponent04 (props) {
  const  { 
    errors,
    handleConfirmFourthClick,
    handleBackComponent04,
    imageSelected,
    setImageSelected,
    handleUpload
   } = props;
   


    return (
        <>
        <ProgressBar04/>
        <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl mt-10 lg:text-3xl dark:text-white">Upload your car photo 📸</h2>
        
        {!errors.img ? (
          <div className="flex justify-center items-center flex gap-4 ">                    
            <UploadButton
            imageSelected={imageSelected}
            setImageSelected={setImageSelected}
            />
            <button onClick={handleUpload} className="font-semibold leading-none text-white py-3 px-5 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
              Upload
              </button>
          </div>
        ) : (
          <div>
          <div className="flex justify-center items-center flex gap-4 ">                    
            <UploadButton
            imageSelected={imageSelected}
            setImageSelected={setImageSelected}
            />
            <button onClick={handleUpload} className="font-semibold leading-none text-white py-3 px-5 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
              Upload
            </button>
          </div>
          <div>
            <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.img}</span> </p>
          </div>
          </div>
        )}



                <div className="flex items-center justify-center w-full space-x-2">
                    <button type="button" onClick={handleBackComponent04} className="mt-12 font-semibold leading-none text-white py-3 px-6 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Back
                    </button>
                    <button type="button" onClick={handleConfirmFourthClick} className="mt-12 font-semibold leading-none text-white py-3 px-6 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Next
                    </button>
                </div>
                </>
    )
}

/* const  { 
  handleConfirmFourthClick,
  handleBackComponent04,
  
 } = props;
const [selectedFile, setSelectedFile] = useState(null);
const [imagePreview, setImagePreview] = useState(null);
const [uploadStatus, setUploadStatus] = useState(null);

const handleFileInputChange = (event) => {
const file = event.target.files[0];
setSelectedFile(file);

const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () => {
  setImagePreview(reader.result);
};
};

const handleFormSubmit = async (event) => {
event.preventDefault();

if (!selectedFile) {
  return;
}

const formData = new FormData();
formData.append('file', selectedFile);
formData.append('upload_preset', 'preset_prueba');

try {
  setUploadStatus('Cargando archivo...');
  const response = await axios.post(
    'https://api.cloudinary.com/v1_1/dffjcfxvk/image/upload',
    formData
  );
  setUploadStatus('Archivo cargado exitosamente: ' + response.data.public_id);
} catch (error) {
  console.error('Error al cargar el archivo:', error);
  setUploadStatus('Error al cargar el archivo. Inténtelo de nuevo más tarde.');
}
};
return (
<>
 <ProgressBar04/>
<div>
<form onSubmit={handleFormSubmit}>
  <label>
    Seleccione un archivo:
    <input type="file" onChange={handleFileInputChange} />
  </label>
  <br />
  <button type="submit" disabled={!selectedFile}>
    Cargar archivo
  </button>
</form>

{imagePreview && (
  <div>
    <h2>Vista previa de la imagen:</h2>
    <img  id="imgForm" src={img} alt="Vista previa de la imagen" />
  </div>
)}

{uploadStatus && <p>{uploadStatus}</p>}
</div>


<div className="flex items-center justify-center w-full">
  <button
    type="button"
    onClick={handleBackComponent04}
    className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring">
                  Back
              </button>
              <button type="button" onClick={handleConfirmFourthClick} className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                  Next
              </button>
          </div>
          </>
) */