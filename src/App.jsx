
import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Editor from './Editor';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Editor darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

