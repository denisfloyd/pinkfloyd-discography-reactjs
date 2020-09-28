import React, { useCallback, useState } from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { colors } from '@material-ui/core';
import HeaderBar from '../../components/Header';
import AlbumCard from '../../components/AlbumCard';

import { pinkFloydAlbunsArray } from '../../data/info';

import {
  ContainerDrawer,
  DrawerHeader,
  DrawerBackButton,
  DrawerAlbumItem,
  Container,
  Content,
  AlbumsView,
} from './styles';

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
      <HeaderBar
        userScroolDown={userScrollDown}
        handleOpenDrawer={setToggleDrawer}
      />
      <ContainerDrawer anchor="left" open={toogleDrawer} variant="persistent">
        <div style={{ height: 100 }}>
          <DrawerHeader>
            <DrawerBackButton>
              <ArrowBackIosIcon />
            </DrawerBackButton>
          </DrawerHeader>
        </div>

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
