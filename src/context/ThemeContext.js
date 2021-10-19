import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

function ThemeProvider({children}) {

  const [ theme, setTheme ] = useState('dark');

  function handleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'dark' 
      ? 'light'
      : 'dark'
    ));
  }
  
  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider