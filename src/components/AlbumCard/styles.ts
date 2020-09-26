import styled, { css } from 'styled-components';

interface ContentProps {
  cover: string;
  name?: string;
  year?: string;
}

export const Container = styled.div`
  position: relative;
  height: 300px;
  width: 295px;
  margin: 6px;
  overflow: hidden;

  border-radius: 5px;

  &:hover .overview {
    transform: translateY(0);
  }
`;

export const Content = styled.div<ContentProps>`
  ${props =>
    css`
      background: url(${props.cover});
    `}

  height: 100%;
  width: 100%;

  background-size: 100% 100%;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  cursor: pointer;
`;

export const AlbumInfo = styled.div`
  background-color: rgb(52, 34, 50, 0.9);
  color: #fff;
  padding: 1rem;
  position: absolute;
  max-height: 100%;
  overflow: auto;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translateY(101%);
  transition: transform 0.3s ease-in;

  h3 {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }

  word-break: break-word;
`;
