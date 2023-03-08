import { ProgressBar01 } from "./ProgressBar";


export function FormComponent01 (props) {
  const  { 
    car,    
    errors,    
    onInputChange,
    handleConfirmFirstClick
   } = props;
    return (
        <>

        <ProgressBar01/>
        
        <h2 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white mt-10">Start describing your 🚗</h2>
        <div class="md:flex items-center">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                          {!errors.brand ? (
                          <div >
                            <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Brand</label>
                            <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                            placeholder="Mustang"
                            onChange={onInputChange}
                            name="brand"
                            value={car.brand}
                            />

                          </div>
                          ) : (      
                          
                            <div >
                                  <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Brand</label>
                                  <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                                  placeholder="Ford"
                                  onChange={onInputChange}
                                  name="brand"
                                  value={car.brand}
                                  />
                                  <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.brand}</span> </p>
                            </div>
                          )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                        {!errors.model ? (
                          <div >
                            <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Model</label>
                            <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                            placeholder="Ford"
                            onChange={onInputChange}
                            name="model"
                            value={car.model}
                            />

                          </div>
                          ) : (      
                          
                            <div >
                                  <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Model</label>
                                  <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                                  placeholder="Mustang"
                                  onChange={onInputChange}
                                  name="model"
                                  value={car.model}
                                  />
                                  <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.model}</span> </p>
                            </div>
                          )}
                    </div>
                </div>

                <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                    {!errors.year ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Year</label>
                        <input type="number" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="2023"
                        onChange={onInputChange}
                        name="year"
                        value={car.year}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Year</label>
                              <input type="number" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="2023"
                              onChange={onInputChange}
                              name="year"
                              value={car.year}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.year}</span> </p>
                        </div>
                      )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">

                    {!errors.color ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Color</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="Red"
                        onChange={onInputChange}
                        name="color"
                        value={car.color}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Color</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="Red"
                              onChange={onInputChange}
                              name="color"
                              value={car.color}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.color}</span> </p>
                        </div>
                      )}    
                    
                    </div>
                </div>
                <div class="flex items-center justify-center ">
                {!errors.kilometers ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Kilometers</label>
                        <input type="number" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="0"
                        onChange={onInputChange}
                        name="kilometers"
                        value={car.kilometers}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Kilometers</label>
                              <input type="number" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="0"
                              onChange={onInputChange}
                              name="kilometers"
                              value={car.kilometers}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.kilometers}</span> </p>
                        </div>
                      )}
                </div>

                <div class="flex items-center justify-center w-full">
                    <button type="button" onClick={handleConfirmFirstClick} class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Next
                    </button>
                </div>
                </>
    )
}