import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
.Card{
  background-color: ${({ theme }) =>
    theme.myTheme === "dark" ? "#212429" : ""};
  

  .Toggle{
    border: ${({ theme }) =>
      theme.myTheme === "dark" ? "1px solid white" : ""};
  }

  .circle{
    background-color: ${({ theme }) =>
      theme.myTheme === "dark" ? "white" : ""};
  }
  
}
`;

const Third = () => {
  return (
    <>
      <GlobalStyled />
      <Container>
        <Wrapper>
          <Top>
            <Head>All-in-one Work Management Platform</Head>
            <Sub>
              At any time, see your overall workload, know what to work on next,
              understand current priorities, and be able to easily re-organize
              work when the business goals change.{" "}
            </Sub>
          </Top>
          <Card>
            <LeftCard>
              <Card1 className="Card">
                <ImageHolder>
                  <Image1 src="/images/all-in-one-2.png" />
                </ImageHolder>
                <Text>
                  <div>All-in-one Work Management Platform</div>
                  <span>
                    Note that the development build is not optimized. To create
                    a production build, use npm run buildNote that the
                    development build is not optimized a production build, use
                    npm run build{" "}
                  </span>
                </Text>
              </Card1>
              <Holder>
                <Card2 className="Card">
                  <Image src="/images/project-management.png" />
                  <Text>
                    <div>All-in-one Work Management Platform</div>
                    <span>
                      Note that the development build is not optimized. To
                      create a production build, use npm run buildNote that the
                      development build is not optimized a production build, use
                      npm run build{" "}
                    </span>
                  </Text>
                </Card2>
                <LeftHolder>
                  <Card3 className="Card">
                    <Image src="/images/use-templates.png" />
                    <Text>
                      <div>One-click start with Developer Dashboard</div>
                    </Text>
                  </Card3>
                  <Card6 className="Card">
                    <Image src="/images/all-features.png" />
                    <Text>
                      <div>All features</div>
                    </Text>
                  </Card6>
                </LeftHolder>
              </Holder>
            </LeftCard>
            <Right>
              <Card4 className="Card">
                <Image src="/images/1.png" />
                <Text4>
                  <div>All-in-one Work Management Platform</div>
                  <span>
                    Note that the development build is not optimized. To create
                    a production build, use npm run buildNote that the
                    development build is not optimized a production build, use
                    npm run build{" "}
                  </span>
                </Text4>
              </Card4>
              <Card5 className="Card">
                <Image src="/images/connect-goals-strategy.png" />
                <Text4>
                  <div>All-in-one Work Management Platform</div>
                  <span>
                    Note that the development build is not optimized. To create
                    a production build, use npm run buildNote that the{" "}
                  </span>
                </Text4>
              </Card5>
            </Right>
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

export default Third;

const Container = styled.div`
  width: 100%;
  height: 100%.;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
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

const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  margin-top: 10px;
  flex-wrap: wrap;

  div {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
  }
  span {
    font-size: 12px;
    margin-top: 7px;
    max-width: 90%;
  }
`;

const LeftCard = styled.div`
  margin: 20px;

  @media screen and (max-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Card1 = styled.div`
  width: 550px;
  height: 300px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  /* padding: 5px; */
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 20px;
    width: 270px;
  }
`;

const Card2 = styled.div`
  width: 300px;
  min-height: 300px;
  height: 100%;
  background: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 5px;
  padding-bottom: 10px;
  @media screen and (max-width: 400px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 10px;
    width: 270px;
  }
`;

const Card3 = styled.div`
  width: 200px;
  min-height: 100px;
  height: 100%;
  background: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 5px;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Card4 = styled.div`
  width: 300px;
  height: 420px;
  background: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 5px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  @media screen and (max-width: 400px) {
    margin-top: 40px;
    width: 270px;
  }
`;
const Card5 = styled.div`
  width: 300px;
  height: 185px;
  background: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 5px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 30px;
  @media screen and (max-width: 400px) {
    width: 270px;
  }
`;
const Card6 = styled.div`
  width: 200px;
  min-height: 100px;
  height: 100%;
  background: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 5px;
  padding-bottom: 10px;
  margin-top: 12px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 95%;
  margin-top: 5px;
`;

const Image1 = styled.img`
  width: 95%;
  margin-top: 10px;
`;

const Text = styled.div`
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Text4 = styled.div`
  text-align: left;
  margin-left: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-between;
`;

const LeftHolder = styled.div`
  height: 100%;
  flex-wrap: wrap;
  /* justify-content: center;
  width: 100%; */

  div {
    text-align: center;
    font-size: 17px;
  }
`;

const Right = styled.div`
  margin: 20px;
`;

const ImageHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// const Top = styled.div``

// const Top = styled.div``

// const Top = styled.div``

// const Top = styled.div``
