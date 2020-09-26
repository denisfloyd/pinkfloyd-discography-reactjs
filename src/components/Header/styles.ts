import styled, { css } from 'styled-components';

import { IconButton } from '@material-ui/core';

interface ContainerProps {
  isScrool?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
  background-color: transparent;
  position: fixed;
  z-index: 1;

  transition: background-color 0.3s ease-in-out, padding 0.4s ease;

  ${props =>
    props.isScrool &&
    css`
      background-color: #505050;
      padding: 20px;
    `}
`;

export const MenuButton = styled(IconButton)``;

export const TextTitle = styled.div`
  font-weight: bold;
  color: #fff;
  font-size: 20px;
`;
