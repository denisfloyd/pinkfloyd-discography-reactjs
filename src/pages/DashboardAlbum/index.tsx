import React, { useCallback, useState } from 'react';

import Drawer from '@material-ui/core/Drawer';

import HeaderBar from '../../components/Header';
import AlbumCard from '../../components/AlbumCard';

import { Album, pinkFloydAlbunsArray } from '../../data/info';

import { Container, Content, AlbumsView } from './styles';

const DashboardAlbum: React.FC = () => {
  const [toogleDrawer, setToggleDrawer] = useState(false);

  const [userScrollDown, setUserScrollDown] = useState(false);

  const handleScrollScreen = useCallback(() => {
    if (window.scrollY > 60) {
      return setUserScrollDown(true);
    }
    return setUserScrollDown(false);
  }, []);

  window.addEventListener('scroll', handleScrollScreen);

  return (
    <>
      <HeaderBar userScroolDown={userScrollDown} />
      <Drawer anchor="left" open={toogleDrawer}>
        <h1>TESTE</h1>
      </Drawer>

      <Container>
        <Content>
          <input type="text" placeholder="Album..." />
        </Content>
      </Container>

      <AlbumsView>
        {pinkFloydAlbunsArray.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </AlbumsView>
    </>
  );
};

export default DashboardAlbum;
