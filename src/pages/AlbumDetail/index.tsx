import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import {} from 'react-player';

import { Album, pinkFloydAlbunsArray as AlbumArray } from '../../data/info';

// interface YouTubePlayerProps {}

interface PlayerProps extends ReactPlayer {
  getInternalPlayer(): any;
}

interface AlbumDetailProps {
  albumId: number;
}

const AlbumDetail: React.FC<AlbumDetailProps> = ({ albumId }) => {
  const [album, setAlbum] = useState({} as Album);

  const playerRef = useRef<PlayerProps>(null);

  useEffect(() => {
    const albumFromQueryParams = AlbumArray.filter(albumObject => {
      return albumObject.id === albumId;
    });

    if (albumFromQueryParams) {
      setAlbum(albumFromQueryParams[0]);
    }
  }, [albumId]);

  const showPlaylist = (): any => {
    console.log(playerRef?.current?.getInternalPlayer().getVideoData());
    return playerRef.current?.getInternalPlayer().nextVideo();
  };

  function tempoDecorrido(v: number): void {
    console.log(v);
  }

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=nHER1RmSqA8&list=PL6ogdCG3tAWjWskN7Av6hzlVa9GE15ofK"
        controls
        onDuration={tempoDecorrido}
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
    </>
  );
};

export default AlbumDetail;
