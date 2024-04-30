import React from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';

export default class Header extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { currentThemeValue: theme, onToggleTheme } = this.context;
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button onClick={onToggleTheme} type="button">
          {theme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    );
  }
}

/*export default function Header() {
  const { currentThemeValue: theme, onToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={onToggleTheme} type="button">
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}*/
