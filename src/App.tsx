import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';

import Home from './pages/Home';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <AppProvider>
        <Home />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
