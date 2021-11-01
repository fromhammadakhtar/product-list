import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../logo.png';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';

function Navbar() {
  return (
    <AppBar style={{ background: '#fff', color: '#151515' }} position='static'>
      <CssBaseline />
      <Toolbar>
        <img src={Logo} className='logo' alt='logo' />
        <div className='navlinks'>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='/about' className='link'>
            About
          </Link>
          <Link to='/contact' className='link'>
            Contact
          </Link>
          <Link to='/faq' className='link'>
            FAQ
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
