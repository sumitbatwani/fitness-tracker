import React from 'react';
import './index.scss';
import Navbar from './components/navbar';
import useDarkMode from 'use-dark-mode';

function App() {
  const darkMode = useDarkMode(false);

  return (
    <div className='App'>
      <Navbar {...darkMode} />
    </div>
  );
}

export default App;
