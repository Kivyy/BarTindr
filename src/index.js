import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// React Components
import App from './components/App'
import Navbar from './components/Navbar';
import Test from './components/Test';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" component={App}/>
        <Route path='/test' component={Test}/>
      </Switch>
    </div>
  </BrowserRouter>
,document.getElementById('root')
);
