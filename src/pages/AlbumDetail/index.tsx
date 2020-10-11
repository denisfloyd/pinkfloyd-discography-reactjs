import React, { useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import {} from 'react-player';

// interface YouTubePlayerProps {}

interface PlayerProps extends ReactPlayer {
  getInternalPlayer(): any;
}

const AlbumDetail: React.FC = () => {
  const playerRef = useRef<PlayerProps>(null);

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
