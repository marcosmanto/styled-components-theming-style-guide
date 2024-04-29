import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
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

  return (
    <ThemeProvider
      theme={{
        currentTheme,
        currentThemeValue,
        onToggleTheme: handleToggleTheme,
      }}
    >
      <GlobalStyle />
      <button
        style={{
          marginBottom: '1ch',
          borderRadius: '1ch',
          padding: '.5ch 1ch',
          cursor: 'pointer',
        }}
        onClick={handleToggleTheme}
      >
        Toggle
      </button>
      {theme === 'dark' && <Layout />}
    </ThemeProvider>
  );
}

export default App;
