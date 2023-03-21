import { ProgressBar05 } from "./ProgressBar";

export function FormComponent05 (props) {
    const  { 
      car,    
      errors,    
      onInputChange,
      handleConfirmFifthClick,
      handleBackComponent05
     } = props;
      return (
          <>
          <ProgressBar05/>
          <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl mt-10 lg:text-3xl dark:text-white">Contact information 📧</h2>
          <div className="md:flex items-center ">
                      <div className="w-full md:w-1/2 flex flex-col">
                          
                      {!errors.email ? (
                      <div >
                        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Email</label>
                        <input type="text" id="username-success" className="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="mimail@gmail.com"
                        onChange={onInputChange}
                        name="email"
                        value={car.email}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Email</label>
                              <input type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="mimail@gmail.com"
                              onChange={onInputChange}
                              name="email"
                              value={car.email}
                              />
                              <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.email}</span> </p>
                        </div>
                      )}
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                          
                      {!errors.phone ? (
                      <div >
                        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Phone</label>
                        <input type="text" id="username-success" className="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="+5492261459851"
                        onChange={onInputChange}
                        name="phone"
                        value={car.phone}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Phone</label>
                              <input type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="+5492261459851"
                              onChange={onInputChange}
                              name="phone"
                              value={car.phone}
                              />
                              <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.phone}</span> </p>
                        </div>
                      )}
                      </div>
                  </div>  
                  
                  <div className="flex items-center justify-center w-full space-x-2">
                    <button type="button" onClick={handleBackComponent05} className="mt-12 font-semibold leading-none text-white py-3 px-6 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Back
                    </button>
                      <button type="button" onClick={handleConfirmFifthClick} className="mt-12 font-semibold leading-none text-white py-3 px-6 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                          Next
                      </button>
                  </div>
                  </>
      )
  }