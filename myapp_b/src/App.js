
import React from "react";
import './App.css';
import Navbar from './component_js/Navnar';
import Layout from './component_js/Layout';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Layout>
          <h1>Hello, this will be my App</h1>
      </Layout>
    
    </div>
  );
}

export default App;
