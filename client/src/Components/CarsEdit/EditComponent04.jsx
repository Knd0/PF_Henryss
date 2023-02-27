import { ProgressBar04 } from "./ProgressBar";
import { useState } from "react";

export function  EditComponent04 (props) {
  const  { 
    car,
    handleConfirmFourthClick,
    handleBackComponent04,
    bla
   } = props;
   const [carImg, setCarImg] = useState("");
   const onInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setCarImg(event.target.result);
    };


    reader.readAsDataURL(file);
  };
  car.img=carImg
    return (
        <>
        <ProgressBar04/>
        <div>
        <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl mt-10 lg:text-3xl dark:text-white">
      Upload your car photos 📸
    </h2>
    <h3></h3>

    <div>
    
    <input type="file" accept="img/jpg, img/png" onChange={onInputChange} />

      
    </div>
  </div>

           
    <button type="button" onClick={handleBackComponent04} className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Back
                    </button>
                    <button type="button" onClick={handleConfirmFourthClick} className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Next
                    </button>
                </>
    )
}

    {/*    <div className="md:flex items-center ">
        <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
              </label>
                  </div>                     
                </div>

                <div className="flex items-center justify-center w-full"> */}