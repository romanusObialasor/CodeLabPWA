import React from "react";
import styled from "styled-components";

const SixthProps = ({ image, head, content }) => {
  return (
    <Wrapper>
      <Image src={image} />
      <Head>{head}</Head>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default SixthProps;

const Wrapper = styled.div`
  display: flex;
  max-width: 320px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
`;

const Image = styled.img`
  height: 50px;
`;

const Head = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-top: 10px;
`;

const Content = styled.div`
  margin-top: 5px;
  font-size: 13px;
`;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;
