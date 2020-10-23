import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
`;

export const AlbumInfo = styled.div``;

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
  li {
    line-height: 24px;
  }
`;
