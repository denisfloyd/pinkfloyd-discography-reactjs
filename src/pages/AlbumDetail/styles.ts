import styled from 'styled-components';

import ReactPlayer from 'react-player/lazy';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AlbumInfo = styled.div`
  max-width: 350px;
`;

export const AlbumCoverInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 200px;
    height: 200px;
  }

  > span {
    margin-top: 10px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const AlbumPlaylist = styled.div`
  margin-top: 30px;

  ul {
    list-style: none;
  }

  li {
    line-height: 30px;

    display: grid;
    grid-template-columns: 25px 2fr;

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: 350px;
    }

    &:hover {
      background-color: #505050;
    }
  }
`;

export const PlayerContainer = styled.div`
  padding: 20px;
  display: flex;

  flex-direction: column;
`;

export const PlayerContent = styled.div`
  position: relative;
`;

export const YoutubePlayer = styled(ReactPlayer)``;

export const PlayerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
