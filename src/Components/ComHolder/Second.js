import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
.Wrapper{
  background-color: ${({ theme }) =>
    theme.myTheme === "dark" ? "rgba(252,252,252,0.3)" : ""};
  
}
`;

const Second = () => {
  return (
    <>
      <GlobalStyled />
      <Container>
        <Wrapper className="Wrapper">
          <Left>
            <Title>
              <span>Workspace</span>The way we work has change so we should
              change the tools we
            </Title>
            <Sub>
              Develop is a modern work management platform that brings together
              the best tools for high-level planning, project and product
              management, task organization and productivity growth based on
              transparency, agility, and motivation.
            </Sub>
          </Left>
          <Right src="/images/first-screen-goodday-new@2x.png" />
        </Wrapper>
      </Container>
    </>
  );
};

export default Second;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 70vh;
  width: 90%;
  background: #edfafe;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

const Left = styled.div`
  width: 400px;
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 15px;
  }
`;

const Right = styled.img`
  height: 270px;
  width: 700px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: unset;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 23px;
  font-weight: 600;
  line-height: 1.2;

  span {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const Sub = styled.div`
  margin-top: 10px;
  opacity: 0.7;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
