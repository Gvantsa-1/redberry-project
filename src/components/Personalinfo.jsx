import React, { useState, useEffect } from "react";
import styled from "styled-components";
import arrow from "../assets/arrow.png";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Information } from "../components/Information";
import greenIcon from "../assets/yesicon.png";
import error from "../assets/error.png";
export const Personalinfo = (props) => {
  const {
    register,
    handleSubmit,
    control,
    useController,
    watch,
    formState: { errors },
  } = useForm();
  const {
    setImage,
    setName,
    setNumber,
    setText,
    setMail,
    setLastname,
    text,
    mail,
    name,
    lastname,
    image,
    number,
  } = props;
  const [validName, setValidName] = useState(false);
  const [validlast, setValidlast] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  const [validMail, setValidMail] = useState(false);
  const [completed, setCompleted] = useState(false);

  const MyInput = ({ control, name, mask, ...props }) => {
    const [value, setValue] = useController(control, name);
    return (
      <InputMask
        mask={mask}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    );
  };

  const regex = /^[ა-ჰ]{2,}$/;
  const regexLast = /^[ა-ჰ]{2,}$/;
  const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(redberry\.ge)$/;
  const numberRegex = "995[0-9 ]{13}";

  const handleNameChange = (event) => {
    localStorage.setItem("name", event.target.value);
    setName(event.target.value);
    event.target.value.match(regex) ? setValidName(true) : setValidName(false);
  };
  const handleLastnameChange = (event) => {
    localStorage.setItem("lastname", event.target.value);
    setLastname(event.target.value);
    event.target.value.match(regexLast)
      ? setValidlast(true)
      : setValidlast(false);
  };

  const handleTextarea = (event) => {
    localStorage.setItem("text", event.target.value);
    setText(event.target.value);
  };
  const handleMailChange = (event) => {
    localStorage.setItem("mail", event.target.value);
    setMail(event.target.value);
    event.target.value.match(mailRegex)
      ? setValidMail(true)
      : setValidMail(false);
  };
  const handleNumberChange = (event) => {
    localStorage.setItem("number", event.target.value);
    setNumber(event.target.value);
    event.target.value.match(numberRegex)
      ? setValidNumber(true)
      : setValidNumber(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      localStorage.setItem("image", reader.result);
      setImage(file);
    };
    {
      setImage(file) && setCompleted(true);
    }
  };
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedLastname = localStorage.getItem("lastname");
    const storedText = localStorage.getItem("text");
    const storedMail = localStorage.getItem("mail");
    const storedNumber = localStorage.getItem("number");
    const storedImage = localStorage.getItem("image");

    setName(storedName || "");
    setLastname(storedLastname || "");
    setText(storedText || "");
    setMail(storedMail || "");
    setNumber(storedNumber || "");
    setImage(storedImage || null);

    storedName.match(regex) ? setValidName(true) : setValidName(false);
    storedLastname.match(regexLast) ? setValidlast(true) : setValidlast(false);
    storedMail.match(mailRegex) ? setValidMail(true) : setValidMail(false);
    storedNumber.match(numberRegex)
      ? setValidNumber(true)
      : setValidNumber(false);
  }, []);
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
    const storedLastname = localStorage.getItem("lastname");
    if (storedLastname) {
      setLastname(storedLastname);
    }
    const storedText = localStorage.getItem("text");
    if (storedText) {
      setText(storedText);
    }
    const storedMail = localStorage.getItem("mail");
    if (storedMail) {
      setMail(storedMail);
    }
    const storedNumber = localStorage.getItem("number");
    if (storedNumber) {
      setNumber(storedNumber);
    }
  }, []);

  useEffect(() => {
    const storedImage = localStorage.getItem("image");
    setImage(storedImage);
  }, []);

  const navigate = useNavigate();

  const onSubmit = () => {
    {
      validName && validNumber && validMail && validlast && image
        ? navigate("/experience")
        : alert("Something Empty or is not Valid");
    }
  };
  return (
    <Container>
      <Link to="/main">
        <img
          style={{ position: "absolute", top: "45px", left: "48px" }}
          src={arrow}
        />
      </Link>
      <Personal>
        <Wrapper>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>პირადი ინფო</h2> <h3>1/3</h3>
          </div>
          <Line />
        </Wrapper>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    validName ? { color: "#000000" } : { color: "#E52F2F" }
                  }
                  htmlFor="name"
                >
                  სახელი
                </label>
                <NameInput
                  style={
                    validName
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="ანზორ"
                />

                {validName ? (
                  <img
                    style={{ position: "absolute", left: "343px", top: "45px" }}
                    src={greenIcon}
                  />
                ) : (
                  <img
                    style={{ position: "absolute", left: "380px", top: "45px" }}
                    src={error}
                  />
                )}
                <span>მინიმუმ 2 ასო, ქართული ასოები</span>
              </InputWrapper>
              <InputWrapper>
                <label
                  style={
                    validlast ? { color: "#000000" } : { color: "#E52F2F" }
                  }
                  htmlFor="lastname"
                >
                  გვარი
                </label>
                <LastnameInput
                  style={
                    validlast
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  onChange={handleLastnameChange}
                  type="lastname"
                  value={lastname}
                  placeholder="მუმლაძე"
                />
                {validlast ? (
                  <img
                    style={{ position: "absolute", left: "343px", top: "45px" }}
                    src={greenIcon}
                  />
                ) : (
                  <img
                    style={{ position: "absolute", left: "380px", top: "45px" }}
                    src={error}
                  />
                )}
                <span>მინიმუმ 2 ასო, ქართული ასოები</span>
              </InputWrapper>
            </div>
            <ImageWrapper
              style={{
                display: "flex",
                marginBottom: "20px",
                alignItems: "baseline",
              }}
            >
              <label style={{ marginRight: "19px" }} htmlFor="image">
                პირადი ფოტოს ატვირთვა
              </label>
              <IMGinput
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                placeholder="ატვირთვა"
              />{" "}
            </ImageWrapper>

            <Text>
              <label htmlFor="textarea">ჩემს შესახებ (არასავალდებულო)</label>
              <textarea
                onChange={handleTextarea}
                placeholder="ზოგადი ინფო შენ შესახებ"
                style={{
                  height: "103px",
                  marginTop: "8px",
                }}
                id="message"
                value={text}
                name="message"
              />
            </Text>
            <div style={{ display: "block" }}>
              <InputWrapper>
                <label
                  style={
                    validMail ? { color: "#000000" } : { color: "#E52F2F" }
                  }
                  htmlFor="mail"
                >
                  ელ.ფოსტა
                </label>
                <MailInput
                  style={
                    validMail
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  onChange={handleMailChange}
                  type="mail"
                  value={mail}
                  placeholder="anzorr666@redberry.ge"
                  required
                />

                {validMail ? (
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
                <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
              </InputWrapper>
              <InputWrapper style={{ marginTop: "29px" }}>
                <label
                  style={
                    validNumber ? { color: "#000000" } : { color: "#E52F2F" }
                  }
                  htmlFor="number"
                >
                  მობილურის ნომერი
                </label>
                <NumberInput
                  style={
                    validNumber
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #EF5050" }
                  }
                  onChange={handleNumberChange}
                  control={control}
                  name="phone"
                  mask="+999 999 99 99 99"
                  placeholder="+995 551 12 34 56"
                />
                {validNumber ? (
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
                <span>
                  უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                </span>
              </InputWrapper>
            </div>
            <BTNcontainer>
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
      </Personal>

      <Box>
        {" "}
        <Information
          image={image}
          name={name}
          text={text}
          lastname={lastname}
          mail={mail}
          number={number}
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
  }
`;
const Personal = styled.div`
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
const FormContainer = styled.div`
  margin-top: 116px;
  width: 798px;
`;
const InputWrapper = styled.div`
  display: block;
  position: relative;
`;
const NameInput = styled.input`
  border: #bcbcbc;
  width: 371px;
  height: 48px;
  margin-right: 50px;
`;
const IMGinput = styled.input`
  background-color: #0e80bf !important;
  width: 107px;
  height: 27px;
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    content: "ატვირთვა";
  }
`;
const LastnameInput = styled.input`
  border: #bcbcbc;
  width: 371px;
  height: 48px;
`;
const MailInput = styled.input`
  border: #bcbcbc;
  width: 798px;
  height: 48px;
`;
const NumberInput = styled(InputMask)`
  border: #bcbcbc;
  width: 798px;
  height: 48px;
`;
const ImageWrapper = styled.div`
  margin-bottom: 154px;
`;

const Text = styled.div`
  margin-bottom: 33px;
  margin-top: 54px;
`;
const BTNcontainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background-color: #6b40e3 !important;
    width: 151px;
    height: 48px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
  }
`;
