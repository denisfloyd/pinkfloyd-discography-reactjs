import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import PauseCircleOutlineRounded from '@material-ui/icons/PauseCircleOutlineRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

import ReactPlayer from 'react-player/lazy';
import {} from 'react-player';

import { Slider } from '@material-ui/core';
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
  PlayerButtonPlayPause,
  PlayerButtonNavigation,
  VolumeContainer,
  PlayerButtonVolume,
  Footer,
} from './styles';

interface YouTubePlayerProps {
  nextVideo(): void;
  previousVideo(): void;
}

interface PlayerProps extends ReactPlayer {
  getInternalPlayer(): YouTubePlayerProps;
}

interface AlbumDetailProps {
  albumId: string;
}

const AlbumDetail: React.FC = () => {
  const {
    params: { albumId },
  } = useRouteMatch<AlbumDetailProps>();

  const [volumePlayer, setVolumePlayer] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const nextSong = useCallback(() => {
    return playerRef.current?.getInternalPlayer().nextVideo();
  }, []);

  const previousSong = useCallback(() => {
    return playerRef.current?.getInternalPlayer().previousVideo();
  }, []);

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
                  <li key={music}>
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
          playing={isPlaying}
          volume={volumePlayer}
          controls
          // config={{
          //   youtube: {
          //     playerVars: { autoplay: 1 },
          //   },
          // }}
        />
      </Content>

      <Footer>
        <PlayerButtons>
          <PlayerButtonNavigation onClick={previousSong}>
            <NavigateBeforeRoundedIcon />
          </PlayerButtonNavigation>

          <PlayerButtonPlayPause
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            {isPlaying ? (
              <PauseCircleOutlineRounded />
            ) : (
              <PlayCircleOutlineRoundedIcon />
            )}
          </PlayerButtonPlayPause>

          <PlayerButtonNavigation onClick={nextSong}>
            <NavigateNextRoundedIcon />
          </PlayerButtonNavigation>
        </PlayerButtons>

        <VolumeContainer>
          <PlayerButtonVolume
            onClick={() => {
              setVolumePlayer(0);
            }}
          >
            <VolumeDown />
          </PlayerButtonVolume>
          <Slider
            step={0.001}
            max={1}
            min={0}
            defaultValue={0.5}
            value={volumePlayer}
            onChange={(event: any, newValue: number | number[]) => {
              setVolumePlayer(newValue as number);
            }}
            aria-labelledby="continuous-slider"
          />

          <PlayerButtonVolume
            onClick={() => {
              setVolumePlayer(1);
            }}
          >
            <VolumeUp />
          </PlayerButtonVolume>
        </VolumeContainer>
      </Footer>
    </Container>
  );
};

export default AlbumDetail;
