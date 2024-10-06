import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import React, { Component } from 'react';

import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Index from './components/Index';

class App extends Component {
  render(){
    return(
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" Component={Index}/>
        <Route exact path="/contact" Component={Contact}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
