import styled, { css } from 'styled-components';

import ReactPlayer from 'react-player/lazy';
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

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 90px;
`;

export const AlbumInfo = styled.div`
  width: 1200px;
  padding: 120px 20px 20px;
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
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-around;
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
  margin-left: 5px;
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
  bottom: 15px;
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

export const PlayerSeekBarContainer = styled.div`
  position: absolute;
  bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.secundary};

  > span {
    min-width: 400px;
    margin-bottom: 5px;
  }

  .MuiSlider-root {
    color: ${props => props.theme.colors.secundary};
  }

  .MuiSlider-rail {
    height: 7px;
  }

  .MuiSlider-track {
    height: 7px;
  }

  .MuiSlider-thumb {
    width: 15px;
    height: 15px;
    bottom: 4px;

    transition: scale 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 200px;

  .MuiSlider-colorPrimary {
    color: ${props => props.theme.colors.secundary};
  }
`;

export const TimeText = styled.p`
  width: 60px;
  /* margin: 0 8px; */
`;

export const PlayerButtonVolume = styled(IconButton)`
  &.MuiIconButton-root {
    color: ${props => props.theme.colors.text};
  }
`;
