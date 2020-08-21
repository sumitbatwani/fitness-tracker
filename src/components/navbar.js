import React from 'react';
import { Sun, Moon, Activity } from 'react-feather';

const Navbar = (darkMode) => {
  console.log({ darkMode });

  return (
    <div className='Navbar'>
      <div className='navbar-left'></div>

      <div className='navbar-middle'>
        <Activity /> Fitness Tracker
      </div>

      <div className='navbar-right' onClick={darkMode.toggle}>
        {darkMode.value ? <Moon color='white' /> : <Sun />}
      </div>
    </div>
  );
};

export default Navbar;
