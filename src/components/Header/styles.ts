import styled, { css } from 'styled-components';

import { IconButton } from '@material-ui/core';

interface ContainerProps {
  isScrool?: boolean;
  drawerOpen?: boolean;
}

interface ContentProps {
  drawerOpen?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 35px 20px;
  position: fixed;
  z-index: 1;

  display: flex;

  transition: background-color 0.3s ease-in-out, padding 0.4s ease;

  ${props =>
    (props.isScrool || props.drawerOpen) &&
    css`
      background-color: ${props.theme.colors.primary};
      padding: 20px;
    `};

  > input {
    width: 260px;
    height: 40px;
    border: 1px solid ${props => props.theme.colors.text};
    outline: 0;
    padding: 0 14px;
    border-radius: 25px;

    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 75%;

    box-shadow: 0 10px 20px rgba(180, 205, 237, 0.19),
      0 6px 6px rgba(180, 205, 237, 0.23);
  }
`;

export const Content = styled.div<ContentProps>`
  ${props =>
    props.drawerOpen &&
    css`
      margin-left: calc(255px - 32px - 35px);
    `};
`;

export const MenuButton = styled(IconButton)``;

export const TextTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
