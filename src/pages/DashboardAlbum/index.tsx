import React, { useCallback, useState } from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import HeaderBar from '../../components/Header';
import AlbumCard from '../../components/AlbumCard';

import { pinkFloydAlbunsArray } from '../../data/info';

import {
  ContainerDrawer,
  DrawerHeader,
  DrawerHeaderContainer,
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
        toogleDrawer={toogleDrawer}
      />
      <ContainerDrawer
        anchor="left"
        open={toogleDrawer}
        onClose={() => {
          setToggleDrawer(!toogleDrawer);
        }}
      >
        <DrawerHeader>
          <DrawerHeaderContainer>
            <DrawerBackButton
              onClick={() => {
                setToggleDrawer(!toogleDrawer);
              }}
            >
              <ArrowBackIosIcon style={{ color: '#fff' }} />
            </DrawerBackButton>
          </DrawerHeaderContainer>
        </DrawerHeader>

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
        {/* <Album>
          <strong>
            All Games
            <span>( 4 )</span>
          </strong>
        </h2> */}

        {pinkFloydAlbunsArray.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </AlbumsView>
    </>
  );
};

export default DashboardAlbum;
