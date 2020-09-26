import React from 'react';

import { Album } from '../../info';

import { Container } from './styles';

interface AlbumCardProps {
  // click?: () => void;
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return <Container cover={album.image} />;
};

export default AlbumCard;
