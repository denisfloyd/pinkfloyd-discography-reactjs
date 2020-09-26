import React, { useCallback, useState } from 'react';

import HeaderBar from '../../components/Header';
import AlbumCard from '../../components/AlbumCard';

import { Album, pinkFloydAlbunsArray } from '../../data/info';

import {
  Container,
  ContainerDrawer,
  Content,
  AlbumsView,
  DrawerAlbumItem,
} from './styles';

const DashboardAlbum: React.FC = () => {
  const [drawerWidth] = useState(300);
  const [toogleDrawer, setToggleDrawer] = useState(true);

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
      <ContainerDrawer anchor="left" open={toogleDrawer} variant="persistent">
        <ul>
          {pinkFloydAlbunsArray.map(album => (
            <DrawerAlbumItem>
              <img src={album.image} alt={album.name} />
              <p>{album.name}</p>
            </DrawerAlbumItem>
          ))}
        </ul>
      </ContainerDrawer>

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
