export function Description (props) {
    const  { 
      carDetail      
     } = props;
      return (
          <>         

                    <h2 className="font-bold text-3xl  mb-2 text-left mt-10 ">Description:</h2>
                    <div className="col-span-2 flex-col border rounded border-blue-600">
                        
                        <p className="text-justify  m-5">{carDetail[0]?.description}</p>
                    </div>
                       
                


         
          </>
      )
  }