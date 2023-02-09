import React from "react";
import styled from "styled-components";
import BGimage from "../assets/bgimage.png";
import logo from "../assets/LOGO-02 3.png";
import logo02 from "../assets/LOGO-40 1.png";
export const Main = () => {
  return (
    <Container>
      <MainImage>
        <Wrapper>
          <LogoImage src={logo} />
          <Line />
        </Wrapper>
        <Login>
          <Wrapper>
            <button>რეზიუმეს დამატება</button>
            <img src={logo02} />
          </Wrapper>
        </Login>
      </MainImage>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
const MainImage = styled.div`
  background-image: url(${BGimage});
  width: 100vw;
  height: 100vh;
  background-position: cover;
`;
const Wrapper = styled.div`
  display: block;
  position: relative;
`;
const LogoImage = styled.img`
  width: 236px;
  height: 38px;
  margin-top: 25px;
  margin-left: 70px;
`;

const Line = styled.div`
  position: absolute;
  left: 70px;
  right: 70px;
  height: 2px;
  top: 90px;
  background-color: #1a1a1a8f;
`;
const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92vh;
  text-align: center;
  position: relative;

  button {
    width: 464px;
    height: 60px;
    color: #ffffff;
    text-transform: capitalize;
    background-color: #1a1a1a;
    font-family: "HelveticaNeue";
    font-size: 20px;
    font-weight: 500;
    padding: 18px 126px;
    border-radius: 8px;
    cursor: pointer;
  }
  img {
    position: absolute;
    top: -45px;
    left: 350px;
  }
`;
