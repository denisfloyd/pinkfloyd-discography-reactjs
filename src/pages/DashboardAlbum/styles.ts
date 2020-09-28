import styled from 'styled-components';

import { IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

export const Container = styled.main`
  height: 30vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;

  background: #202020;
`;

export const ContainerDrawer = styled(Drawer)``;

export const DrawerHeader = styled.div`
  /* height: 100px; */
  background: #505050;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DrawerHeaderContainer = styled.div`
  background: #505050;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DrawerBackButton = styled(IconButton)`
  color: #fff;
`;

export const DrawerAlbumItem = styled.li`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  background-color: #202020;
  color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  p {
    margin-left: 0.5rem;
    text-transform: uppercase;
  }

  &:hover {
    background-color: #505050;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  > input {
    width: 260px;
    height: 40px;
    border: 1px solid #fff;
    outline: 0;
    padding: 0 14px;
    border-radius: 25px;

    box-shadow: 3px 4px 3px #aaaaaa;
  }
`;

export const AlbumsView = styled.div`
  max-width: 1600px;
  padding: 0 20px 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;
