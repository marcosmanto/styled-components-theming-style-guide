import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let theme = 'dark';
    try {
      theme = JSON.parse(localStorage.getItem('theme'));
    } catch (err) {
      console.error(err);
    }

    this.state = {
      theme,
    };
  }

  handleToggleTheme = () => {
    this.setState(
      ({ theme }) => ({
        theme: theme === 'dark' ? 'light' : 'dark',
      }),
      () => localStorage.setItem('theme', JSON.stringify(this.state.theme))
    );
  };

  // just run once when component is built into the app
  // same as useEffect(() = {}, []) in a functional component
  componentDidMount() {
    console.log('componentDidMount exec');
  }

  // called before a component is destroyed
  componentWillUnmount() {}

  // before render, get the next values to change in the state and triggered whenever there is a change in state or props
  // this function must return true or false. True allow the update/render and false block the update
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', {
      currentTheme: this.state,
      nextState,
      nextProps,
    });

    return true;
  }

  // after render and triggered whenever there is a change in state or props
  // same as useEffect(() = {}, [state]) in a functional component
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', {
      currentTheme: this.state,
      prevState,
      prevProps,
    });
  }

  // monitors for errors that occur within the component structure and its children
  componentDidCatch(error, info) {
    console.log('componentDidCatch', { error, info });
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider
        theme={{
          currentTheme: themes[theme] || themes.dark,
          currentThemeValue: theme,
          onToggleTheme: this.handleToggleTheme,
        }}
      >
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    );
  }
}
