import React from "react";
import { Button } from "antd";
import styled from "styled-components";

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Cell>
          <Button type="primary">Logout</Button>
        </Cell>
      </Grid>
    );
  }
}

export default Home;

const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 25% 25% 50%;
`;

const Cell = styled.div`
  grid-area: 2 / 2;
  place-self: center;
`;
