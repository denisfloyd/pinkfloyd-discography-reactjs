import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';

import { pinkFloydAlbunsArray } from '../../data/info';

import {
  Container,
  Header,
  HeaderContainer,
  IconButtonDrawer,
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
  const history = useHistory();

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
          <IconButtonDrawer
            onClick={() => {
              history.push('');
              setToggleDrawer(!toogleDrawer);
            }}
          >
            <HomeIcon />
          </IconButtonDrawer>

          <IconButtonDrawer
            onClick={() => {
              setToggleDrawer(!toogleDrawer);
            }}
          >
            <ArrowBackIosIcon />
          </IconButtonDrawer>
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
