import React from "react";
import styled from "styled-components";
import logo from "../assets/LOGO-12 1.png";
import phone from "../assets/phone.png";
import maillogo from "../assets/Vector.png";
export const Information = (props) => {
  const { image, name, lastname, number, mail, text } = props;
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
            {name} {lastname}
          </h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            {mail && <img src={maillogo} />} <h4>{mail}</h4>
          </div>
          <div style={{ display: "flex", marginBottom: "34px" }}>
            {number && <img src={phone} alt="phone" />}

            <h4>{number}</h4>
          </div>
          {text && <h3>ჩემს შესახებ</h3>}
          <p>{text}</p>
        </Info>
        <Image>
          {/* {image && ( */}
          <img
            style={{
              width: "246px",
              height: " 246px",
              borderRadius: "133px",
            }}
            src={image}
          />
          {/* )} */}
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
    width: 402px;
    word-break: break-all;
  }
`;
const Image = styled.div``;
