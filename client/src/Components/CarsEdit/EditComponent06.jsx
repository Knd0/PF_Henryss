import { ProgressBar06 } from "./ProgressBar";

export function  EditComponent06 (props) {
  const  { 
    car,  
    onInputChange,
    handleBackComponent06,
    bla
   } = props;
 
    return (
        <>
        <ProgressBar06/>
        <h2 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl mt-10 lg:text-3xl dark:text-white">Let know more about your 🚗 </h2>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        
                        <textarea type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none placeholder-blue-700 focus:border-blue-700 mt-4 bg-gray-100 border rounded border-blue-400"
                        placeholder="My description..."
                        onChange={onInputChange}
                        name="description"
                        defaultValue={bla[0].description}
                        ></textarea>
                    </div>
                </div>
                    <div class="flex items-center justify-center w-full">
                        <button type="button" onClick={handleBackComponent06} class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Back
                        </button>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <button type="submit" class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Publish
                        </button>
                </div>
                </>
    )
}