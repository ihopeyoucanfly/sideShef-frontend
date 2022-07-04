import { FC, ReactNode, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Cuisines from "../cuisines/Cuisines";

import Header from "../header/Header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Container>
      <FruitLeft src="../../header/leftFruit.png" alt="left fruit" />
      <FruitRight src="../../header/rightFruit.png" alt="right fruit" />
      <Header />
      <Cuisines />
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  margin: 30px auto;
  max-width: 1400px;
`;

const FruitLeft = styled.img`
  position: absolute;
  left: 0;
  top: 0;

  @media (max-width: 700px) {
    display: none;
  }
`;

const FruitRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 700px) {
    display: none;
  }
`;
