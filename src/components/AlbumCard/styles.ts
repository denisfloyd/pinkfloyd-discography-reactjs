import styled, { css } from 'styled-components';

import { transparentize } from 'polished';

interface ContentProps {
  cover: string;
  name?: string;
  year?: string;
}

export const Container = styled.div`
  position: relative;
  height: 300px;
  width: 295px;
  margin: 6px 10px 20px;
  overflow: hidden;

  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 10px 20px
        ${props => transparentize(0.2, props.theme.colors.secundary)},
      0 6px 6px ${props => transparentize(0.76, props.theme.colors.secundary)};

    transform: scale(1.02);

    .overview {
      transform: translateY(0);
    }
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

  cursor: pointer;
`;

export const AlbumInfo = styled.div`
  background-color: ${props => transparentize(0.1, props.theme.colors.primary)};
  color: ${props => props.theme.colors.text};
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
