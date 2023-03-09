import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="container">
        <div 
            className="spinner">
        </div>
             <p>Loading ...</p>

  </div>
  )
}

//  const loading = useSelector((state) => state.loading);

//  if (loading === true) {
//    return (
//     </div>
//   </div>
//   </div>
//   </div>
// } else {
//     return <Loading />;