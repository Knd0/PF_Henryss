import { ProgressBar02 } from "./ProgressBar";

export function FormComponent02 (props) {
  const  { 
    car,    
    errors,    
    onInputChange,
    handleConfirmSecondClick,
    handleBackComponent02
   } = props;

   

    return (
        <>
        <ProgressBar02/>
        <h2 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl mt-10 lg:text-3xl dark:text-white">Technical Information ⚙️</h2>
        <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">

                    {!errors.power ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Power</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="490 hp"
                        onChange={onInputChange}
                        name="power"
                        value={car.power}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Power</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="490 hp"
                              onChange={onInputChange}
                              name="power"
                              value={car.power}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.power}</span> </p>
                        </div>
                      )}    
                    
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.engine ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Engine</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="6.2L V8"
                        onChange={onInputChange}
                        name="engine"
                        value={car.engine}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Engine</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="6.2L V8"
                              onChange={onInputChange}
                              name="engine"
                              value={car.engine}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.engine}</span> </p>
                        </div>
                      )}
                    </div>
                </div>

                <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">

                    {!errors.fuel ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Fuel</label>
                        
                        <select id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                              onChange={onInputChange}
                              name="fuel"
                              value={car.fuel}
                              >
                                <option value="--select--">--select--</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Nafta">Nafta</option>
                                <option value="GNC">GNC</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Nafta/GNC">Nafta/GNC</option>
                                <option value="Hybrid/Diesel">Hybrid/Diesel</option>
                                <option value="Hybrid/Nafta">Hybrid/Nafta</option>
                              </select>

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Fuel</label>
                              
                              <select id="username-success" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              onChange={onInputChange}
                              name="fuel"
                              value={car.fuel}
                              >
                                <option value="--select--">--select--</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Nafta">Nafta</option>
                                <option value="GNC">GNC</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Nafta/GNC">Nafta/GNC</option>
                                <option value="Hybrid/Diesel">Hybrid/Diesel</option>
                                <option value="Hybrid/Nafta">Hybrid/Nafta</option>
                              </select>
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.fuel}</span> </p>
                        </div>
                      )}    
                    
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.transmission ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Transmission</label>
                        
                        <select id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                              onChange={onInputChange}
                              name="transmission"
                              value={car.transmission}
                              >
                                <option value="--select--">--select--</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Semiatutomatic">Semiatutomatic</option>
                                <option value="Manual">Manual</option>
                                <option value="Sequential">Sequential</option>                               
                              </select>

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Transmission</label>
                              
                              <select id="username-success" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              onChange={onInputChange}
                              name="transmission"
                              value={car.transmission}
                              >
                                <option value="--select--">--select--</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Semiatutomatic">Semiatutomatic</option>
                                <option value="Manual">Manual</option>
                                <option value="Sequential">Sequential</option>                               
                              </select>
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.transmission}</span> </p>
                        </div>
                      )}
                    </div>
                </div>

                <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                    {!errors.drive ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Drive</label>
                        
                        <select id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                              onChange={onInputChange}
                              name="drive"
                              value={car.drive}
                              >
                                <option value="--select--">--select--</option>
                                <option value="Assisted">Assisted</option>
                                <option value="Electric">Electric</option>
                                <option value="Hydraulic">Hydraulic</option>
                                <option value="Mechanical">Mechanical</option>                               
                              </select>

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Drive</label>
                              
                              <select id="username-success" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              onChange={onInputChange}
                              name="drive"
                              value={car.drive}
                              >
                                <option value="--select--">--select--</option>
                                <option value="Assisted">Assisted</option>
                                <option value="Electric">Electric</option>
                                <option value="Hydraulic">Hydraulic</option>
                                <option value="Mechanical">Mechanical</option>                           
                              </select>
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.drive}</span> </p>
                        </div>
                      )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.capacity ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Capacity</label>
                        
                        <select id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                              onChange={onInputChange}
                              name="capacity"
                              value={car.capacity}
                              >
                                <option value="--select--">--select--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>    
                                <option value="5">5</option>                              
                              </select>

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Capacity</label>
                              
                              <select id="username-success" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              onChange={onInputChange}
                              name="capacity"
                              value={car.capacity}
                              >
                                <option value="--select--">--select--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>    
                                <option value="5">5</option>                           
                              </select>
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.capacity}</span> </p>
                        </div>
                      )}
                    </div>
                </div>

                <div class="flex items-center justify-center w-full">
                    <button type="button" onClick={handleBackComponent02} class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Back
                    </button>
                    <button type="button" onClick={handleConfirmSecondClick} class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Next
                    </button>
                </div>
                </>
    )
}