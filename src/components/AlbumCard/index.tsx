import React from 'react';
import { Link } from 'react-router-dom';

import { Album } from '../../data/info';

import { Container, Content, AlbumInfo } from './styles';

interface AlbumCardProps {
  // click?: () => void;
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <Container>
      <Link to={`album/${album.id}`}>
        <Content cover={album.image} />
        <AlbumInfo className="overview">
          <h3>{album.name}</h3>
          {album.year}
        </AlbumInfo>
      </Link>
    </Container>
  );
};

export default AlbumCard;
