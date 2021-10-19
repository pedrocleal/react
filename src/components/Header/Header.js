import React, { useContext} from 'react';
import Button from '../Button';

import { Title, Container } from './styles';

import { ThemeContext } from '../../context/ThemeContext';

function Header({children}) {
  const { onToggleTheme } = useContext(ThemeContext);
  
  return (
    <>
      <Title>JSTACK BLOG</Title>
      <h3>Posts da semana</h3>
      <Container>
        <Button onClick={onToggleTheme}>Mudar tema</Button>
        {children}
      </Container>
    </>
  )
}

export default Header