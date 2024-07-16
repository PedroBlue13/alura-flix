import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #000, #001f3f, #0074d9);
  color: white;
`;

const NotFound = () => (
  <NotFoundContainer>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </NotFoundContainer>
);

export default NotFound;
