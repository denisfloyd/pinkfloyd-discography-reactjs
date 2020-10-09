import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import DashboardAlbum from './pages/DashboardAlbum';

import GlobalStyle from './styles/global';

function App(): any {
  return (
    <ThemeProvider theme={light}>
      <DashboardAlbum />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
