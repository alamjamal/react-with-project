import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
// import NavBar2 from "./Component/NavBar2";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Error from "./Error";
import BlogPost from './BlogPost'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {WOW} from 'wowjs';
// import {OwlCarousel} from 'react-owl-carousel';  

const App = () => {
  var wow = new WOW({
    live: false
});
wow.init();
  return (
    <>
    <NavBar/>
      <Switch>
            <Route exact path='/' component={Home} />  
            <Route exact path='/services' component={Services} /> 
            <Route exact path='/about' component={About} />  
            <Route exact path='/contact' component={Contact} /> 
            <Route exact path='/blogpost/:id' component={BlogPost} /> 
            
            <Route component={Error} />
      </Switch>

    </>
  );

};

export default App;
