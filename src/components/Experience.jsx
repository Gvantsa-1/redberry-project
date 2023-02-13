import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import { Information } from "./Information";
import greenIcon from "../assets/yesicon.png";
import error from "../assets/error.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
export const Experience = (props) => {
  const {
    register,
    handleSubmit,
    control,
    useController,
    watch,
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
    setPosition,
    employer,
    setEmployer,
    about,
    setAbout,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = props;
  const [validPosition, setValidPosition] = useState(false);
  const [validEmployer, setValidEmployer] = useState(false);
  const [validStart, setValidStart] = useState(false);
  const [validEnd, setValidEnd] = useState(false);
  const [validAbout, setValidAbout] = useState(false);

  const regex = /^[ა-ჰ\s]{2,}$/;

  const handlePosition = (event) => {
    localStorage.setItem("position", event.target.value);
    setPosition(event.target.value);
    event.target.value.match(regex)
      ? setValidPosition(true)
      : setValidPosition(false);
  };
  const handleEmployer = (event) => {
    localStorage.setItem("employer", event.target.value);
    setEmployer(event.target.value);
    event.target.value.match(regex)
      ? setValidEmployer(true)
      : setValidEmployer(false);
  };

  const handleStartDate = (event) => {
    localStorage.setItem("startDate", event.target.value);
    setStartDate(event.target.value);
    event.target.value !== startDate
      ? setValidStart(true)
      : setValidStart(false);
  };
  const handleEndDate = (event) => {
    localStorage.setItem("endDate", event.target.value);
    setEndDate(event.target.value);
    event.target.value !== endDate ? setValidEnd(true) : setValidEnd(false);
  };

  const handleAbout = (event) => {
    localStorage.setItem("about", event.target.value);
    setAbout(event.target.value);
    event.target.value.match(regex)
      ? setValidAbout(true)
      : setValidAbout(false);
  };

  useEffect(() => {
    const storedPosition = localStorage.getItem("position");
    const storedEmployer = localStorage.getItem("employer");
    const storedAbout = localStorage.getItem("about");
    const storedStartDate = localStorage.getItem("startDate");
    const storedEndDate = localStorage.getItem("endDate");

    setPosition(storedPosition || "");
    setEmployer(storedEmployer || "");
    setAbout(storedAbout || "");
    setStartDate(storedStartDate || "");
    setEndDate(storedEndDate || "");

    storedPosition.match(regex)
      ? setValidPosition(true)
      : setValidPosition(false);
    storedEmployer.match(regex)
      ? setValidEmployer(true)
      : setValidEmployer(false);
    storedStartDate !== "" ? setValidStart(true) : setValidStart(false);
    storedEndDate !== "" ? setValidEnd(true) : setValidEnd(false);
  }, []);

  useEffect(() => {
    const storedPosition = localStorage.getItem("position");
    const storedEmployer = localStorage.getItem("employer");
    const storedAbout = localStorage.getItem("about");
    const storedStartDate = localStorage.getItem("startDate");
    const storedEndDate = localStorage.getItem("endDate");

    setPosition(storedPosition || "");
    setEmployer(storedEmployer || "");
    setAbout(storedAbout || "");
    setStartDate(storedStartDate || "");
    setEndDate(storedEndDate || "");

    setValidPosition(storedPosition.match(regex) !== null);
    setValidEmployer(storedEmployer.match(regex) !== null);
    setValidStart(storedStartDate !== "");
    setValidEnd(storedEndDate !== "");
    setValidAbout(storedAbout !== "");
  }, []);

  useEffect(() => {
    const storedPosition = localStorage.getItem("position");
    if (storedPosition) {
      setPosition(storedPosition);
    }
    const storedEmployer = localStorage.getItem("Employer");
    if (storedEmployer) {
      setEmployer(storedEmployer);
    }
    const storedStartDate = localStorage.getItem("StartDate");
    if (storedStartDate) {
      setStartDate(storedStartDate);
    }
    const storedEndDate = localStorage.getItem("EndDate");
    if (storedEndDate) {
      setEndDate(storedEndDate);
    }
    const storedAbout = localStorage.getItem("about");
    if (storedAbout) {
      setAbout(storedAbout);
    }
  }, []);

  const navigate = useNavigate();
  const onSubmit = () => {
    {
      validPosition && validEmployer && validAbout && validStart && validEnd
        ? navigate("/education")
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
            <h2>გამოცდილება</h2> <h3>2/3</h3>
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
              <InputWrapper>
                <label
                  style={
                    validPosition ? { color: "#000000" } : { color: "#E52F2F" }
                  }
                  htmlFor="position"
                >
                  თანამდებობა
                </label>
                <PositionInput
                  style={
                    validPosition
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  o
                  type="text"
                  value={position}
                  onChange={handlePosition}
                  placeholder="დეველოპერი, დიზაინერი, ა.შ."
                />

                {validPosition ? (
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
              <InputWrapper>
                <label
                  style={
                    validEmployer ? { color: "#000000" } : { color: "#E52F2F" }
                  }
                  htmlFor="employer"
                >
                  დამსაქმებელი
                </label>
                <EmployerInput
                  style={
                    validEmployer
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  type="text"
                  value={employer}
                  onChange={handleEmployer}
                  placeholder="დამსაქმებელი"
                />
                {validEmployer ? (
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "54px",
              }}
            >
              <InputWrapper>
                <label
                  style={
                    validStart ? { color: "#000000" } : { color: "#E52F2F" }
                  }
                  htmlFor="date"
                >
                  დაწყების თარიღი
                </label>
                <DateStartInput
                  style={
                    validStart
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  type="date"
                  value={startDate}
                  onChange={handleStartDate}
                  required
                />
              </InputWrapper>

              <InputWrapper>
                <label
                  style={validEnd ? { color: "#000000" } : { color: "#E52F2F" }}
                  htmlFor="endDate"
                >
                  დამთავრების თარიღი
                </label>
                <DateEndInput
                  style={
                    validEnd
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  onChange={handleEndDate}
                  type="date"
                  value={endDate}
                  required
                />
              </InputWrapper>
            </div>

            <Text>
              <label
                style={validAbout ? { color: "#000000" } : { color: "#E52F2F" }}
                htmlFor="textarea"
              >
                აღწერა
              </label>
              <textarea
                style={
                  validAbout
                    ? { border: "1px solid #98E37E" }
                    : { border: "1px solid #EF5050" }
                }
                onChange={handleAbout}
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                id="message"
                value={about}
                name="message"
              />
              {validAbout ? (
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
              <Addbutton>მეტი გამოცდილების დამატება</Addbutton>
            </div>
            <BTNcontainer>
              <Link to="/personalinfo">
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
      </Content>

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
  }

  input {
    margin: 8px 50px 8px 0;
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
const LineSecond = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  height: 2px;
  top: 40px;
  background-color: #1a1a1a69;
`;
const FormContainer = styled.div`
  margin-top: 116px;
  width: 798px;
`;
const InputWrapper = styled.div`
  display: block;
  position: relative;
  margin-bottom: 31px;
`;
const DateStartInput = styled.input`
  border: #bcbcbc;
  width: 371px;
  height: 48px;
  margin-right: 50px;
  padding: 0 20px;
  font-size: 16px;
`;
const DateEndInput = styled.input`
  border: #bcbcbc;
  width: 371px;
  height: 48px;
  margin-right: 50px;
  padding: 0 20px;
  font-size: 16px;
`;
const PositionInput = styled.input`
  border: #bcbcbc;
  width: 798px;
  height: 48px;
`;
const EmployerInput = styled.input`
  border: #bcbcbc;
  width: 798px;
  height: 48px;
`;
const Text = styled.div`
  margin-bottom: 33px;
  margin-top: 54px;
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
