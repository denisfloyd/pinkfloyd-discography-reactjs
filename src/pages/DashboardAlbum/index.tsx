import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

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

  // Album variables
  const [albumList, setAlbumList] = useState(pinkFloydAlbunsArray);
  const [albumFilter, setAlbumFilter] = useState('');

  const [userScrollDown, setUserScrollDown] = useState(false);

  const debounce: Subject<string> = new Subject<string>();

  useEffect(() => {
    debounce
      .pipe(debounceTime(300))
      .subscribe(filter => setAlbumFilter(filter));

    return () => {
      debounce.unsubscribe();
    };
  }, [debounce]);

  useEffect(() => {
    setAlbumList(
      albumFilter === ''
        ? pinkFloydAlbunsArray
        : pinkFloydAlbunsArray.filter(album => {
            return album.name.includes(albumFilter);
          }),
    );
  }, [albumFilter]);

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
          setToggleDrawer(false);
        }}
      >
        <DrawerHeader>
          <DrawerHeaderContainer>
            <DrawerBackButton
              onClick={() => {
                setToggleDrawer(!toogleDrawer);
              }}
            >
              <ArrowBackIosIcon />
            </DrawerBackButton>
          </DrawerHeaderContainer>
        </DrawerHeader>

        <ul>
          {pinkFloydAlbunsArray.map(album => (
            <DrawerAlbumItem key={album.id}>
              <Link to={`/album/${album.id}`}>
                <img src={album.image} alt={album.name} />
                <p>{album.name}</p>
              </Link>
            </DrawerAlbumItem>
          ))}
        </ul>
      </ContainerDrawer>

      <Container>
        <Content />
      </Container>

      <AlbumsView>
        {/* <Album>
          <strong>
            All Games
            <span>( 4 )</span>
          </strong>
        </h2> */}

        {albumList.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </AlbumsView>
    </>
  );
};

export default DashboardAlbum;
