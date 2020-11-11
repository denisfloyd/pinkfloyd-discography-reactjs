import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import DrawerNav from '../../components/DrawerNav';
import HeaderBar from '../../components/Header';

import Routes from '../../routes';

import GlobalStyle from '../../styles/global';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

import { useTheme } from '../../hooks/theme';

function Home(): React.ReactElement {
  const [toogleDrawer, setToggleDrawer] = useState(false);
  const [userScrollDown, setUserScrollDown] = useState(false);

  const { isDarkTheme } = useTheme();

  const handleScrollScreen = useCallback(() => {
    if (window.scrollY > 50) {
      return setUserScrollDown(true);
    }
    return setUserScrollDown(false);
  }, []);

  window.addEventListener('scroll', handleScrollScreen);

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
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
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default Home;
