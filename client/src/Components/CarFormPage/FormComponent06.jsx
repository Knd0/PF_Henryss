import { ProgressBar06 } from "./ProgressBar";


export function FormComponent06 (props) {
  const  { 
    car,
    errors,  
    onInputChange,
    handleBackComponent06,
    handleConfirmSixClick,
    showNextButton
   } = props;
    return (
        <>
        <ProgressBar06/>
        <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl mt-10 lg:text-3xl dark:text-white">Let know more about your 🚗 </h2>
                <div>
                    
                    {!errors.description ? (
                        <div className="w-full flex flex-col mt-8">
                        <textarea type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none placeholder-blue-700 focus:border-blue-700 mt-4 bg-gray-100 border rounded border-blue-400"
                        placeholder="My description..."
                        onChange={onInputChange}
                        name="description"
                        value={car.description}
                        ></textarea>
                        </div>

                    ) : (
                        <div className="w-full flex flex-col mt-8">
                        <textarea type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none placeholder-red-700 focus:border-red-700 mt-4 bg-gray-100 border rounded border-red-400"
                        placeholder="My description..."
                        onChange={onInputChange}
                        name="description"
                        value={car.description}
                        ></textarea>
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.description}</span> </p>
                        </div>
                    )}





                    
                </div>
                    <div className="flex items-center justify-center w-full space-x-2">
                        <button type="button" onClick={handleBackComponent06} className="mt-12 font-semibold leading-none text-white py-3 px-6 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Back
                        </button>
                    
                    {showNextButton && (
                    <button type="button" onClick={handleConfirmSixClick} className="mt-12 font-semibold leading-none text-white py-3 px-6 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Next
                    </button>                  
                    )}
                    </div>
                    
                </>
    )
}