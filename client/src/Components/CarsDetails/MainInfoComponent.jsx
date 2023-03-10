export function MainInfoComponent (props) {
    const  { 
      carDetail,
      handleFavorite,
      isFav     
     } = props;
      return (
          <>         
                <div className="border rounded border-blue-600 ml-10 bg-gray-300">
                    <h4 className="text-3xl font-extrabold text-center">
                        {carDetail[0]?.brand} 
                        {" "} 
                        {carDetail[0]?.model} 
                        
                        </h4>
                        <div>
                            <h4 className="text-5xl text-center mt-5">${carDetail[0]?.price} </h4>
                            
                        </div>
                        <h4 className="text-2xl font-bold text-left pl-10 mt-5">Add to Favorites: {isFav ? <button onClick={handleFavorite}>❤️</button> : <button onClick={handleFavorite}>🤍</button>}</h4>
                        <h4 className="text-2xl font-bold text-left pl-10 mt-5">Selling in {carDetail[0]?.place} </h4>
                        
                </div>
                       
                


         
          </>
      )
  }