import styled from 'styled-components';

import { IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

import { transparentize } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 260px;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.text};
  outline: 0;
  padding: 0 14px;
  border-radius: 25px;

  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 75%;

  box-shadow: 0 10px 20px
      ${props => transparentize(0.81, props.theme.colors.secundary)},
    0 6px 6px ${props => transparentize(0.76, props.theme.colors.secundary)};
`;

export const ContainerDrawer = styled(Drawer)`
  overflow: hidden;

  .MuiPaper-root {
    background: transparent;
  }

  .MuiDrawer-paperAnchorDockedLeft {
    border-right: 0;
  }

  .MuiPaper-root::-webkit-scrollbar {
    width: 5px;
  }

  .MuiPaper-root::-webkit-scrollbar-track {
    background: transparent;
    border: 0;
  }

  .MuiPaper-root::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secundary};
    border-radius: 5px;
  }

  .MuiDrawer-paper {
    display: inline;
  }
`;

export const DrawerHeader = styled.div`
  height: 100px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: flex-end;
`;

export const DrawerHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DrawerBackButton = styled(IconButton)`
  &.MuiIconButton-root {
    color: ${props => props.theme.colors.text};
  }
`;

export const DrawerAlbumItem = styled.li`
  width: 250px;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 4px 8px 0
      ${props => transparentize(0.81, props.theme.colors.secundary)},
    0 6px 20px 0 ${props => transparentize(0.76, props.theme.colors.secundary)};
  transition: background-color 0.2s ease-in-out;
  list-style: none;
  cursor: pointer;
  padding: 5px;
  margin: 0 5px 0 0;

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
  }

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  p {
    margin-left: 0.5rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.text};
  }

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const AlbumsView = styled.div`
  position: absolute;
  margin-top: 20vh;
  max-width: 1600px;
  padding: 0 20px 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;
