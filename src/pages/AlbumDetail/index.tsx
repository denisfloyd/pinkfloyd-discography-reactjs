import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useRouteMatch } from 'react-router-dom';

import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import PauseCircleOutlineRoundedIcon from '@material-ui/icons/PauseCircleOutlineRounded';
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

import ReactPlayer from 'react-player/lazy';

import { Slider } from '@material-ui/core';
import { ReactComponent as PlayingMusicSvg } from '../../assets/playing-music.svg';
import { ReactComponent as LoadingIconSvg } from '../../assets/loading-icon.svg';
import { Album, pinkFloydAlbunsArray as AlbumArray } from '../../data/info';

import { format } from '../../utils/formatSecondsInMinutes';

import {
  Container,
  Content,
  AlbumInfo,
  AlbumCoverInfo,
  AlbumPlaylist,
  AlbumPlaylistRow,
  YoutubePlayer,
  Footer,
  MusicPlayingInfo,
  MusicPlayingInfoText,
  PlayerButtons,
  PlayerButtonPlayPause,
  PlayerButtonNavigation,
  PlayerSeekBarContainer,
  TimeText,
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

  getDuration(): number;
}

interface PlayerProps extends ReactPlayer {
  getInternalPlayer(): YouTubePlayerProps;
}

interface AlbumDetailProps {
  albumId: string;
}

interface Progress {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const AlbumDetail: React.FC = () => {
  const {
    params: { albumId },
  } = useRouteMatch<AlbumDetailProps>();

  const [isLoadingMusic, setIsLoadingMusic] = useState(false);
  const [volumePlayer, setVolumePlayer] = useState(0.5);
  const [startPlaying, setStartPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [
    musicIndexPlayingInPLaylist,
    setMusicIndexPlayingInPLaylist,
  ] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [progress, setProgress] = useState<Progress>({
    loaded: 0,
    loadedSeconds: 0,
    played: 0,
    playedSeconds: 0,
  });
  const [duration, setDuration] = useState(0);

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

  const handleErrorPlayer = useCallback(() => {
    //
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
    setIsLoadingMusic(true);
    setMusicIndexPlayingInPLaylist(
      playerRef.current?.getInternalPlayer().getPlaylistIndex() as number,
    );
  }, []);

  const handleVideoBufferEnd = useCallback(() => {
    setIsLoadingMusic(false);
    setDuration(
      playerRef.current
        ? playerRef.current.getInternalPlayer().getDuration()
        : 0,
    );
  }, []);

  const handleOnMouseDownSeekBar = useCallback(() => {
    setIsSeeking(true);
  }, []);

  const handleOnMouseUpSeekBar = useCallback((newValue: number) => {
    setIsSeeking(false);
    return playerRef.current?.seekTo(newValue);
  }, []);

  const handleProgress = useCallback(
    (newProgress: Progress) => {
      if (!isSeeking) {
        setProgress(newProgress);
      }
    },
    [isSeeking],
  );

  const musicTimeElapse = useMemo(() => {
    return format(duration * progress.played);
  }, [duration, progress]);

  const musicDuration = useMemo(() => {
    return format(duration);
  }, [duration]);

  return (
    <Container>
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
                    <span>{index + 1}</span>
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
          onBufferEnd={handleVideoBufferEnd}
          onError={handleErrorPlayer}
          onStart={handleStartPlayer}
          onPlay={handlePlayPlayer}
          onPause={handlePausePlayer}
          onProgress={handleProgress}
          loop
        />
      </Content>

      <Footer>
        <MusicPlayingInfo>
          {isLoadingMusic && <LoadingIconSvg className="loading-svg" />}
          <MusicPlayingInfoText isPlaying={startPlaying}>
            {isPlaying || isLoadingMusic ? (
              <PlayingMusicSvg className="music-playing-svg" />
            ) : (
              <PauseOutlinedIcon />
            )}
            <span>
              {album.playlist && album.playlist[musicIndexPlayingInPLaylist]}
            </span>
          </MusicPlayingInfoText>
        </MusicPlayingInfo>

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
              <PauseCircleOutlineRoundedIcon />
            ) : (
              <PlayCircleOutlineRoundedIcon />
            )}
          </PlayerButtonPlayPause>

          <PlayerButtonNavigation onClick={nextSong}>
            <NavigateNextRoundedIcon />
          </PlayerButtonNavigation>
        </PlayerButtons>

        <PlayerSeekBarContainer>
          <TimeText>{musicTimeElapse}</TimeText>
          <Slider
            max={0.999999}
            min={0}
            step={0.000001}
            value={progress.played}
            // valueLabelDisplay="auto"
            // valueLabelFormat={(value: number) => `${format(value)}`}
            onChange={(event: object, newValue: number | number[]) => {
              setProgress({ ...progress, played: newValue as number });
            }}
            aria-labelledby="continuous-slider"
            onMouseDown={handleOnMouseDownSeekBar}
            onChangeCommitted={(event: object, value: number | number[]) => {
              handleOnMouseUpSeekBar(value as number);
            }}
          />
          <TimeText>{musicDuration}</TimeText>
        </PlayerSeekBarContainer>

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
