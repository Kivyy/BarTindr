import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import configKey from '../services/keys';

class Navbar extends Component{
  render(){
    return(
      <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </div>
    )
  }
}

export default Navbar
