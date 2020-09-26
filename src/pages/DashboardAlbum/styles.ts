import styled from 'styled-components';

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

export const DrawerAlbumItem = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
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
