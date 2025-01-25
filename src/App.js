import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


export default class App extends Component {
  render() {
    return (
      <div>
        
        <NavBar/>
        <News pageSize={9} country={'us'} category={'entertainment'}/>
       
      </div>
    )
  }
}

// Error--> Cannot find module 'ajv/dist/compile/codegen'
// Solution --> npm install --save-dev ajv@^7