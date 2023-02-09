import React from "react";
import styled from "styled-components";
import { Main } from "./components/Main";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom";
function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main to="/main" replace />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Container>
  );
}
const Container = styled.div``;
export default App;
