import styled from 'styled-components';

export const Container = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  background: #00ff;
`;

export const Content = styled.div`
  position: relative;

  > input {
    width: 260px;
    height: 40px;
    border: 1px solid #fff;
    outline: 0;
    padding: 0 14px;
  }

  &:focus-within::after {
    width: calc(100%);
    height: 2px;
    content: '';
    background: #000;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
