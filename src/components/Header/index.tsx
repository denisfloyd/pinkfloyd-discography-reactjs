import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';

import { Container, MenuButton, TextTitle } from './styles';

interface HeaderProps {
  userScroolDown: boolean;
}

const HeaderBar: React.FC<HeaderProps> = ({ userScroolDown }) => {
  return (
    <Container isScrool={userScroolDown}>
      <MenuButton>
        <MenuIcon fontSize="large" style={{ color: '#fff' }} />
      </MenuButton>
      <TextTitle>PINK FLOYD DISCOGRAPHY</TextTitle>
    </Container>
  );
};

export default HeaderBar;
