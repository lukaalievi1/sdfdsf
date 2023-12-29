import React, { useState, useEffect } from 'react';
import './App.css';


const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>ნახე რა მაგარია</h1>
      <button onClick={toggleTheme}>Change</button>
    </div>
  );
};

export default App;