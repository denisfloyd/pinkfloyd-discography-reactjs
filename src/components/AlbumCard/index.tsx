import React from 'react';

import { Album } from '../../info';

import { Container, Content, AlbumInfo } from './styles';

interface AlbumCardProps {
  // click?: () => void;
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <Container>
      <Content cover={album.image} />
      <AlbumInfo className="overview">
        <h3>{album.name}</h3>
        {album.year}
      </AlbumInfo>
    </Container>
  );
};

export default AlbumCard;
