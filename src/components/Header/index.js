import React, { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';

export default function Header() {
  const { currentThemeValue: theme, onToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={onToggleTheme} type="button">
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
