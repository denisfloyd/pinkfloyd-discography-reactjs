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

import { Slider } from '@material-ui/core';
import { ReactComponent as PlayingMusicSvg } from '../../assets/playing-music.svg';
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
  // player playlist options
  nextVideo(): void;
  previousVideo(): void;
  playVideoAt(index: number): void;
  // playlistInfo
  getPlaylist(): Array<any>;
  getPlaylistIndex(): number;
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
  const [
    musicIndexPlayingInPLaylist,
    setMusicIndexPlayingInPLaylist,
  ] = useState(0);

  const history = useHistory();

  const [album, setAlbum] = useState({} as Album);

  const playerRef = useRef<PlayerProps>(null);

  // TESTE

  useEffect(() => {
    const albumFromQueryParams = AlbumArray.filter(albumObject => {
      return albumObject.id === parseInt(albumId);
    });

    if (albumFromQueryParams) {
      setAlbum(albumFromQueryParams[0]);
    }
  }, [albumId]);

  const nextSong = useCallback(() => {
    setMusicIndexPlayingInPLaylist(oldState => {
      return oldState + 1;
    });
    return playerRef.current?.getInternalPlayer().nextVideo();
  }, []);

  const previousSong = useCallback(() => {
    setMusicIndexPlayingInPLaylist(oldState => {
      if (oldState > 0) {
        return oldState - 1;
      }
      return oldState;
    });
    return playerRef.current?.getInternalPlayer().previousVideo();
  }, []);

  const handleSelectMusicInPlaylist = (index: number): void => {
    setMusicIndexPlayingInPLaylist(index);
    return playerRef.current?.getInternalPlayer().playVideoAt(index);
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
                  <li key={music}>
                    {isPlaying && musicIndexPlayingInPLaylist === index ? (
                      <PlayingMusicSvg className="music-playing-svg" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                    <span>{music}</span>
                    <PlayCircleOutlineRoundedIcon
                      onClick={() => {
                        handleSelectMusicInPlaylist(index);
                      }}
                    />
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
