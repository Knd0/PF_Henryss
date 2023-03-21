import { ProgressBar03 } from "./ProgressBar";

export function  EditComponent03 (props) {
  const  { 
    car,    
    errors,    
    onInputChange,
    handleConfirmThirdClick,
    handleBackComponent03,
    bla
   } = props;
    return (
        <>
        <ProgressBar03/>
        <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl mt-10 lg:text-3xl dark:text-white">Let the buyers know... </h2>
        <div className="md:flex items-center ">
                    <div className="w-full md:w-1/2 flex flex-col">
                        
                    {!errors.price ? (
                      <div >
                        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Price</label>
                        <input type="number" id="username-success" className="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="$"
                        onChange={onInputChange}
                        name="price"
                        value={car.price}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Price</label>
                              <input type="number" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="$"
                              onChange={onInputChange}
                              name="price"
                              value={car.price}
                              />
                              <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.price}</span> </p>
                        </div>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.place ? (
                      <div >
                        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Place</label>
                        <input type="text" id="username-success" className="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="Buenos Aires"
                        onChange={onInputChange}
                        name="place"
                        value={car.place}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Place</label>
                              <input type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="Buenos Aires"
                              onChange={onInputChange}
                              name="place"
                              value={car.place}
                              />
                              <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.place}</span> </p>
                        </div>
                      )}
                    </div>
                </div>                

                <div className="flex items-center justify-center w-full space-x-2">
                    <button type="button" onClick={handleBackComponent03} className="mt-12 font-semibold leading-none text-white py-3 px-6 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Back
                    </button>
                    <button type="button" onClick={handleConfirmThirdClick} className="mt-12 font-semibold leading-none text-white py-3 px-6 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Next
                    </button>
                </div>
                </>
    )
}