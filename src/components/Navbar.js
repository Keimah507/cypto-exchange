import React, { Component } from 'react';
import '../App.css';
import NavbarItem from './NavbarItem';
import { ReactComponent as Logo } from '../assets/logo.svg';
import SubmitButton from './SubmitButton';
class Navbar extends Component {
  render () {
    return (
      <div className='Navbar'>
        <div className='Left NavbarPart'>
          <Logo className='Logo' />
          <NavbarItem />

        </div>
        <div className='NavbarPart Right'>
          <NavbarItem />
          <NavbarItem />
          <NavbarItem />
          <NavbarItem />
          <SubmitButton text='Login' />
          <SubmitButton text='Register' />
        </div>
      </div>
    );
  }
}

export default Navbar;
