import React from "react";
import styled from "styled-components";
import SixthProps from "./SixthProps";

const Sixth = () => {
  return (
    <Container>
      <Wrapper>
        <SixthProps
          image="/images/options.png"
          head="Ready to get started?"
          content="Start using technology of the future now. Unlimited usage. Free forever.Start using technology of the future now. Unlimited usage Free forever."
        />
        <SixthProps
          image="/images/box.png"
          head="Online personal session"
          content="We will conduct an online presentation for your team and help with migration & onboarding.We will conduct an online presentation for your team and help with migration & onboarding."
        />
        <SixthProps
          image="/images/speech-bubble.png"
          head="Have a question?"
          content="If you still have questions about GoodDay work platform, contact us anytime!If you still have questions about GoodDay work platform, contact us anytime!"
        />
      </Wrapper>
    </Container>
  );
};

export default Sixth;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  @media screen and (max-width: 768px) {
    width: 80%;
    justify-content: center;
  }
`;
