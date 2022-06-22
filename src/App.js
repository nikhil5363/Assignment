import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import Convertor from "./CurrencyConvertor";
import Details from "./CurrencyConvertor/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState,useEffect } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login"><Login setLoginUser={setLoginUser}/> </Route>
          <Route path="/register"><Register /></Route>
          <Route exact path="/convertor" component={Convertor} />
        <Route exact path="/details" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
