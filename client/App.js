import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Components/Home/Home"
import Cars from "./Components/Cars/Cars"
import CarsDetails from "./Components/CarsDetails/CarsDetails"
import CarsCreate from "./Components/CarsCreate/CarsCreate"
import CarsEdit from "./Components/CarsEdit/CarsEdit"
import MyPublications from "./Components/MyPublications/MyPublications"
import MyFavorites from "./Components/MyFavorites/MyFavorites"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Payment from "./Components/Payment/Payment"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= "/home" component = {Home}/>
        <Route path= "/cars" component= {Cars}/>
        <Route path= "/cars/:id" component= {CarsDetails}/>
        <Route path= "/carscreate" component= {CarsCreate}/>
        <Route path= "/carsedit" component= {CarsEdit}/>
        <Route path= "/mypublications" component= {MyPublications}/>
        <Route path= "/myfavorites" component= {MyFavorites}/>
        <Route path= "/login" component= {Login}/>
        <Route path= "/register" component= {Register}/>
        <Route path= "/payment" component= {Payment}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
