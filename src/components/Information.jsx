import React from "react";
import styled from "styled-components";
import logo from "../assets/LOGO-12 1.png";
import phone from "../assets/phone.png";
import maillogo from "../assets/Vector.png";
export const Information = (props) => {
  const { image } = props;
  return (
    <Container>
      <PersonalBox>
        <Info>
          <h1
            style={{
              fontSize: "34px",
              color: "#F93B1D",
              fontWeight: "700",
              lineHeight: "41.51px",
              marginBottom: "17px",
            }}
          >
            vxxc
          </h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <img src={maillogo} /> <h4>bxxb</h4>
          </div>
          <div style={{ display: "flex", marginBottom: "34px" }}>
            <img src={phone} /> <h4>xbxcb</h4>
          </div>
          <h3>bxbx</h3>
          <p>xbbx</p>
        </Info>
        <Image>
          <img src={image} />
        </Image>
      </PersonalBox>
      <IMG src={logo} />
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  height: 100%;
  padding: 48px 75px 0 80px;
`;
const IMG = styled.img`
  position: absolute;
  bottom: 44px;
  left: 78px;
`;
const PersonalBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  h4 {
    font-size: 18px;
    line-height: 21.41px;
    font-weight: 400;
    color: #1a1a1a;
    margin-left: 11.8px;
  }
  h3 {
    color: #f93b1d;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.98px;
    margin-bottom: 15px;
  }
  p {
    color: #000000;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    width: 432px;
  }
`;
const Image = styled.div`
  width: 246px;
  height: 246px;
  border-radius: 133px;
`;
