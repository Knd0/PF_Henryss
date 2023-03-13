import { ProgressBar04 } from "./ProgressBar";
import UploadButton from "./UploadButton";


export function FormComponent04 (props) {
  const  { 
    handleConfirmFourthClick,
    handleBackComponent04,
    imageSelected,
    setImageSelected
   } = props;
   


    return (
        <>
        <ProgressBar04/>
        <h2 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl mt-10 lg:text-3xl dark:text-white">Upload your car photos 📸</h2>

        <UploadButton
        imageSelected={imageSelected}
        setImageSelected={setImageSelected}
        />
      
                <div class="flex items-center justify-center w-full">
                    <button type="button" onClick={handleBackComponent04} class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Back
                    </button>
                    <button type="button" onClick={handleConfirmFourthClick} class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Next
                    </button>
                </div>
                </>
    )
}