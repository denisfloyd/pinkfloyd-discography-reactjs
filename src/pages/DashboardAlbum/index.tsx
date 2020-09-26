import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';

import HeaderBar from '../../components/Header';

import { Container, Content, AlbumCard } from './styles';

const DashboardAlbum: React.FC = () => {
  const [toogleDrawer, setToggleDrawer] = useState(false);

  return (
    <>
      <HeaderBar />
      <Drawer anchor="left" open={toogleDrawer}>
        <h1>TESTE</h1>
      </Drawer>

      <Container>
        <Content>
          <input type="text" placeholder="Album..." />
        </Content>
      </Container>

      <AlbumCard />
    </>
  );
};

export default DashboardAlbum;
