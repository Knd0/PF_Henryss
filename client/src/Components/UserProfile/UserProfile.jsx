import React from "react";
import Navbar from "../Navbar/Navbar"
import Footer from"../Footer/Footer"
import image from "../Img/user.jpg"
import styles from "../UserProfile/UserProfile.module.css"

const UserProfile = ()=>{

    return(
       <>
         <Navbar/>
         <div>

         <div className={styles.userContainerFlex}>
           <div>
               <img  width={400} height={400} src={image}alt="" />
           </div>
            <div>
               <h5>User name: <span>User</span></h5>
               <h5>Name: <span>Name</span></h5>
               <h5>Email: <span>janckjd@hotmail.com</span></h5>
            </div>
            <div>
                  <button>my publications</button>
                  <button>my favoites</button>
           </div>
         </div>
        {/*    <div  className={styles.flexButtonsContainer}>
                  <button>my publications</button>
                  <button>my favoites</button>
           </div> */}

         </div>
        <Footer/>
       </>
    )
}

export default UserProfile