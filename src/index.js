import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// React Components
import App from './components/App'
import Navbar from './components/Navbar';
import Test from './components/Test';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar/>
      <Route exact path="/" component={App}/>
      <Route path='/test' component={Test}/>
    </div>
  </BrowserRouter>
,document.getElementById('root')
);
