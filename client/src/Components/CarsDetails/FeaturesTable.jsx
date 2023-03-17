export function FeaturesTable (props) {
    const  { 
      carDetail      
     } = props;
      return (
          <>         

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                <table className="w-full text-lg text-left text-blue-100 dark:text-blue-100">
                    <thead className="text-xl text-white  bg-blue-600 dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Main Features
                            </th>
                            <th scope="col" className="px-6 py-3">
                                
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-blue-500 border-b border-blue-400">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Brand
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.brand}
                            </td>
                            
                        </tr>
                        <tr className="bg-blue-600 border-b border-blue-400">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Model
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.model}
                            </td>
                            
                        </tr>
                        <tr className="bg-blue-500 border-b border-blue-400">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Year
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.year}
                            </td>
                            
                        </tr>
                        <tr className="bg-blue-600 border-b border-blue-400">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Color
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.color}
                            </td>
                            
                        </tr>
                        <tr className="bg-blue-500 border-blue-40">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Km
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.kilometers}
                            </td>
                                                        
                        </tr>
                        <tr className="bg-blue-600 border-b border-blue-400">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Power
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.power}
                            </td>
                            
                        </tr>
                        <tr className="bg-blue-500 border-blue-40">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Engine
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.engine}
                            </td>
                                                        
                        </tr>
                        <tr className="bg-blue-600 border-b border-blue-400">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Fuel
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.fuel}
                            </td>
                            
                        </tr>
                        <tr className="bg-blue-500 border-blue-40">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Transmission
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.transmission}
                            </td>
                                                        
                        </tr>
                        <tr className="bg-blue-600 border-b border-blue-400">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Drive
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.drive}
                            </td>
                            
                        </tr>
                        <tr className="bg-blue-500 border-blue-40">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Capacity
                            </th>
                            <td className="px-6 py-4">
                                {carDetail[0]?.capacity}
                            </td>
                                                        
                        </tr>

                    </tbody>
                </table>
</div>


         
          </>
      )
  }