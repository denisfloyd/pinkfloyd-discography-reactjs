import styled from 'styled-components';

import dsotm from '../../assets/dsotm.png';

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
