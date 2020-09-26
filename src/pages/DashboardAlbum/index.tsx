import React, { useCallback, useState } from 'react';

import Drawer from '@material-ui/core/Drawer';

import HeaderBar from '../../components/Header';
import AlbumCard from '../../components/AlbumCard';

import { Container, Content } from './styles';

const DashboardAlbum: React.FC = () => {
  const [toogleDrawer, setToggleDrawer] = useState(false);

  const handleScrollScreen = useCallback(() => {
    console.log(window.scrollY);
  }, []);

  window.addEventListener('scroll', handleScrollScreen);

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
      <AlbumCard />
      <AlbumCard />
    </>
  );
};

export default DashboardAlbum;
