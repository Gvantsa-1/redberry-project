import React, { useState } from "react";
import styled from "styled-components";
import { Main } from "./components/Main";
import { Personalinfo } from "./components/Personalinfo";
import { Experience } from "./components/Experience";
import { Information } from "./components/Information";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom";
function App() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [text, setText] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState(null);
  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [about, setAbout] = useState("");
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main to="/main" replace />} />
        <Route path="/main" element={<Main />} />
        <Route
          path="/personalinfo"
          element={
            <Personalinfo
              setImage={setImage}
              setName={setName}
              setText={setText}
              setLastname={setLastname}
              setMail={setMail}
              setNumber={setNumber}
              image={image}
              name={name}
              text={text}
              lastname={lastname}
              mail={mail}
              number={number}
            />
          }
        />
        <Route
          path="/information"
          element={
            <Information
              image={image}
              name={name}
              text={text}
              lastname={lastname}
              mail={mail}
              number={number}
            />
          }
        />
        <Route
          path="/experience"
          element={
            <Experience
              image={image}
              name={name}
              text={text}
              lastname={lastname}
              mail={mail}
              number={number}
              setPosition={setPosition}
              position={position}
              employer={employer}
              setEmployer={setEmployer}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              about={about}
              setAbout={setAbout}
            />
          }
        />
      </Routes>
    </Container>
  );
}
const Container = styled.div``;
export default App;
