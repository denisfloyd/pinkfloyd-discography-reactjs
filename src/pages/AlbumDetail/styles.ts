import styled from 'styled-components';

import ReactPlayer from 'react-player/lazy';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
  width: 100%;
`;

export const ButtonBack = styled(Button)`
  &.MuiButton-contained {
    margin: 20px;
    color: ${props => props.theme.colors.text};
    background-color: transparent;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${props => props.theme.colors.primary};
    }
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AlbumInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AlbumCoverInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 20px;

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

export const YoutubePlayer = styled(ReactPlayer)``;

export const PlayerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
`;
