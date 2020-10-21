import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import { Container, Content, MenuButton, TextTitle } from './styles';

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
    <Container isScrool={userScroolDown} drawerOpen={toogleDrawer}>
      <MenuButton
        onClick={() => {
          handleOpenDrawer(!toogleDrawer);
        }}
      >
        <MenuIcon fontSize="large" style={{ color: '#fff' }} />
      </MenuButton>

      <Content drawerOpen={toogleDrawer}>
        <TextTitle>PINK FLOYD DISCOGRAPHY</TextTitle>
      </Content>
    </Container>
  );
};

export default HeaderBar;
