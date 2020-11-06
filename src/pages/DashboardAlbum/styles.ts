import styled from 'styled-components';

import { transparentize } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  position: fixed;
  width: 260px;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.text};
  outline: 0;
  padding: 0 14px;
  border-radius: 25px;

  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 77px;
  z-index: 1;

  box-shadow: 0 10px 20px
      ${props => transparentize(0.81, props.theme.colors.secundary)},
    0 6px 6px ${props => transparentize(0.76, props.theme.colors.secundary)};
`;

export const AlbumsView = styled.div`
  position: absolute;
  margin-top: 20vh;
  max-width: 1600px;
  padding: 0 20px 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;
