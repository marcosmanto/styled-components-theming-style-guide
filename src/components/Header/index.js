import React from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';

export default class Header extends React.Component {
  render() {
    //const { currentThemeValue: theme, onToggleTheme } = this.context;

    return (
      <ThemeContext.Consumer>
        {(state) => {
          //console.log(state);
          return (
            <Container>
              <h1>JStack's Blog</h1>
              <button onClick={state.onToggleTheme} type="button">
                {state.currentThemeValue === 'dark' ? '🌞' : '🌚'}
              </button>
            </Container>
          );
        }}
      </ThemeContext.Consumer>
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
