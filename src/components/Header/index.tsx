import React from 'react';
import { useHistory } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import BrightnessDarkIcon from '@material-ui/icons/Brightness4';
import BrightnessLightIcon from '@material-ui/icons/BrightnessLow';
import { useTheme } from '../../hooks/theme';

import { Container, ContentTitle, MenuButton, TextTitle } from './styles';

interface HeaderProps {
  userScroolDown: boolean;
  handleOpenDrawer: (newValue: boolean) => void;
  toogleDrawer: boolean;
}

const HeaderBar: React.FC<HeaderProps> = ({
  userScroolDown,
  handleOpenDrawer,
  toogleDrawer,
  children,
}) => {
  const history = useHistory();

  const { isDarkTheme, setIsDarkTheme } = useTheme();

  return (
    <Container isScrool={userScroolDown} drawerOpen={toogleDrawer}>
      <ContentTitle drawerOpen={toogleDrawer}>
        <MenuButton
          onClick={() => {
            handleOpenDrawer(!toogleDrawer);
          }}
        >
          <MenuIcon fontSize="large" />
        </MenuButton>

        <TextTitle
          onClick={() => {
            history.push('');
          }}
        >
          PINK FLOYD DISCOGRAPHY
        </TextTitle>
      </ContentTitle>

      <MenuButton
        onClick={() => {
          setIsDarkTheme(!isDarkTheme);
        }}
      >
        {isDarkTheme ? (
          <BrightnessDarkIcon fontSize="large" />
        ) : (
          <BrightnessLightIcon fontSize="large" />
        )}
      </MenuButton>

      {children}
    </Container>
  );
};

export default HeaderBar;
