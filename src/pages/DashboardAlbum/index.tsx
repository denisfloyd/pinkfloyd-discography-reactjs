import React from 'react';

import { Container, Content } from './styles';

const DashboardAlbum: React.FC = () => {
  return (
    <Container>
      <Content>
        <input type="text" placeholder="Album..." />
      </Content>
    </Container>
  );
};

export default DashboardAlbum;
