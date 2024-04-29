import React, { useState, useMemo } from 'react';
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
