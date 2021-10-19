import React, {useContext} from "react";

import { ThemeContext } from '../context/ThemeContext';

function Button({ onClick, children }) {

  const {theme} = useContext(ThemeContext);
  console.log(theme);

  return (
    <button 
      onClick={ onClick }
      style={{ 
        color: theme === 'dark' ? '#fafafa' : '#222',
        background: theme === 'dark' ? '#222' : '#fafafa',
        margin: 2,
      }}
      >
      {children} 
    </button>
  )
}

export default Button