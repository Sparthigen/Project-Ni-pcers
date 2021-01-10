import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Niépcers  from "./Niépcers";
import Menu from "./Menu";
import React from 'react';
import Home from './Home';
import HallOfFame from './HallOfFame';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ContactUs from './ContactUs';


function App() {
  return (
    <BrowserRouter>
    <Menu />
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path="/Niépcers" component={Niépcers} />
        <Route path="/HallOfFame" component={HallOfFame}/>
        <Route path="/SignIn" component={SignIn}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/ContactUs" component={ContactUs}/>
      </div>
      </BrowserRouter>
  );
}

export default App;
