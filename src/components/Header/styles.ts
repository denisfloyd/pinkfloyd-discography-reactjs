import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
  background: #505050;
  position: fixed;
  z-index: 1;

  transition: background-color 0.3s ease-in-out, padding 0.4s ease 0.5s;
`;

export const MenuButton = styled(IconButton)``;

export const TextTitle = styled.div`
  font-weight: bold;
  color: #fff;
  font-size: 20px;
`;
