import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';

import { Container, MenuButton, TextTitle } from './styles';

const HeaderBar: React.FC = () => {
  return (
    <Container>
      <MenuButton>
        <MenuIcon fontSize="large" style={{ color: '#fff' }} />
      </MenuButton>
      <TextTitle>PINK FLOYD DISCOGRAPHY</TextTitle>
    </Container>
  );
};

export default HeaderBar;
