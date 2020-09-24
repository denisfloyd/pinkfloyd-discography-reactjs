import styled from 'styled-components';

export const Container = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  background: #00ff url('../../assets/dsotm.png');
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
  }

  &:focus-within::after {
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
  }

  li:first-child {
    height: 2px;
    background: #e62e2d;
  }
  li:nth-child(2) {
    height: 2px;
    background: #e96529;
  }
  li:nth-child(3) {
    height: 2px;
    background: #fbfa0c;
  }
  li:nth-child(4) {
    height: 2px;
    background: #73b225;
  }
  li:nth-child(5) {
    height: 2px;
    background: #4183c3;
  }
  li:last-child(6) {
    height: 2px;
    background: #752a6e;
  }
`;
