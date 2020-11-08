import styled, { css } from 'styled-components';

import { IconButton } from '@material-ui/core';

interface ContainerProps {
  isScrool?: boolean;
  drawerOpen?: boolean;
}

interface ContentTitleProps {
  drawerOpen?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 20px;
  position: fixed;
  z-index: 1;

  transition: background-color 0.3s ease-in-out, padding 0.4s ease;

  ${props =>
    (props.isScrool || props.drawerOpen) &&
    css`
      background-color: ${props.theme.colors.primary};
      padding: 20px;
    `};
`;

export const ContentTitle = styled.div<ContentTitleProps>`
  display: flex;
  align-items: center;

  ${props =>
    props.drawerOpen &&
    css`
      margin-left: calc(255px - 72px);
    `};
`;

export const MenuButton = styled(IconButton)`
  &.MuiIconButton-root {
    color: ${props => props.theme.colors.text};
  }
`;

export const TextTitle = styled.h1`
  font-weight: bold;
  font-size: 20px;

  cursor: pointer;
`;
