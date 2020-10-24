import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

import ReactPlayer from 'react-player/lazy';
import {} from 'react-player';

import { Album, pinkFloydAlbunsArray as AlbumArray } from '../../data/info';

import {
  Container,
  ButtonBack,
  Content,
  AlbumInfo,
  AlbumCoverInfo,
  AlbumPlaylist,
  YoutubePlayer,
  PlayerButtons,
  Footer,
} from './styles';

// interface YouTubePlayerProps {}

interface PlayerProps extends ReactPlayer {
  getInternalPlayer(): any;
}

interface AlbumDetailProps {
  albumId: string;
}

const AlbumDetail: React.FC = () => {
  const {
    params: { albumId },
  } = useRouteMatch<AlbumDetailProps>();

  const history = useHistory();

  const [album, setAlbum] = useState({} as Album);

  const playerRef = useRef<PlayerProps>(null);

  useEffect(() => {
    const albumFromQueryParams = AlbumArray.filter(albumObject => {
      return albumObject.id === parseInt(albumId);
    });

    if (albumFromQueryParams) {
      setAlbum(albumFromQueryParams[0]);
    }
  }, [albumId]);

  const showPlaylist = (): any => {
    // console.log(playerRef?.current?.getInternalPlayer().getVideoData());
    return playerRef.current?.getInternalPlayer().nextVideo();
  };

  return (
    <Container>
      <ButtonBack
        variant="contained"
        size="medium"
        startIcon={<KeyboardBackspaceRoundedIcon />}
        onClick={() => {
          history.push('');
        }}
      >
        Voltar
      </ButtonBack>

      <Content>
        <AlbumInfo>
          <AlbumCoverInfo>
            <img src={album.image} alt={album.name} />
            <span>{album.name}</span>
          </AlbumCoverInfo>

          <AlbumPlaylist>
            {album.playlist && (
              <ul>
                {album.playlist.map((music, index) => (
                  <li>
                    <span>{index + 1}</span>
                    <span>{music}</span>
                  </li>
                ))}
              </ul>
            )}
          </AlbumPlaylist>
        </AlbumInfo>

        <YoutubePlayer
          ref={playerRef}
          width="0%"
          height="0%"
          url="https://www.youtube.com/watch?v=nHER1RmSqA8&list=PL6ogdCG3tAWjWskN7Av6hzlVa9GE15ofK"
          controls
        />
      </Content>

      <Footer>
        <PlayerButtons>
          <button type="button" onClick={showPlaylist}>
            previous
          </button>

          <button type="button" onClick={showPlaylist}>
            pause
          </button>

          <button type="button" onClick={showPlaylist}>
            next
          </button>
        </PlayerButtons>
      </Footer>
    </Container>
    // <AlbumCover />
  );
};

export default AlbumDetail;
