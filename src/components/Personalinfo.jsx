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
  const onSubmit = (item) => {};
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [text, setText] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [about, setAbout] = useState("");
  const [src, setSrc] = useState(null);
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

  // const regex = "/^[ა-ჰ]+$/";
  const regex = "/^[\u10A0-\u10FF]{2,}$/";
  const emailRegex = "/^[a-zA-Z0-9.]+@redberry.ge$/";
  const numberRegex = "/^+995sd{3}sd{2}sd{2}sd{2}$/";

  const handleNameChange = (event) => {
    localStorage.setItem("name", event.target.value);
    setName(event.target.value);
  };
  const handleLastnameChange = (event) => {
    localStorage.setItem("lastname", event.target.value);
    setLastname(event.target.value);
  };

  const handleTextarea = (event) => {
    localStorage.setItem("text", event.target.value);
    setText(event.target.value);
  };
  const handleMailChange = (event) => {
    localStorage.setItem("mail", event.target.value);
    setMail(event.target.value);
  };
  const handleNumberChange = (event) => {
    localStorage.setItem("number", event.target.value);
    setNumber(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      localStorage.setItem("image", reader.result);
      setImage(file);
    };
  };
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
    if (storedImage) {
      const file = new File([storedImage], "image.jpg", { type: "image/jpeg" });
      setImage(file);
    }
  }, []);

  const navigate = useNavigate();
  const handleNavigate = () => {
    if (onSubmit) {
      //   navigate("/experience");
      // } else {
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
                <label htmlFor="name">სახელი</label>
                <NameInput
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="ანზორ"
                />
                <img
                  style={{ position: "absolute", left: "343px", top: "45px" }}
                  src={greenIcon}
                />
                <span>მინიმუმ 2 ასო, ქართული ასოები</span>
                <img
                  style={{ position: "absolute", left: "380px", top: "45px" }}
                  src={error}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="lastname">გვარი</label>
                <LastnameInput
                  onChange={handleLastnameChange}
                  type="lastname"
                  value={lastname}
                  placeholder="მუმლაძე"
                />
                <img
                  style={{ position: "absolute", left: "343px", top: "45px" }}
                  src={greenIcon}
                />
                <span>მინიმუმ 2 ასო, ქართული ასოები</span>
                <img
                  style={{ position: "absolute", left: "380px", top: "45px" }}
                  src={error}
                />
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
                required
              />{" "}
            </ImageWrapper>

            <Text>
              <label htmlFor="textarea">ჩემს შესახებ (არასავალდებულო)</label>
              <textarea
                rows="4"
                cols="5"
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
                <label htmlFor="mail">ელ.ფოსტა</label>
                <MailInput
                  onChange={handleMailChange}
                  type="mail"
                  value={mail}
                  placeholder="anzorr666@redberry.ge"
                  required
                />
                <img
                  style={{ position: "absolute", left: "765px", top: "45px" }}
                  src={greenIcon}
                />
                <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
                <img
                  style={{ position: "absolute", left: "815px", top: "45px" }}
                  src={error}
                />
              </InputWrapper>
              <InputWrapper style={{ marginTop: "29px" }}>
                <label htmlFor="number">მობილურის ნომერი</label>
                <NumberInput
                  onChange={handleNumberChange}
                  control={control}
                  name="phone"
                  mask="+995 *** ** ** **"
                  placeholder="+995 551 12 34 56"
                />
                <img
                  style={{ position: "absolute", left: "765px", top: "45px" }}
                  src={greenIcon}
                />
                <span>
                  უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                </span>
                <img
                  style={{ position: "absolute", left: "815px", top: "45px" }}
                  src={error}
                />
              </InputWrapper>
            </div>
            <BTNcontainer>
              {/* <Link to="/experience"> */}
              <button
                onClick={handleNavigate}
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
              {/* </Link> */}
            </BTNcontainer>
          </form>
        </FormContainer>
      </Personal>

      <Box>
        {" "}
        <Information
          image={image}
          name={name}
          lastname={lastname}
          mail={mail}
          number={number}
          text={text}
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
  /* background-image: url(${greenIcon});
  background-repeat: no-repeat;

  background-position: 340px; */
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
