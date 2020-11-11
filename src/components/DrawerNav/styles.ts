import styled from 'styled-components';
import { Drawer, IconButton } from '@material-ui/core';
import { transparentize } from 'polished';

export const Container = styled(Drawer)`
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

export const Header = styled.div`
  height: 100px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  display: flex;
  /* justify-content: space-between; */
`;

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
`;

export const IconButtonDrawer = styled(IconButton)`
  &.MuiIconButton-root {
    color: ${props => props.theme.colors.text};
  }
`;

export const AlbumItem = styled.li`
  max-width: 250px;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 4px 8px 0
      ${props => transparentize(0.81, props.theme.colors.secundary)},
    0 6px 20px 0 ${props => transparentize(0.76, props.theme.colors.secundary)};
  transition: background-color 0.2s ease-in-out;
  list-style: none;
  cursor: pointer;
  padding: 5px;

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
