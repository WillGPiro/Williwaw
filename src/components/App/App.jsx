import React from 'react';
import Home from '../Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import OregonSR from '../Oregon Report/OregonSR';
import WashingtonSR from '../Washington Report/WashingtonSR';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/washington-surf-report" component={WashingtonSR}/>
        <Route exact path = "/oregon-surf-report" component={OregonSR}/>
        <Route exact path = "/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}







  
