import React, { useRef } from "react";
import styled from "styled-components";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Information } from "../components/Information";
export const Personalinfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
          <form onSubmit={handleSubmit(onSubmit)} method="post">
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
                  type="name"
                  placeholder="ანზორ"
                  {...register("name", { required: true })}
                />
                <span>მინიმუმ 2 ასო, ქართული ასოები</span>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="lastname">გვარი</label>
                <LastnameInput
                  type="lastname"
                  placeholder="მუმლაძე"
                  {...register("lastname", { required: true })}
                />
                <span>მინიმუმ 2 ასო, ქართული ასოები</span>
              </InputWrapper>
            </div>
            <ImageWrapper>
              <label htmlFor="image">პირადი ფოტოს ატვირთვა</label>
              <IMGinput
                placeholder="ატვირთვა"
                style={{
                  border: "none",
                  boxShadow: "none",
                  marginLeft: "19px",
                }}
              />
            </ImageWrapper>
            <Text>
              <label htmlFor="textarea">ჩემს შესახებ (არასავალდებულო)</label>
              <textarea
                placeholder="ზოგადი ინფო შენ შესახებ"
                style={{ width: "798px", height: "103px", marginTop: "8px" }}
                id="message"
                name="message"
              />
            </Text>
            <div style={{ display: "block" }}>
              <InputWrapper>
                <label htmlFor="mail">ელ.ფოსტა</label>
                <MailInput
                  type="mail"
                  placeholder="anzorr666@redberry.ge"
                  {...register("email", { required: true })}
                />{" "}
                <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
              </InputWrapper>
              <InputWrapper style={{ marginTop: "29px" }}>
                <label htmlFor="number">მობილურის ნომერი</label>
                <NumberInput
                  placeholder="+995 551 12 34 56"
                  {...register("number", { required: true })}
                />{" "}
                <span>
                  უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                </span>
              </InputWrapper>
            </div>
            <BTNcontainer>
              <Link to="/experience">
                <button
                  style={{
                    border: "none",
                    boxShadow: "none",
                    borderRadius: "4px",
                    marginTop: "174px",
                  }}
                  type="submit"
                >
                  შემდეგი
                </button>
              </Link>
            </BTNcontainer>
          </form>
        </FormContainer>
      </Personal>
      <Box>
        <Information />
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
    input:focus {
      outline: none;
    }

    &::placeholder {
      padding: 13px 16px;
      color: grey;
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
    &::placeholder {
      padding: 13px 16px;
      color: grey;
    }
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
`;
const NameInput = styled.input`
  border: #bcbcbc;
  width: 371px;
  height: 48px;
  margin-right: 50px;
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
const NumberInput = styled.input`
  border: #bcbcbc;
  width: 798px;
  height: 48px;
`;
const ImageWrapper = styled.div`
  margin-bottom: 54px;
`;
const IMGinput = styled.input`
  background-color: #0e80bf !important;
  width: 107px;
  height: 27px;
  margin-left: 19px;

  &::placeholder {
    color: #f1eeee !important;
    font-weight: 400 !important;
    font-size: 14px !important;
  }
`;
const Text = styled.div`
  margin-bottom: 33px;
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
// const codeRegex = "[0-9]{4}";

//   function handleCode(event) {
//     event.target.value === "" ? setShow(false) : setShow(true);
//     event.target.value.match(codeRegex)
//       ? handleNavigate() && setShow(true)
//       : setShow(false);
//   }
