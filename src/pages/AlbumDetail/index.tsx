import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';

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
            <span>Pink Floyd</span>
          </AlbumCoverInfo>

          <AlbumPlaylist>
            {album.playlist && (
              <ul>
                {album.playlist.map((music, index) => (
                  <li>
                    <span>{index + 1}</span>
                    <span>{music}</span>
                    <PlayCircleOutlineRoundedIcon />
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
          url={album.youtubeUrl}
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
  );
};

export default AlbumDetail;
