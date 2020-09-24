import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';

import { Container, Content } from './styles';

const DashboardAlbum: React.FC = () => {
  const [toogleDrawer, setToggleDrawer] = useState(true);

  return (
    <>
      <Drawer anchor="left" open={toogleDrawer}>
        <h1>TESTE</h1>
      </Drawer>

      <Container>
        <Content>
          <input type="text" placeholder="Album..." />

          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </Content>
      </Container>
    </>
  );
};

export default DashboardAlbum;
