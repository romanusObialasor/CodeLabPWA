import React from "react";
import styled from "styled-components";

const FourthProps = ({ clr, flip, image, text }) => {
  return (
    <Container flip={flip}>
      <Image src={image} />
      <Holder>
        <span>Workspace</span>
        <Title clr={clr}>
          The way we work has
          <br /> changed, so should your tools
        </Title>
        <Content>{text}</Content>
      </Holder>
    </Container>
  );
};

export default FourthProps;

const Container = styled.div`
  display: flex;
  flex-direction: ${({ flip }) => (flip ? "row-reverse" : "row")};
  width: 75%;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

const Image = styled.img`
  height: 350px;
  @media screen and (max-width: 435px) {
    width: 300px;
    height: unset;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
  /* background-color: yellow; */
`;

const Holder = styled.div`
  max-width: 400px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    text-align: center;
    max-width: 500px;

    /* background: red; */
  }
  span {
    font-size: 15px;
    font-weight: 500;
  }
`;

const Title = styled.div`
  margin-top: 10px;
  color: ${({ clr }) => (clr ? "#a800ce" : "#377dff")};
  font-size: 25px;
  line-height: 1.2;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  br {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const Content = styled.div`
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.7;
`;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;
