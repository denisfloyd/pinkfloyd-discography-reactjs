import React, { ReactElement, useCallback, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Routes from './routes';

import GlobalStyle from './styles/global';

import HeaderBar from './components/Header';
import DrawerNav from './components/DrawerNav';

function App(): React.ReactElement {
  const [toogleDrawer, setToggleDrawer] = useState(false);
  const [userScrollDown, setUserScrollDown] = useState(false);

  const handleScrollScreen = useCallback(() => {
    if (window.scrollY > 50) {
      return setUserScrollDown(true);
    }
    return setUserScrollDown(false);
  }, []);

  window.addEventListener('scroll', handleScrollScreen);

  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <HeaderBar
          userScroolDown={userScrollDown}
          handleOpenDrawer={setToggleDrawer}
          toogleDrawer={toogleDrawer}
        />
        <DrawerNav
          setToggleDrawer={setToggleDrawer}
          toogleDrawer={toogleDrawer}
        />
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
