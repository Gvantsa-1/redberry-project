import React, { useEffect, useState } from "react";
import styled from "styled-components";
import greenIcon from "../assets/yesicon.png";
import error from "../assets/error.png";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Information } from "./Information";
import axios from "axios";
export const Education = (props) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    text,
    mail,
    name,
    lastname,
    image,
    number,
    position,
    employer,
    about,
    startDate,
    endDate,
    university,
    setUniversity,
    select,
    setSelect,
    setEndDateSchool,
    endSchool,
    aboutEdu,
    setAboutEdu,
  } = props;

  const [validUniversity, setValidUniversity] = useState(false);
  const [validSelect, setValidSelect] = useState(false);
  const [validEndSchool, setValidEndSchool] = useState(false);
  const [validAboutEdu, setValidAboutEdu] = useState(false);
  const regex = /^[ა-ჰ\s]{2,}$/;
  const handleUniversity = (event) => {
    localStorage.setItem("university", event.target.value);
    setUniversity(event.target.value);
    event.target.value.match(regex)
      ? setValidUniversity(true)
      : setValidUniversity(false);
  };

  const handleEndSchool = (event) => {
    localStorage.setItem("endSchool", event.target.value);
    setEndDateSchool(event.target.value);
    event.target.value !== endSchool
      ? setValidEndSchool(true)
      : setValidEndSchool(false);
  };
  const handleSelect = (event) => {
    localStorage.setItem("select", event.target.value);
    setValidSelect(event.target.value);
    event.target.value !== select
      ? setValidSelect(true)
      : setValidSelect(false);
  };

  const handleAboutEdu = (event) => {
    localStorage.setItem("abouttEdu", event.target.value);
    setAboutEdu(event.target.value);
    event.target.value.match(regex)
      ? setValidAboutEdu(true)
      : setValidAboutEdu(false);
  };

  useEffect(() => {
    const storedUniversity = localStorage.getItem("university");
    const storedSelect = localStorage.getItem("select");
    const storedEndSchool = localStorage.getItem("endSchool");
    const storedAboutEdu = localStorage.getItem("aboutEdu");

    setUniversity(storedUniversity || "");
    setSelect(storedSelect || "");
    setAboutEdu(storedAboutEdu || "");
    setEndDateSchool(storedEndSchool || "");

    setValidUniversity(storedUniversity.match(regex) !== null);
    setValidSelect(storedSelect.match(regex) !== null);
    setValidEndSchool(storedEndSchool !== "");
    setValidAboutEdu(storedAboutEdu !== "");
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log("data", data);

  const navigate = useNavigate();
  const onSubmit = () => {
    {
      validUniversity && validAboutEdu && validEndSchool && validSelect
        ? navigate("/Success")
        : alert("Something Empty or is not Valid");
    }
  };
  return (
    <Container>
      <Link to="/main">
        <img
          style={{
            position: "absolute",
            top: "45px",
            left: "48px",
          }}
          src={arrow}
        />{" "}
      </Link>
      <Content>
        <Wrapper>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>განათლება</h2> <h3>3/3</h3>
          </div>
          <Line />
        </Wrapper>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                display: "block",
              }}
            >
              <InputWrapper style={{ marginBottom: "21px" }}>
                <label
                  style={
                    validUniversity
                      ? { color: "#000000" }
                      : { color: "#E52F2F" }
                  }
                  htmlFor="university"
                >
                  სასწავლებელი
                </label>
                <PositionInput
                  style={
                    validUniversity
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  type="text"
                  value={university}
                  onChange={handleUniversity}
                  placeholder="სასწავლებელი"
                />

                {validUniversity ? (
                  <img
                    style={{ position: "absolute", left: "765px", top: "45px" }}
                    src={greenIcon}
                  />
                ) : (
                  <img
                    style={{ position: "absolute", left: "815px", top: "45px" }}
                    src={error}
                  />
                )}
                <span>მინიმუმ 2 სიმბოლო</span>
              </InputWrapper>
            </div>
            <section
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "51px",
              }}
            >
              <InputWrapper>
                <label
                  style={
                    validSelect ? { color: "#000000" } : { color: "#E52F2F" }
                  }
                  htmlFor="select"
                >
                  ხარისხი
                </label>
                <select
                  style={
                    validSelect
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  required
                  onChange={handleSelect}
                >
                  {data.map((item) => (
                    <option key={item.id} value={item.select}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </InputWrapper>

              <InputWrapper>
                <label
                  style={
                    validEndSchool ? { color: "#000000" } : { color: "#E52F2F" }
                  }
                  htmlFor="endDateSchool"
                >
                  დამთავრების თარიღი
                </label>

                <DateEndSchool
                  style={
                    validEndSchool
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  onChange={handleEndSchool}
                  type="date"
                  value={endSchool}
                  required
                />
              </InputWrapper>
            </section>

            <Text>
              <label
                style={
                  validAboutEdu ? { color: "#000000" } : { color: "#E52F2F" }
                }
                htmlFor="textarea"
              >
                აღწერა
              </label>
              <textarea
                style={
                  validAboutEdu
                    ? { border: "1px solid #98E37E" }
                    : { border: "1px solid #EF5050" }
                }
                onChange={handleAboutEdu}
                placeholder="განათლების აღწერა"
                id="message"
                value={aboutEdu}
                name="message"
              />
              {validAboutEdu ? (
                <img
                  style={{ position: "absolute", left: "815px", top: "65px" }}
                  src={greenIcon}
                />
              ) : (
                <img
                  style={{ position: "absolute", left: "815px", top: "65px" }}
                  src={error}
                />
              )}
            </Text>
            <div style={{ display: "block", position: "relative" }}>
              <LineSecond />
              <Addbutton>სხვა სასწავლებლის დამატება</Addbutton>
            </div>
            <BTNcontainer>
              <Link to="/experience">
                <button
                  type="submit"
                  style={{
                    border: "none",
                    boxShadow: "none",
                    borderRadius: "4px",
                    marginTop: "174px",
                  }}
                >
                  უკან
                </button>
              </Link>
              <button
                type="submit"
                style={{
                  border: "none",
                  boxShadow: "none",
                  borderRadius: "4px",
                  marginTop: "174px",
                }}
              >
                შემდეგი
              </button>
            </BTNcontainer>
          </form>
        </FormContainer>
      </Content>{" "}
      <Box>
        <Information
          image={image}
          name={name}
          text={text}
          lastname={lastname}
          mail={mail}
          number={number}
          position={position}
          startDate={startDate}
          endDate={endDate}
          employer={employer}
          about={about}
          university={university}
          endSchool={endSchool}
          select={select}
          aboutEdu={aboutEdu}
        />
      </Box>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 100%;
  label {
    color: #000000;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  input {
    margin: 8px 0px;
    background-color: #ffffff;
    border: 1px solid #bcbcbc;
    border-radius: 4px;
    padding-left: 16px;
    input:focus {
      outline: none;
    }
  }
  span {
    color: #2e2e2e;
    font-size: 14px;
    font-weight: 300;
  }
  textarea {
    border: 1px solid #bcbcbc;
    border-radius: 4px;
    padding: 16px 13px;
    width: 798px !important;
    box-sizing: border-box;
    height: 103px;
    margin-top: 8px;
  }
  select {
    margin-top: 8px;
    border: 1px solid #bcbcbc;
    border-radius: 4px;
    width: 371px;
    height: 48px;
    background-color: #ffffff;
    color: #bcbcbc;
    padding: 0 20px;
    font-size: 16px;
    margin-right: 55px;
  }
`;
const Content = styled.div`
  width: 57.5%;
  padding: 47px 150px 65px 150px;
  background-color: #f9f9f9;
`;
const Box = styled.div`
  width: 42.5%;
`;
const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 798px;

  h2 {
    font-weight: 700;
    color: #1a1a1a;
  }
  h3 {
    font-size: 20px;
    font-weight: 400;
    color: #1a1a1a;
  }
`;
const Line = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  height: 2px;
  top: 40px;
  background-color: #1a1a1a8f;
`;
const InputWrapper = styled.div`
  display: block;
  position: relative;
  margin-bottom: 31px;
`;
const FormContainer = styled.div`
  margin-top: 116px;
  width: 798px;
`;
const DateEndSchool = styled.input`
  border: #bcbcbc;
  width: 371px;
  height: 48px;
  padding: 0 20px;
  font-size: 16px;
`;

const PositionInput = styled.input`
  border: #bcbcbc;
  width: 798px;
  height: 48px;
`;

const Text = styled.div`
  margin-bottom: 33px;
  margin-top: 34px;
  position: relative;
`;
const BTNcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background-color: #6b40e3 !important;
    width: 151px;
    height: 48px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
  }
`;
const Addbutton = styled.button`
  width: 289px;
  height: 48px;
  padding: 18px, 60px, 18px, 60px;
  background-color: #62a1eb;
  color: #ffffff;
  margin-top: 103px;
  border-radius: 4px;
  font-weight: 500;
`;
const LineSecond = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  height: 2px;
  top: 40px;
  background-color: #1a1a1a69;
`;
