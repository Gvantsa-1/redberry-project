import React from "react";
import styled from "styled-components";
import logo from "../assets/LOGO-12 1.png";
export const Information = () => {
  return (
    <Container>
      <IMG src={logo} />
    </Container>
  );
};
const Container = styled.div`
  position: relative;
`;
const IMG = styled.img`
  position: absolute;
  bottom: 50px;
  left: 50px;
`;
