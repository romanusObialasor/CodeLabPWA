import React from "react";
import styled from "styled-components";

const Fifth = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Head>
            Boost your team performance with GoodDay productivity suite
          </Head>
          <Sub>
            Work is not only about task! Take avantage of GoodDay productivity
            suite apps and increase your productivity by at least 20%.{" "}
          </Sub>
        </Top>
        <Apps>
          <Hold>
            <Image src="/images/my-work.png" />
            <span>My Work</span>
          </Hold>
          <Hold>
            <Image src="/images/discussions.png" />
            <span>Discussion</span>
          </Hold>
          <Hold>
            <Image src="/images/meetings.png" />
            <span>Meeting</span>
          </Hold>
          <Hold>
            <Image src="/images/todo.png" />
            <span>To-do List</span>
          </Hold>
          <Hold>
            <Image src="/images/chats.png" />
            <span>Chats</span>
          </Hold>
          <Hold>
            <Image src="/images/time-reports.png" />
            <span>Time Tracker</span>
          </Hold>
          <Holder>
            <Image src="/images/more-ps.png" />
            <span>More</span>
          </Holder>
        </Apps>
      </Wrapper>
    </Container>
  );
};

export default Fifth;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
  @media screen and (max-width: 375px) {
    font-size: 20px;
  }
`;

const Sub = styled.div`
  font-size: 15px;
  font-weight: 500;
  max-width: 700px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    max-width: 450px;
  }
`;

const Apps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: unset;
  }
`;

const Hold = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 50%;
  }
  span {
    position: absolute;
    bottom: 10px;
  }
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  span {
    position: absolute;
    bottom: 10px;
  }
`;

const Image = styled.img``;
