import React, { useState, useEffect } from 'react'
import fz from './assets/fz.svg'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  const toggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]); 

  return (
    <>
      {/* <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <header className="app-header">
          <button onClick={toggleMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
      </div>*/}
      <div>
        <img src={fz} className="logo" alt="logo" />
      </div>
      <h1>Futbalové zákulisie</h1>
     {/* <a href="https://www.instagram.com/futbalovezakulisie/" target="_blank">
        <div className="button-social"> 
          <span>Instagram </span>
        </div>
      </a>*/}
        <div className="button-social">
          <a href="https://www.instagram.com/futbalovezakulisie/" target="_blank">Instagram</a>
        </div>
        <div className="button-social">
          <a href="https://www.facebook.com/futbalovezakulisie/" target="_blank">Facebook</a>
        </div>
        <div className="button-social">
          <a href="https://x.com/FutZakulisie" target="_blank">X</a>
        </div>
        <div className="button-social">
          <a href="https://www.youtube.com/@futbalovezakulisie" target="_blank">YouTube</a>
        </div>
      
    </>
  )
}

export default App
