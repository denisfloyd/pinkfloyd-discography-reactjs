import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import ReactPlayer from 'react-player/lazy';
import {} from 'react-player';

import { Album, pinkFloydAlbunsArray as AlbumArray } from '../../data/info';

import { Container } from './styles';

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
      return albumObject.id === parseInt(albumId, 2);
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
      {album.playlist && (
        <ul>
          {album.playlist.map(music => (
            <li>{music}</li>
          ))}
        </ul>
      )}

      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=nHER1RmSqA8&list=PL6ogdCG3tAWjWskN7Av6hzlVa9GE15ofK"
        controls
        // config={{
        //   youtube: {
        //     embedOptions: {

        //     },
        //   },
        // }}
      />

      <button type="button" onClick={showPlaylist}>
        next
      </button>
    </Container>
    // <AlbumCover />
  );
};

export default AlbumDetail;
