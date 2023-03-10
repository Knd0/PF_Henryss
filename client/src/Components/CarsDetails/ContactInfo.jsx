export function ContactInfo (props) {
    const  { 
      carDetail
     } = props;
      return (
          <>        

                <h2 className="text-3xl text-left font-bold ml-10 mt-10 ">Contact Seller</h2> 
                <div id="contactInfo" className="border rounded border-blue-600 ml-10 bg-gray-300">
                    <div class="flex items-center text-xl font-semibold">
                        <h4 className=" text-left pl-4 mr-3 font-bold">Email:</h4>     
                    </div>
                    <li className="text-left font-semibold text-lg pl-6 truncate">{carDetail[0]?.email}</li>
                    <div class="flex items-center text-xl font-semibold">
                        <h4 className="text-left pl-4 mr-3 font-bold">Phone: </h4>
                       
                    </div>
                    <li className="text-left font-semibold text-lg pl-6"> {carDetail[0]?.phone}</li>
                </div>
                       
                


         
          </>
      )
  }