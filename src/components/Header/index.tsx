import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import { Container, MenuButton, TextTitle } from './styles';

interface HeaderProps {
  userScroolDown: boolean;
  handleOpenDrawer: (newValue: boolean) => void;
  toogleDrawer: boolean;
}

const HeaderBar: React.FC<HeaderProps> = ({
  userScroolDown,
  handleOpenDrawer,
  toogleDrawer,
}) => {
  return (
    <Container isScrool={userScroolDown}>
      <MenuButton
        onClick={() => {
          handleOpenDrawer(!toogleDrawer);
        }}
      >
        <MenuIcon fontSize="large" style={{ color: '#fff' }} />
      </MenuButton>
      <TextTitle>PINK FLOYD DISCOGRAPHY</TextTitle>
    </Container>
  );
};

export default HeaderBar;
