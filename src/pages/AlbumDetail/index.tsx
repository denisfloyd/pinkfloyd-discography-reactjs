import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import ReactPlayer from 'react-player/lazy';
import {} from 'react-player';

import { Album, pinkFloydAlbunsArray as AlbumArray } from '../../data/info';

import {
  Container,
  Content,
  AlbumInfo,
  AlbumCoverInfo,
  AlbumPlaylist,
  PlayerContainer,
  PlayerContent,
  YoutubePlayer,
  PlayerButtons,
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

        <PlayerContainer>
          <PlayerContent>
            <YoutubePlayer
              ref={playerRef}
              url="https://www.youtube.com/watch?v=nHER1RmSqA8&list=PL6ogdCG3tAWjWskN7Av6hzlVa9GE15ofK"
              controls
            />
          </PlayerContent>

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
        </PlayerContainer>
      </Content>
    </Container>
    // <AlbumCover />
  );
};

export default AlbumDetail;
