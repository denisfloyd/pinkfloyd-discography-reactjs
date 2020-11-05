import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import PauseCircleOutlineRoundedIcon from '@material-ui/icons/PauseCircleOutlineRounded';
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
  AlbumPlaylistRow,
  YoutubePlayer,
  Footer,
  MusicPlayingInfo,
  PlayerButtons,
  PlayerButtonPlayPause,
  PlayerButtonNavigation,
  VolumeContainer,
  PlayerButtonVolume,
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
  const [startPlaying, setStartPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [
    musicIndexPlayingInPLaylist,
    setMusicIndexPlayingInPLaylist,
  ] = useState(0);

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

  const handleSelectMusicInPlaylist = useCallback((index: number): void => {
    return playerRef.current?.getInternalPlayer().playVideoAt(index);
  }, []);

  const handleStartPlayer = useCallback(() => {
    setStartPlaying(true);
  }, []);

  const handlePlayPlayer = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePausePlayer = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleVideoBuffer = useCallback(() => {
    return setMusicIndexPlayingInPLaylist(
      playerRef.current?.getInternalPlayer().getPlaylistIndex() as number,
    );
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
                  <AlbumPlaylistRow
                    key={music}
                    isPlaying={
                      startPlaying && musicIndexPlayingInPLaylist === index
                    }
                  >
                    {startPlaying && musicIndexPlayingInPLaylist === index ? (
                      <PlayingMusicSvg className="music-playing-svg" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                    <span>{music}</span>
                    {musicIndexPlayingInPLaylist === index ? (
                      isPlaying ? (
                        <PauseCircleOutlineRoundedIcon
                          onClick={() => {
                            setIsPlaying(false);
                          }}
                        />
                      ) : (
                        <PlayCircleOutlineRoundedIcon
                          onClick={() => {
                            setIsPlaying(true);
                          }}
                        />
                      )
                    ) : (
                      <PlayCircleOutlineRoundedIcon
                        onClick={() => {
                          handleSelectMusicInPlaylist(index);
                        }}
                      />
                    )}
                  </AlbumPlaylistRow>
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
          onBuffer={handleVideoBuffer}
          onStart={handleStartPlayer}
          onPlay={handlePlayPlayer}
          onPause={handlePausePlayer}
          loop
        />
      </Content>

      <Footer>
        <MusicPlayingInfo isPlaying={startPlaying}>
          <PlayingMusicSvg className="music-playing-svg" />
          <span>
            {album.playlist && album.playlist[musicIndexPlayingInPLaylist]}
          </span>
        </MusicPlayingInfo>

        <PlayerButtons>
          <PlayerButtonNavigation onClick={previousSong}>
            <NavigateBeforeRoundedIcon />
          </PlayerButtonNavigation>

          <PlayerButtonPlayPause
            onClick={() => {
              // setLoadingMusic(true);
              setIsPlaying(!isPlaying);
            }}
          >
            {isPlaying ? (
              <PauseCircleOutlineRoundedIcon />
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
