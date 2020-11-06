import React from 'react';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { pinkFloydAlbunsArray } from '../../data/info';

import {
  Container,
  Header,
  HeaderContainer,
  BackButton,
  AlbumItem,
} from './styles';

interface DrawerNavProps {
  toogleDrawer: boolean;
  setToggleDrawer(newToogleValue: boolean): void;
}

const DrawerNav: React.FC<DrawerNavProps> = ({
  toogleDrawer,
  setToggleDrawer,
}) => {
  return (
    <Container
      anchor="left"
      open={toogleDrawer}
      onClose={() => {
        setToggleDrawer(false);
      }}
    >
      <Header>
        <HeaderContainer>
          <BackButton
            onClick={() => {
              setToggleDrawer(!toogleDrawer);
            }}
          >
            <ArrowBackIosIcon />
          </BackButton>
        </HeaderContainer>
      </Header>

      <ul>
        {pinkFloydAlbunsArray.map(album => (
          <AlbumItem key={album.id}>
            <Link to={`/album/${album.id}`}>
              <img src={album.image} alt={album.name} />
              <p>{album.name}</p>
            </Link>
          </AlbumItem>
        ))}
      </ul>
    </Container>
  );
};

export default DrawerNav;
