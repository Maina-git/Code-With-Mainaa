"use client"
import React from 'react';
import Navbar from './Navbar';
import Mobile from './Mobile';
import { useState } from 'react';

const ResponsiveNav = () => {

    const [openNav, setOpenNav] = useState(false);

    const showNav = ()=> setOpenNav(!openNav);

  return (
    <div>
      <Navbar showNav={showNav}/>
      <Mobile showNav={showNav} openNav={openNav}/>
    </div>
  );
}

export default ResponsiveNav;
