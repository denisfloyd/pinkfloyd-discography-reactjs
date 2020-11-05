import styled, { css } from 'styled-components';

import ReactPlayer from 'react-player/lazy';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

interface AlbumPlaylistRowProps {
  isPlaying?: boolean;
}

interface MusicPlayingInfoProps {
  isPlaying?: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const ButtonBack = styled(Button)`
  position: fixed;

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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AlbumInfo = styled.div`
  width: 1200px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
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
    font-size: 16px;
    text-transform: uppercase;

    &:first-of-type {
      margin-top: 10px;
      text-transform: capitalize;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export const AlbumPlaylist = styled.div`
  flex: 1;
  min-width: 200px;
  overflow-y: auto;

  ul {
    list-style: none;
  }
`;

export const AlbumPlaylistRow = styled.li<AlbumPlaylistRowProps>`
  padding: 5px;
  line-height: 26px;

  display: grid;
  grid-template-columns: 25px 3fr auto;

  transition: background-color 0.2s ease-in-out;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    opacity: 0;
    cursor: pointer;
  }

  &:hover {
    background-color: ${props => props.theme.colors.primary};

    svg {
      opacity: 1;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  ${props =>
    props.isPlaying &&
    css`
      background-color: ${propsRoot => propsRoot.theme.colors.primary};
    `};
`;

export const YoutubePlayer = styled(ReactPlayer)``;

export const Footer = styled.footer`
  background-color: ${props => props.theme.colors.primary};

  height: 100px;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-around;

  /* > div {
    &:nth-child(1),
    :nth-child(3) {
      margin: 0 20px;
    }
  } */
`;

export const MusicPlayingInfo = styled.div`
  display: flex;
  align-items: center;
  /* width: 250px; */
  margin-right: 130px;
`;

export const MusicPlayingInfoText = styled.div<MusicPlayingInfoProps>`
  display: flex;
  opacity: 0;
  width: 250px;
  /* width: 250px;
  margin-right: 130px; */

  > span {
    margin-left: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > svg {
    width: 16px;
    height: 22px;
  }

  ${props =>
    props.isPlaying &&
    css`
      opacity: 1;
    `}
`;

export const PlayerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  right: 0;
`;

export const PlayerButtonPlayPause = styled(IconButton)`
  &.MuiIconButton-root {
    color: ${props => props.theme.colors.text};
  }

  .MuiSvgIcon-root {
    font-size: 65px;
  }
`;

export const PlayerButtonNavigation = styled(IconButton)`
  &.MuiIconButton-root {
    color: ${props => props.theme.colors.text};
  }

  .MuiSvgIcon-root {
    font-size: 50px;
  }
`;

export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 200px;
  /* margin-left: 500px; */

  .MuiSlider-colorPrimary {
    color: ${props => props.theme.colors.secundary};
  }
`;

export const PlayerButtonVolume = styled(IconButton)`
  &.MuiIconButton-root {
    color: ${props => props.theme.colors.text};
  }
`;
