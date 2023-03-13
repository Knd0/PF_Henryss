import { ProgressBar07 } from "./ProgressBar";


export function FormComponent07 (props) {
  const  { 
    handleBackComponent07
   } = props;
    return (
        <>
        <ProgressBar07/>
        <h2 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl mt-10 lg:text-3xl dark:text-white">🎉 Your car is ready to be Published! 🎉 </h2>
                
                    
                    
                    <div class="flex items-center justify-center w-full">
                        <button type="submit" class="mt-9 font-semibold leading-none text-white py-4 px-8 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Publish Car
                        </button>                        
                    </div>                    
                    

                    <div class="flex items-center justify-center w-full">
                        <button type="button" onClick={handleBackComponent07} class="mt-9 font-semibold leading-none text-white py-2 px-5 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Edit
                        </button>
                    </div>
                </>
    )
}