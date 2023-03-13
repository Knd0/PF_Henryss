import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cars from "./Components/Cars/Cars";
import CarsDetails from "./Components/CarsDetails/CarsDetails";
import CarsEdit from "./Components/CarsEdit/CarsEdit";
import MyPublications from "./Components/MyPublications/MyPublications";
import MyFavorites from "./Components/MyFavorites/MyFavorites";
import AboutUs from "./Components/AboutUs/Aboutus";
import Page404 from "./Components/Page404/Page404";
import Payment from "./Components/Payment/Payment"
import CarsCreate from "./Components/CarFormPage/CarsCreate";
import UserProfile from "./Components/UserProfile/UserProfile";
import axios from "axios";

import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
axios.defaults.baseURL = 'https://pfhenryss-production.up.railway.app/'
// axios.defaults.baseURL = "http://localhost:3001/"; // Cuando vayan a probar en Local comentan la linea de arriba y descomentan esta


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/carscreate" element={<CarsCreate />} />
          <Route path="/cars/:id" element={<CarsDetails />} />
          <Route path="/carsedit/:id" element={<CarsEdit />} />
          <Route path="/mypublications" element={<MyPublications />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/myfavorites" element={<ProtectedRoute component={MyFavorites}/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
