import styled, { css } from 'styled-components';

interface ContainerProps {
  cover: string;
  name?: string;
  year?: string;
}

export const Container = styled.div<ContainerProps>`
  ${props =>
    css`
      background: url(${props.cover});
    `}

  height: 300px;
  width: 280px;
  margin: 6px;
  transition: opacity 1s;
  border-radius: 5px;
  /* background: url('https://upload.wikimedia.org/wikipedia/pt/b/b7/Wish_You_Were_Here.jpg'); */
  background-size: 100% 100%;

  &:hover {
    transform: scale(1.01);
  }

  cursor: pointer;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 420px) {
    width: 145px;
  }
`;
