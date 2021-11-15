import React from "react";
import styled from "styled-components";
import GlobalButtton from "./GlobalButtton";

const Header = () => {
  const [state, setState] = React.useState(false);
  const onToggle = () => {
    setState(!state);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <span>Develop</span>
          {!state ? (
            <Toggle>
              <Circle state onClick={onToggle} />
            </Toggle>
          ) : (
            <Toggle>
              <Circle onClick={onToggle} />
            </Toggle>
          )}
        </Left>
        <Right>
          <GlobalButtton>Get started</GlobalButtton>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 55px;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 25px;
    font-weight: bold;
    opacity: 0.5;
  }
`;

const Right = styled.div``;

const Toggle = styled.div`
  width: 60px;
  height: 25px;
  margin-left: 20px;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;
  transition: 350ms;
  :hover {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 10px;
  margin-left: ${({ state }) => (state ? "5px" : "35px")};
`;
