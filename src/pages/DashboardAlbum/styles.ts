import styled from 'styled-components';

import dsotm from '../../assets/dsotm.png';

export const Container = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

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

  /* &:focus-within::after {
    background-repeat: repeat;
    width: calc(100%);
    height: 2px;
    content: '';
    background: #000;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  ul {
    flex: 1;
    list-style: none;
  } */
`;

export const AlbumCard = styled.div`
  height: 200px;
  width: 190px;
  margin: 6px;
  transition: opacity 1s;
  border-radius: 5px;
  background: url('https://upload.wikimedia.org/wikipedia/pt/b/b7/Wish_You_Were_Here.jpg');

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  cursor: pointer;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 420px) {
    width: 145px;
  }
`;
