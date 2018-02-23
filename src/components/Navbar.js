import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Navbar extends Component{



  render(){
    const auth = localStorage.getItem('test');
    if (auth) {
      return(
        <div>
          <Link to='/'>Home</Link>
          <Link to='/'>Logout</Link>
        </div>
      )
    }
    return(
      <div>
        <Link to='/'>Home</Link>
        <a href='http://localhost:3000/auth/login'> Login </a>
      </div>
    )
  }
}

export default Navbar
