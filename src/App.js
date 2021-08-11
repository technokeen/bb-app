
import './App.css';
import React, {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
//import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/Button';
//import Card from '@material-ui/core/Card';
//import CardHeader from '@material-ui/core/CardHeader';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardContent from '@material-ui/core/CardContent';
//import Nav from 'react-bootstrap/Nav'

import Home from './components/Home/Home.js'
import Character from './components/Character/Character.js'


function App() {
  

  return (
  <BrowserRouter>
    <Switch>
     
      <Route path="/" component={Home} exact></Route>
      <Route path="/character/:characterId" component={Character}></Route>

    </Switch>
  
  </BrowserRouter>

  
      );
}

export default App;
