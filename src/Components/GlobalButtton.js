import React from "react";
import styled from "styled-components";

const GlobalButtton = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GlobalButtton;

const Container = styled.div`
  background: #377dff;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  transition: all 350ms;
  cursor: pointer;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  :hover {
    opacity: 0.9;
  }
`;
