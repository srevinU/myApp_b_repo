
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './component_js/Navbar';
import Home from './component_js/Home';
import Contact from './component_js/Contact';
import Management from './component_js/Management';
import Profile from './component_js/Profile';
import Orders from './component_js/Orders';
import ManagementProducts from './component_js/ManagementProducts'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/management" component={Management} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/management/products" component={ManagementProducts} />
      </Router>
    </div>
  );
}

export default App;
