import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"


//Todas las rutas que voy a utilizar..
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= "/home" component = {Home}/>
        <Route path= "/cars" component= {Cars}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
