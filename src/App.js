import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  // useRef doesn't trigger new render, just keep the values trough life of component
  const firstRender = useRef(true);
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  const currentThemeValue = useMemo(() => {
    return theme;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem('theme')));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  // this useEffect not run at the mount (firt render), but, after that, it runs normally
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.log({ theme });
  }, [theme]);

  return (
    <ThemeProvider
      theme={{
        currentTheme,
        currentThemeValue,
        onToggleTheme: handleToggleTheme,
      }}
    >
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
